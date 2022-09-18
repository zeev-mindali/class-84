import "./Header.css";

interface killAble{
    killName: string;
}

function Header(props:killAble): JSX.Element {
    return (
        <div className="Header">
			<h1> Kill {props.killName} </h1>
        </div>
    );
}

export default Header;
