import "./switch.css";
import switchOn from "../../assets/on.png";
import switchOff from "../../assets/off.png";
import { useState } from "react";
import axios from "axios";

interface switchProps{
    name:string;
    value:number;
    id:number;
}

function Switch(props:switchProps): JSX.Element {
    const changeValue = async()=>{
        
        await axios.get(`http://localhost:3001/devices/${props.id}/${state?0:255}`)
        setState(!state);
    };
    const [state,setState] = useState(props.value===1);
    return (
        <div className="switch Box">
			{props.name}<br/><br/>
            <img src={state?switchOn:switchOff} onClick={()=>{changeValue()}}/>
        </div>
    );
}

export default Switch;
