import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import history from "./utilities/history";
import './App.css';
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
    //Creating a method to change the language onChnage from select box
    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value
      i18n.changeLanguage(languageValue);
    }
  return (
    <div className="App">
      {/* call name of the variable from the translation.json file to t() method */}
      <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
        <option value="en" >English</option>
        <option value="fr" >French</option>
        <option value="es" >Spanish</option>
      </select>
      
      <h1>{t('eventDetails',
    'speakers',
    'talks',
    'recordings',
    'faq',
    'saveDate',
    'signUp',
    'joinSlack',
    'showDatesEDT',
    'showDatesLocal',
    'session',
    'time',
    'title',
    'description',
    'speaker',
    'genre',
    'actions')}</h1> 
    </div>
  );



  React.useEffect( () => {
    // routes user to home page when clicking the rainbowCluster icon
    let element = document.getElementsByClassName("euiIcon") 
    for(let i = 0; i < element.length; i++)
      element[i].addEventListener("click", () => {
        history.push('/'); 
        window.location.reload();
      })
  }, []);

  return (
    <EuiProvider colorMode="dark">
      <MainPage />
    </EuiProvider>
  );
}

export default App;
