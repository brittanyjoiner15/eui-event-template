import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React, { useState, Suspense } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import history from "./utilities/history";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
function App() {
  React.useEffect(() => {
    // routes user to home page when clicking the rainbowCluster icon
    let element = document.getElementsByClassName("euiIcon");
    console.log("use Effect");
    for (let i = 0; i < element.length; i++)
      element[i].addEventListener("click", () => {
        history.push("/");
        window.location.reload();
      });
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const [theme, setTheme] = useState("dark");
  const {t} = useTranslation(["common"]);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  return (
    <Suspense fallback={null}>
    <EuiProvider colorMode={theme}>

      <Helmet>
        {theme === "light" ? (
          <link
            rel="stylesheet"
            href={
              "https://cdn.jsdelivr.net/npm/@elastic/eui@68.0.0/dist/eui_theme_light.min.css"
            }
          />
        ) : (
          <link
            rel="stylesheet"
            href={
              "https://cdn.jsdelivr.net/npm/@elastic/eui@68.0.0/dist/eui_theme_dark.min.css"
            }
          />
        )}
      </Helmet>
      
      <MainPage theme={theme} toggleTheme={toggleTheme}
      t={t}
      />
    </EuiProvider>
    </Suspense>
  );
}

export default App;
