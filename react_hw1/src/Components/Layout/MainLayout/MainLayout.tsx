import Details from "../Details/Details";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    let killName = "Bill";
    return (
        <div className="MainLayout">
            <div id="getKiller">
                <input type="text" id="killerName" placeholder="enter killer name" />
                <input type="button" value="change" />
            </div>
			<header><Header killName={killName}/></header>
            <div id="Details"><Details killName={killName}/></div>
            <div id="Skills"><Skills killName={killName}/></div>
        </div>
    );
}

export default MainLayout;
