import { useState } from "react";
import { NavLink } from "react-router-dom";
import { userLogout } from "../../../redux/authState";
import { store } from "../../../redux/store";
import "./Menu.css";

function Menu(): JSX.Element {
  // const priceVat = (price:number)=>price*1.17;
  // const itemPrice = priceVat(100);
  const [stam, setStam] = useState(false);
  const makeLogout = () => {
    console.log("i want to break free!!!!");
    store.dispatch(userLogout());
    setStam(true);
  };
  return (
    <div className="Menu">
      Menu
      <hr />
      <NavLink to="/car">find car</NavLink>
      <br />
      <br />
      <NavLink to="/bike">find bike</NavLink>
      <br />
      <br />
      <NavLink to="/truck">find truck</NavLink>
      <br />
      <br />
      <NavLink to="/offRoad">find off road</NavLink>
      <br />
      <br />
      <NavLink to="/handiCap">find handi cap</NavLink>
      <br />
      <br />
      <NavLink to="/recall">find recall</NavLink>
      <br />
      <br />
      <NavLink to="/badForm">add new car</NavLink>
      <br />
      <br />
      <NavLink to="/goodForm">add a car like a boss</NavLink>
      <br />
      <br />
      <NavLink to="/coolForm">add styled form</NavLink>
      <br />
      <br />
      Hello {store.getState().authState.userName},{" "}
      <button onClick={makeLogout}>Logout</button>
    </div>
  );
}

export default Menu;

/*
    <a href="/car">find car</a><br/><br/>
    <a href="/bike">find bike</a><br/><br/>
    <a href="/truck">find truck</a><br/><br/>
    <a href="/offRoad">find offRoad</a><br/><br/>
    <a href="/recall">find recall</a><br/><br/>
    <a href="/handiCap">find handicap</a><br/><br/>
*/
