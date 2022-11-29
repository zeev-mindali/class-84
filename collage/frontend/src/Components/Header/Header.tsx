import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Students</h1>
            <br/><br/>
            <NavLink to="/">Main</NavLink>    
            <span> | </span>
            <NavLink to="/add">Add</NavLink>
            <hr/>
        </div>
    );
}

export default Header;
