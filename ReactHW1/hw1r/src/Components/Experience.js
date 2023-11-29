import React from "react";
import ReactDOM from "react-dom";
import '../ComponentStyles/Experience.css';

function Experience(){
    return(
        <div className="experience-component">

            <small className="working-period"><i>1.1.1970 - 11.11.2003</i></small>
            <p>
                Company: <b>StarLink</b> <br></br>
                Position: <b>Senior Full-Stack developer</b> <br></br>
           </p>
        </div>
    );
}

export default Experience;