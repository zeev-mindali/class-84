import axios from "axios";
import { SyntheticEvent, useState } from "react";
import SingleCarData from "../../../model/SingleCarData";
import urls from "../../../model/Urls";
import convertHebDate from "../../../utils/DateUtils";
import SingleCar from "../SingleCar/SingleCar";
import "./CarLocator.css";

function CarLocator(): JSX.Element {
    //const cars:SingleCarData[] = [];
    //useState<class data[]>=([])
    const [carNumber, setCarNumber] = useState("");
    const [cars,setCars] = useState<SingleCarData[]>([])
    let tempCars:SingleCarData[] = [];
    const searchCar = (args:SyntheticEvent)=>{
        const myData = (args.target as HTMLInputElement).value;
        setCarNumber(myData);
    };
    const searchClick = ()=>{
        getRestData_2();
    };

    const getRestData_1 = async ()=>{
        const result = await axios.get(urls.carUrl+carNumber);
        const myData = result.data.result.records;
        storeResult(myData);
        tempCars.map(async (item)=>{
            const result = await axios.get(urls.handCapUrl+item.mispar_rechev);
            item.handiCap = result.data.result.records.length>0;
        });
        console.log(tempCars);
        setCars(tempCars);
    };

    const getRestData_2 = ()=>{
        axios.get(urls.carUrl+carNumber)
        .then((response)=>{
            const myData = response.data.result.records;
            storeResult(myData);
        })
        .then (()=>{
            tempCars.map(async (item)=>{
               axios.get(urls.handCapUrl+item.mispar_rechev)
                .then ((response) =>item.handiCap = response.data.result.records.length>0)
                .then (()=>setCars(tempCars));
            });
        })
        .catch((err)=>{
            console.log("error",err);
        });
    };

    const storeResult = (myData:SingleCarData[])=>{
        myData.map((item:SingleCarData)=>{
            let singleCar = new SingleCarData();
            singleCar.mispar_rechev = item.mispar_rechev;
            singleCar.kinuy_mishari = item.kinuy_mishari;
            singleCar.shnat_yitzur = item.shnat_yitzur;
            if (item.tokef_dt){ 
                singleCar.tokef_dt=convertHebDate(item.tokef_dt);
            }
            singleCar.tozeret_nm = item.tozeret_nm;
            singleCar.tzeva_rechev = item.tzeva_rechev;
            tempCars.push(singleCar);
        });
        //console.log(cars);
    };


   
    return (
        <div className="CarLocator">

            <div className="Box">
                <h1>Car Locatoer</h1><hr/>
                <input type="text" onChange={searchCar} placeholder="enter car number"/>
                <input type="button" value="locate" onClick={searchClick}/>
            </div><br/>
            {cars.map(item=><SingleCar key={item.mispar_rechev} mispar_rechev={item.mispar_rechev} tozeret_nm={item.tozeret_nm} kinuy_mishari={item.kinuy_mishari} tzeva_rechev={item.tzeva_rechev} shnat_yitzur={item.shnat_yitzur} tokef_dt={item.tokef_dt} handiCap={item.handiCap}/>)}
        </div>        
    );
}

export default CarLocator;
