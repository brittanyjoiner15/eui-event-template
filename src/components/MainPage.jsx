import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
} from "@elastic/eui";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import Navbar from "./Navbar";
import mixpanel from 'mixpanel-browser'; // importing mixpanel


// mixpanel.init('YOUR_TOKEN'); // initializing mixpanel

function MainPage() {
  const [selectedTab, setSelectedTab] = useState("event");

import RecordingsPanel from "./panels/RecordingsPanel";
import FAQsPanel from "./panels/FAQsPanel";
import { Routes, Route } from "react-router-dom";
import history from "../utilities/history";
import { Suspense } from "react";


import spinner from "../utilities/spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "400px",
          margin: "auto",
          display: "block",
          transition: "ease-in-out",
        }}
        alt="Test..."
      />
      <h1 style={{ fontSize: "25px", textAlign: "center" }}>
        Loading...Hold On😪
      </h1>
    </div>
  );
};

function MainPage(props) {
  const tabs = [
    {
      id: "event",
      label: "Event Details",
      onClick: () => {
        history.push("/events");
        window.location.reload();
      },
    },
    {
      id: "speakers",
      label: "Speakers",
      onClick: () => {
        history.push("/speakers");
        window.location.reload();
      },
    },
    {
      id: "talks",
      label: "Talks",
      onClick: () => {
        history.push("/talks");
        window.location.reload();
      },
    },
    {
      id: "recordings",
      label: "Recordings",
      onClick: () => {
        history.push("/recordings");
        window.location.reload();
      },
    },
    {
      id: "faq",
      label: "FAQs",
      onClick: () => {
        history.push("/faq");
        window.location.reload();
      },
    },
  ];


  const onLogoClick = useCallback(() => {
    onSelectedTabChanged("event");
    mixpanel.track("Rainbow logo clicked") // Tracking logo click event
  }, []);


  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar
            tabs={tabs}
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
            <EuiPageContentBody>
              <Routes>
                <Route path="/" element={<EventDetails />} />
                <Route path="/events" element={<EventDetails />} />
                <Route
                  path="/speakers"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <SpeakersPanel />
                    </Suspense>
                  }
                />
                <Route
                  path="/talks"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <TalksPanel />
                    </Suspense>
                  }
                />
                <Route path="/recordings" element={<RecordingsPanel />} />
                <Route path="/faq" element={<FAQsPanel />} />
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar theme={props.theme} />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
