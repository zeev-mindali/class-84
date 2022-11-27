import "./switch.css";
import switchOn from "../../assets/on.png";
import switchOff from "../../assets/off.png";
import { useState } from "react";

interface switchProps{
    name:string;
    value:number;
}

function Switch(props:switchProps): JSX.Element {
    const [state,setState] = useState(props.value===1);
    return (
        <div className="switch Box">
			{props.name}<br/><br/>
            <img src={state?switchOn:switchOff} onClick={()=>{setState(!state)}}/>
        </div>
    );
}

export default Switch;
