import "./Details.css";

interface killAble{
    killName: string;
}
function Details(props:killAble): JSX.Element {
    return (
        <div className="Details">
			<h2>Why kill {props.killName}?</h2>
            <ul>
                <li>becuase he is stuiped</li>
                <li>becuase he is ugly</li>
                <li>becuase he does not know english</li>
                <li>becuase he do not have Lexus</li>
            </ul>
        </div>
    );
}

export default Details;
