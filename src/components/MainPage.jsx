import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
} from "@elastic/eui";
import { React, useCallback, useState } from "react";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import Navbar from "./Navbar";

function MainPage(props) {
  const [selectedTab, setSelectedTab] = useState("event");

  const onSelectedTabChanged = (id) => {
    setSelectedTab(id);
  };

  const showSelectedContent = () => {
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

  const tabs = [
    {
      id: "event",
      isSelected: selectedTab === "event",
      label: "Event Details",
      onClick: () => onSelectedTabChanged("event"),
      content: (
        <>
          <EventDetails />
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
      content: <TalksPanel />,
    },
  ];

  const onLogoClick = useCallback(() => {
    onSelectedTabChanged("event");
  }, []);

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar
            tabs={tabs}
            onLogoClick={onLogoClick}
            theme={props.theme}
            toggleTheme={props.toggleTheme}
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
            <EuiPageContentBody>{showSelectedContent()}</EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
