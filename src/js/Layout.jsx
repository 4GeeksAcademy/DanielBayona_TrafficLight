import React, {useState, useEffect} from "react";
import TrafficLight from "./components/trafficLight/TrafficLight.jsx";






const Layout = () =>{
    const [activeLight, setIsActive] = useState();
    const [sequence, setSequence] = useState(false);

    const handleLightClick = (light) =>{
        setIsActive(light);
    }

    const handleSequence = () =>{
     setSequence(!sequence);
    }


    return (
        <>
        <div className="my-container">
            <div className="flex-container">
                <div className="light-post"></div>
                <div className="lightContainer">
                    <div className="light-body">
                    <TrafficLight
                            className="red-light"
                            isOn={activeLight === 'red'}
                            handleClick={() => handleLightClick('red')}
                        />
                        <TrafficLight
                            className="orange-light"
                            isOn={activeLight === 'orange'}
                            handleClick={() => handleLightClick('orange')}
                        />
                        <TrafficLight
                            className="green-light"
                            isOn={activeLight === 'green'}
                            handleClick={() => handleLightClick('green')}
                        />
                    </div>
                </div>
                <button className="click-me" onClick={handleSequence}>CLICK ME</button>
            </div>
        </div>           
        </>
    )
}

export default Layout