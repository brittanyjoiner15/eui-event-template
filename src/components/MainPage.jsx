import React, { useCallback, useState, useEffect } from "react";
import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer
} from "@elastic/eui";

import Navbar from "./Navbar";
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
//import Navbar from "./Navbar";
import mixpanel from 'mixpanel-browser'; // importing mixpanel
import { useTranslation } from "react-i18next";
import i18next from "i18next";
// mixpanel.init('YOUR_TOKEN'); // initializing mixpanel

import RecordingsPanel from "./panels/RecordingsPanel";
import FAQsPanel from "./panels/FAQsPanel";
import { Routes, Route } from "react-router-dom";
import history from "../utilities/history";
import { Suspense } from "react";


import spinner from "../utilities/spinner.gif";
import Testpage from "../utilities/Testpage";
import Select from "../utilities/Select";
//function MainPage() {
//  const [selectedTab, setSelectedTab] = useState("event");


const Spinner = () => {
  const {i18n, t } = useTranslation(["common"])
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
        {t("Loading...Hold On")}😪
      </h1>
    </div>
  );
};

function MainPage(props) {
   const {i18n, t } = useTranslation(["common"])

  const tabs = [
    {
      id: "event",
      label: t("Event Details"),
      onClick: () => {
        history.push("/events");
        window.location.reload();
      },
    },
    {
      id: "speakers",
      label: t("Speakers"),
      onClick: () => {
        history.push("/speakers");
        window.location.reload();
      },
    },
    {
      id: "talks",
      label: t("Talks"),
      onClick: () => {
        history.push("/talks");
        window.location.reload();
      },
    },
    {
      id: "recordings",
      label: t("Recordings"),
      onClick: () => {
        history.push("/recordings");
        window.location.reload();
      },
    },
    {
      id: "faq",
      label: t("FAQs"),
      onClick: () => {
        history.push("/faq");
        window.location.reload();
      },
      
    },
    {
      id: "Changelanguage",
      label: <Select />,
    },

    
  ];

  const onLogoClick = useCallback(() => {
    //onSelectedTabChanged("event");
    // mixpanel.track("Rainbow logo clicked") // Tracking logo click event
  }, []);


  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
       
        <EuiPageBody panelled>
          <Navbar
            tabs={tabs}
            theme={props.theme}
            toggleTheme={props.toggleTheme}
            t={props.t}
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
                <Route path="/" element={<EventDetails 
              t={props.t}
                />} />
                <Route path="/events" element={<EventDetails 
                  t={props.t}
                />} />
                <Route
                  path="/speakers"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <SpeakersPanel   t={props.t}/>
                    </Suspense>
                  }
                />
                <Route
                  path="/talks"
                  element={
                    <Suspense fallback={<Spinner />}>
                      <TalksPanel  t={props.t}/>
                    </Suspense>
                  }
                />
                <Route path="/recordings" element={<RecordingsPanel 
                 t={props.t}
                />} />
                <Route path="/faq" element={<FAQsPanel
                  t={props.t} />} />
                  <Route 
                  path="/test"
                  element={<Testpage />}
                  />
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar theme={props.theme}
          t ={props.t}
          />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
