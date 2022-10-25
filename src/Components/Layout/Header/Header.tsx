import { useEffect, useState } from "react";
import { userLogout } from "../../../redux/authState";
import { store } from "../../../redux/store";
import "./Header.css";

function Header(): JSX.Element {
  const [userTime, setTime] = useState(new Date().toLocaleTimeString());
  const [stam, setStam] = useState(false);
  useEffect(() => {
    const timeRunner = setInterval(() => {
      const myTime = new Date().toLocaleTimeString();
      //console.log(myTime)
    }, 1000);
  }, []);

  return (
    <div className="Header">
      <h1>My Car Locater System</h1>
      {/*<h1>{userTime}</h1>*/}
      <h1>Hello {store.getState().authState.userName} </h1>
    </div>
  );
}

export default Header;
