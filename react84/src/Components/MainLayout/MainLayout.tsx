import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Menu from "../Layout/Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><Main/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
