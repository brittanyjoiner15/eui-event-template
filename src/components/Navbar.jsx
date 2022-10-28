import React from "react";
import { EuiIcon, EuiPageHeader } from "@elastic/eui";
import { addCalButtons } from "../utilities/addCalButtons";
/*import { makeRainbowText } from "../utilities/rainbowLetters";*/
import { sessionOne, sessionTwo, darkThemeLogo, lightThemeLogo } from "../data/consts";
import history from "../utilities/history";
import { useState } from "react";

export default function Navbar(props) {
  const [preload, setPreload] = useState("preload");
  setTimeout(function () {
    setPreload("");
  }, 500);

  return (
    <>
      <EuiPageHeader
        iconType={props.theme === "dark"?darkThemeLogo:lightThemeLogo}
        iconProps={{
          onClick: props.onLogoClick,
        }}
        pageTitle="IDT Conference"
        pageTitleProps={{
          css: {
            cursor: "pointer",
            userSelect: "none",
            maxWidth: "310px",
          },
          onClick: () => {
            history.push("/");
            window.location.reload();
          },
        }}
        rightSideItems={[
          addCalButtons(sessionTwo.dateAndTime, sessionTwo.calendarLink),
          addCalButtons(sessionOne.dateAndTime, sessionOne.calendarLink),
          <div className="themeButton" onClick={() => props.toggleTheme()}>
            <EuiIcon type="moon" className="moon" />
            <EuiIcon type="sun" className="sun" />
            <div className={`ball ${props.theme} ${preload}`}></div>
          </div>,
        ]}
        tabs={props.tabs}
      />
    </>
  );
}
