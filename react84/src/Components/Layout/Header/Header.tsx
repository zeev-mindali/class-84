import { useEffect, useState } from "react";
import "./Header.css";

function Header(): JSX.Element {

    const [userTime,setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const timeRunner = setInterval(()=>{
            const myTime = new Date().toLocaleTimeString();
            //console.log(myTime)
            
        },1000);
    },[]);
    

    return (
        <div className="Header">
			<h1>My Car Locater System</h1>
            <h1>{userTime}</h1>
        </div>
    );
}

export default Header;
