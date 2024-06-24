import React from "react";
import "./TrafficLight.css"


const TrafficLight = ({className, isOn,handleClick}) =>{


    return(
        <>
        <div 
            className={`traffic-light ${className} ${isOn ? "on" : ""}`}
            onClick={handleClick}
        ></div>
        </>
    );
}

export default TrafficLight;