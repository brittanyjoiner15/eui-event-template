import React from "react";
import { EuiPageHeader } from "@elastic/eui";
import { addCalButtons } from "../utilities/addCalButtons";
import { makeRainbowText } from "../utilities/rainbowLetters";
import { sessionOne, sessionTwo, rainbowCluster } from "../data/consts";

export default function Navbar(props) {
  
  return (
    <>
      <EuiPageHeader
        restrictWidth
        iconType={rainbowCluster}
        pageTitle={makeRainbowText()}
        rightSideItems={[
          addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
          addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
        ]}
        tabs={props.tabs}
      />
    </>
  );
}
