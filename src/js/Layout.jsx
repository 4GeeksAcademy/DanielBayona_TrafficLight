import React, {useState, useEffect} from "react";
import TrafficLight from "./components/trafficLight/TrafficLight.jsx";







const Layout = () =>{
    const [activeLight, setIsActive] = useState(null);
    const [sequence, setSequence] = useState(false);
    const [showPurple, setPurple] = useState(false);

    const handleLightClick = (light) =>{
        setIsActive(light);
    }

    const handleSequence = () => {
        setSequence(previousState => !previousState);
        
    }

    const handlePurple = () =>{
        setPurple(!showPurple);
    }

    const changeState = () =>{
        if(activeLight == null){
            handleLightClick('red');
        } else if(activeLight == 'red'){
            handleLightClick('orange');
        } else if(activeLight == 'orange'){
            handleLightClick('green');
        } else if(activeLight == 'green'){
            handleLightClick('');
        }
    }

    useEffect(() =>{
        let time;
        if(sequence){
            time = setTimeout(() => {
                changeState();
            }, 1000);
        }
       return () => clearTimeout(time);
    },[sequence, activeLight])


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
                        {showPurple && (
                        <TrafficLight
                             className="purple-light"
                             isOn={activeLight === "purple"}
                             handleClick={() => handleLightClick("purple")}
                        />
                        )}
                    </div>
                </div>
                <button className="click-me" onClick={() => handleSequence()}>CLICK ME</button>
                <button className="purpleBtn" onClick={() => handlePurple()}>Purple!!</button>
            </div>
        </div>           
        </>
    )
}

export default Layout