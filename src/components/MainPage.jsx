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
import RecordingsPanel from "./panels/RecordingsPanel";
import { Routes, Route } from "react-router-dom";
import history from "../utilities/history";

function MainPage() {
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
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar tabs={tabs} />
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
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="l" />
          </EuiPageContent>
          <BottomBar />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
