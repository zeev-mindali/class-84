import { BrowserRouter } from "react-router-dom";
import CarLocator from "../cars/CarLocator/CarLocator";
import Routing from "../cars/routing/routing";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Menu from "../Layout/Menu/Menu";
import MyLogin from "../myLogin/myLogin";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
            <BrowserRouter>
                <header><Header/></header>
                <aside><Menu/></aside>
                <main><Routing/></main>
                <footer><Footer/></footer>
            </BrowserRouter>
        </div>
    );
}

export default MainLayout;
