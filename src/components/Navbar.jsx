import React from "react";
import { EuiIcon, EuiPageHeader } from "@elastic/eui";
import { addCalButtons } from "../utilities/addCalButtons";
/*import { makeRainbowText } from "../utilities/rainbowLetters";*/
import { sessionOne, sessionTwo, eventIcon } from "../data/consts";

export default function Navbar(props) {
  
  return (
    <>
      <EuiPageHeader
        restrictWidth
        iconType={eventIcon}
        iconProps={{
          onClick: props.onLogoClick,
        }}
        pageTitle="IDT Conference"
        rightSideItems={[
          <div className="themeButton" onClick={() => props.toggleTheme()}>
            <EuiIcon type="moon" className="moon" />
            <EuiIcon type="sun" className="sun" />
            <div className={`ball ${props.theme}`}></div>
          </div>,
          addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
          addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
          <div className="themeButton" onClick={() => props.toggleTheme()}>
            <EuiIcon type="moon" className="moon" />
            <EuiIcon type="sun" className="sun" />
            <div className={`ball ${props.theme}`}></div>
          </div>,
        ]}
        tabs={props.tabs}
      />
    </>
  );
}
