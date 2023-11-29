import React from "react";
import { ReactDOM } from "react";
import '../ComponentStyles/UserCV.css';

import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";

function UserCV() {

    return (
        <div className="CV-body">
            <h1>Curriculum Vitae</h1>
            <PersonalInfo />

            <h2>Experience:</h2>
            <Experience />

            <Contacts />
        </div>
    );
}

export default UserCV;