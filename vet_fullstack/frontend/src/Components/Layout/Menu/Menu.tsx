import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <br/><br/>
			<NavLink to="/ListAnimals">List Animals</NavLink>
            <span> | </span>
            <NavLink to="/ListCustomers">List Customers</NavLink>
            <span> | </span>
            <NavLink to="/AnimalTypes">Animal Types</NavLink>
            <span> | </span>
            <NavLink to="/Medicines">Medicines</NavLink>
            <span> | </span>
            <NavLink to="/Login">Login</NavLink>
            <br/><br/>
        </div>
    );
}

export default Menu;
