import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  return (
    <EuiProvider colorMode="dark">
      <MainPage />
    </EuiProvider>
  );
}

export default App;
