import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React, { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import history from "./utilities/history";

function App() {

  React.useEffect( () => {
    // routes user to home page when clicking the rainbowCluster icon
    let element = document.getElementsByClassName("euiIcon") 
    console.log("use Effect")
    for(let i = 0; i < element.length; i++)
      element[i].addEventListener("click", () => {
        history.push('/'); 
        window.location.reload();
      })
  }, []);

    
  const [theme, setTheme] = useState("dark");
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
