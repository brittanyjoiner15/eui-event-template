import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiSpacer,
} from "@elastic/eui";
import { React, useState } from "react";
import { rainbowCluster } from "../data/ImageRefs";
import { addCalButtons } from "./AddCalButtons";
import BottomBar from "./BottomBar";
import { sessionOne, sessionTwo } from "./consts";
import DetailsPanel from "./panels/DetailsPanel";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import TalksTBDPanel from "./panels/TalksTBDPanel";
import { makeRainbowText } from "./RainbowLetters";
import mixpanel from "mixpanel-browser";

function MainPage() {
  const [selectedTab, setSelectedTab] = useState("event");
  const [isAdmin, setIsAdmin] = useState(false);
  const [typedPassword, setTypedPassword] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onSelectedTabChanged = (id) => {
    setSelectedTab(id);
    mixpanel.track(`Visited tab ${id}`);
  };

  const showSelectedContent = (tab) => {
    switch (selectedTab) {
      case "event":
        return tabs[0].content;
      case "speakers":
        return tabs[1].content;
      case "talks":
        return tabs[2].content;
      default:
        return tabs[0].content;
    }
  };

  const loginButton = () => {
    return (
      <>
        <EuiButton
          color={"text"}
          onClick={() => {
            if (isAdmin) {
              setIsAdmin(false);
              setTypedPassword("");
            }
            if (!isAdmin) {
              showLoginModal
                ? setShowLoginModal(false)
                : setShowLoginModal(true);
            }
          }}
        >
          {isAdmin ? "Switch to user" : "I'm an admin"}
        </EuiButton>
      </>
    );
  };

  const promptPassword = () => {
    const password = process.env.REACT_APP_PASSWORD;

    const handleSubmit = () => {
      if (!typedPassword) {
        return;
      }

      if (typedPassword === password) {
        setIsAdmin(true);
        setShowLoginModal(false);
      } else {
        alert("Incorrect password");
        setTypedPassword("");
      }
    };

    return (
      <>
        <EuiModal
          onClose={() => {
            setShowLoginModal(false);
          }}
        >
          <EuiModalHeader>
            <EuiModalHeaderTitle>
              <h1>Login</h1>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiForm>
              <EuiFormRow>
                <EuiFieldText
                  placeholder="Enter the password"
                  onBlur={(e) => setTypedPassword(e.target.value)}
                  aria-label="Use aria labels when no actual label is in use"
                />
              </EuiFormRow>
            </EuiForm>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton type="submit" onClick={handleSubmit()} fill>
              Submit
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      </>
    );
  };

  const tabs = [
    {
      id: "event",
      isSelected: selectedTab === "event",
      label: "Event Details",
      onClick: () => onSelectedTabChanged("event"),
      content: (
        <>
          <DetailsPanel />
        </>
      ),
    },
    {
      id: "speakers",
      isSelected: selectedTab === "speakers",
      label: "Speakers",
      onClick: () => onSelectedTabChanged("speakers"),
      content: (
        <>
          <SpeakersPanel />
        </>
      ),
    },
    {
      id: "talks",
      isSelected: selectedTab === "talks",
      label: "Talks",
      onClick: () => onSelectedTabChanged("talks"),
      content: isAdmin ? <TalksPanel /> : <TalksTBDPanel />,
    },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <EuiPageHeader
            restrictWidth
            iconType={rainbowCluster}
            pageTitle={makeRainbowText()}
            rightSideItems={[
              loginButton(),
              addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
              addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
            ]}
            tabs={tabs}
          />

          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>
              {showSelectedContent(selectedTab)}
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar />
          {showLoginModal && promptPassword()}
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
