import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiText,
} from "@elastic/eui";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import RecordingsPanel from "./panels/RecordingsPanel";
import FAQsPanel from "./panels/FAQsPanel";
import { Routes, Route } from "react-router-dom";
import history from "../utilities/history";
import { getColorTheme } from "../utilities/colors";

function MainPage(props) {
  const tabs = [
    {
      id: "event",
      label: <EuiText color={getColorTheme("text",props.theme)}>Event Details</EuiText>,
      onClick: () => {
        history.push("/events");
        window.location.reload();
      },
    },
    {
      id: "speakers",
      label: <EuiText color={getColorTheme("text",props.theme)}>Speakers</EuiText>,
      onClick: () => {
        history.push("/speakers");
        window.location.reload();
      },
    },
    {
      id: "talks",
      label: <EuiText color={getColorTheme("text",props.theme)}>Talks</EuiText>,
      onClick: () => {
        history.push("/talks");
        window.location.reload();
      },
    },
    {
      id: "recordings",
      label: <EuiText color={getColorTheme("text",props.theme)}>Recordings</EuiText>,
      onClick: () => {
        history.push("/recordings");
        window.location.reload();
      },
    },
    {
      id: "faq",
      label: <EuiText color={getColorTheme("text",props.theme)}>FAQs</EuiText>,
      onClick: () => {
        history.push("/faq");
        window.location.reload();
      },
    },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar tabs={tabs} theme={props.theme} toggleTheme={props.toggleTheme} />
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
              <Routes>
                <Route path="/" element={<EventDetails />} />
                <Route path="/events" element={<EventDetails />} />
                <Route path="/speakers" element={<SpeakersPanel />} />
                <Route path="/talks" element={<TalksPanel />} />
                <Route path="/recordings" element={<RecordingsPanel />} />
                <Route path="/faq" element={<FAQsPanel />} />
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar theme={props.theme}/>
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
