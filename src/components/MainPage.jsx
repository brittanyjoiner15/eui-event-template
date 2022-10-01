import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
} from "@elastic/eui";
<<<<<<< HEAD
import React from "react";
=======
import { React, useCallback, useState } from "react";
>>>>>>> 8cefe4c73b1dea7f5fa33c6bd15071cb1bbae463
import BottomBar from "./BottomBar";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom'
import history from "../utilities/history";

function MainPage() {

  const tabs = [
    {
      id: "event",  
      label: "Event Details",
      onClick: () => {history.push('/events'); window.location.reload();},
    },
    {
      id: "speakers",    
      label: "Speakers",
      onClick: () =>{history.push('/speakers'); window.location.reload();},
    },
    {
      id: "talks",   
      label: "Talks",
      onClick: () => {history.push('/talks'); window.location.reload();},  
    },
  ];

  const onLogoClick = useCallback(() => {
    onSelectedTabChanged("event");
  }, []);

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar tabs={tabs} onLogoClick={onLogoClick} />
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
                <Route path='/' element={<EventDetails />} />
                <Route path='/events' element={<EventDetails />} />
                <Route path='/speakers' element={<SpeakersPanel />} />
                <Route path='/talks' element={<TalksPanel />} />  
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
