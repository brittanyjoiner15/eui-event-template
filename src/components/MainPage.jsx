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
import { Routes, Route } from 'react-router-dom'
import history from "../utilities/history";

function MainPage() {
  // const [selectedTab, setSelectedTab] = useState("event");   // commented out because approach doesnt work with routing

  // const onSelectedTabChanged = (id) => { // commented out because approache doesnt work with routing
  //   setSelectedTab(id);
  // };

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

  
  // const onLogoClick = useCallback(() => {  // commented out because it doesnt seem to work and conflicts with with routing 
  //   onSelectedTabChanged("event");         // we have a the useEffect hook running to attach an eventlistener and handle icon clicks in the App.js
  // }, []);

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
        <Navbar tabs={tabs} /> 
        {/* <Navbar tabs={tabs} onLogoClick={onLogoClick} /> */} 
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
