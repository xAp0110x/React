import React from "react";
import ReactDOM from "react-dom";
import '../ComponentStyles/PersonalInfo.css';


function PersonalInfo(){
    let name = "Elmar";
    let age = "20";
    let adress = "Azerbaijan, Baku";

    return(
        <div className="info-component">
            <h2>Personal Info:</h2>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Adress: {adress}</li>
            </ul>
        </div>
    );
}

export default PersonalInfo;