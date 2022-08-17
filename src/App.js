import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import mixpanel from "mixpanel-browser";

function App() {
  mixpanel.init("b09de8335a473b17187b199a62703d58", { debug: true });
  mixpanel.track("Load app");
  return (
    <EuiProvider colorMode="dark">
      <MainPage />
    </EuiProvider>
  );
}

export default App;
