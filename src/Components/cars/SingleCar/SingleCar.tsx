import SingleCarData from "../../../model/SingleCarData";
import "./SingleCar.css";

function SingleCar(props:SingleCarData): JSX.Element {
    return (
        <div className="SingleCar Box">
			<h1>{props.mispar_rechev}</h1><hr/>
            {props.tozeret_nm}<br/>
            {props.kinuy_mishari}<br/>
            {props.tzeva_rechev}<br/>
            {props.shnat_yitzur}<br/>
            {props.tokef_dt}<br/>
            {props.handiCap?"handiCap":"not handicap"}
        </div>
    );
}

export default SingleCar;
