import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React,{ useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () =>{
    setTheme((curr)=>(curr==="dark" ? "light" : "dark"))
  }
  return (
    <EuiProvider colorMode={theme}>
      <MainPage theme={theme} toggleTheme={toggleTheme}/>
    </EuiProvider>
  );
}

export default App;
