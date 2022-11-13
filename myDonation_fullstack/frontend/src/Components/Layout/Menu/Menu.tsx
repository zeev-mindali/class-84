import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      <NavLink to="/donationList">Donation List</NavLink>
      <span> | </span>
      <NavLink to="/addDonation">Add Donation</NavLink>
    </div>
  );
}

export default Menu;
