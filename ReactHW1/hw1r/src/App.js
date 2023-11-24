import React from "react";
import ReactDOM from "react-dom";
import './App.css';

import PersonalInfo from "./Components/PersonalInfo";


function App() {
  return (
    <div className="App">

      <div className="CV-body">
        <h1>Curiculum Vitae</h1>
        
        <PersonalInfo />
      </div>

    </div>
  );
}

export default App;
