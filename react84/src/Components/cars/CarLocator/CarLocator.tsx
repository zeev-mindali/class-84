import axios from "axios";
import { SyntheticEvent, useState } from "react";
import SingleCarData from "../../../model/SingleCarData";
import SingleCar from "../SingleCar/SingleCar";
import "./CarLocator.css";

function CarLocator(): JSX.Element {
    //const cars:SingleCarData[] = [];
    const [cars,setCars] = useState<SingleCarData[]>([])
    const carURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=5&q="
    const [carNumber, setCarNumber] = useState("");
    const searchCar = (args:SyntheticEvent)=>{
        const myData = (args.target as HTMLInputElement).value;
        setCarNumber(myData);
    };
    const searchClick = ()=>{
        getRestData_1();
    };

    const getRestData_1 = async ()=>{
        let tempCars:SingleCarData[] = [];
        const result = await axios.get(carURL+carNumber);
        const myData = result.data.result.records;
        //without controctur
        //console.log(result.data.result.records);
        myData.map((item:SingleCarData)=>{
            let singleCar = new SingleCarData();
            singleCar.mispar_rechev = item.mispar_rechev;
            singleCar.kinuy_mishari = item.kinuy_mishari;
            singleCar.shnat_yitzur = item.shnat_yitzur;
            singleCar.tokef_dt=item.tokef_dt;
            singleCar.tozeret_nm = item.tozeret_nm;
            singleCar.tzeva_rechev = item.tzeva_rechev;
            tempCars.push(singleCar);
        });
        //console.log(cars);
        setCars(tempCars);
    };

    const getRestData_2 = ()=>{

    };
    return (
        <div className="CarLocator">

            <div className="Box">
                <h1>Car Locatoer</h1><hr/>
                <input type="number" onChange={searchCar} placeholder="enter car number"/>
                <input type="button" value="locate" onClick={searchClick}/>
            </div><br/>
            {cars.map(item=><SingleCar key={item.mispar_rechev} mispar_rechev={item.mispar_rechev} tozeret_nm={item.tozeret_nm} kinuy_mishari={item.kinuy_mishari} tzeva_rechev={item.tzeva_rechev} shnat_yitzur={item.shnat_yitzur} tokef_dt={item.tokef_dt}/>)}
        </div>        
    );
}

export default CarLocator;
