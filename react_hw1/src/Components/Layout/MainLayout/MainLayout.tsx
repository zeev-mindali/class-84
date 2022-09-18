import { SyntheticEvent, useState } from "react";
import { SyntheticExpression } from "typescript";
import Details from "../Details/Details";
import Header from "../Header/Header";
import Skills from "../Skills/Skills";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    let killName = "Bill";
    //let myKiller ="Zeev";
    const [myKiller,setKiller] = useState("wait for killer name");
    // const killChange = (args:SyntheticEvent)=>{
    //     const myValue = (args.target as HTMLInputElement).value;
    //     console.log(myValue);

    // };
    function killChange(args:SyntheticEvent){
        const myValue = (args.target as HTMLInputElement).value;
        console.log(myValue);
        //myKiller = myValue;
        setKiller(myValue)
    }
    return (
        <div className="MainLayout">
            <div id="getKiller">
                <input type="text" id="killerName" placeholder="enter killer name" onChange={killChange}/>
                <input type="button" value="change" />
                <div id="res">{myKiller}</div>
            </div>
			<header><Header killName={killName}/></header>
            <div id="Details"><Details killName={killName}/></div>
            <div id="Skills"><Skills killName={killName}/></div>
        </div>
    );
}

export default MainLayout;
