import { SyntheticEvent, useEffect, useState } from "react";
import "./myLogin.css";


function MyLogin(): JSX.Element {
    //useState  [variable name, variable value change function] = useState("initial value");
    //let userName:string="";
    const [userName,setUserName] = useState("");  //useState => Hook
    //let userPass:string="";
    const [userPass,setUserPass] = useState("");
    let myLogin = "";
    const userNameChange = (args:SyntheticEvent)=>{
        const myData = (args.target as HTMLInputElement).value;
        console.log(myData);
        //userName = myData;
        setUserName(myData);
        myLogin = "changed value: "+myData;
    }

    useEffect(()=>{
        //  myLogin = "original value";
        //  console.log("first time ",myLogin);
        //side effect -> recive data from backend... AJAX
    },[])

    

    const userPassChange = (args:SyntheticEvent)=>{
        const myData = (args.target as HTMLInputElement).value;
        console.log(myData);
        //userPass = myData;
        setUserPass(myData);
    }

    const showCred = ()=>{
        console.log(userName,userPass);
        console.log(myLogin);
    };

    return (
        <div className="myLogin Box">
			<h1>Login system</h1><hr/>
            <input type="text" placeholder="enter user name" onChange={userNameChange}/><br/><br/>
            <input type="password" placeholder="enter password" onChange={userPassChange}/><br/><br/>
            <input type="button" value="login" onClick={showCred}/>
            <hr/>
            <div id="sayHi">Hello {userName}</div>
        </div>
    );
}

export default MyLogin;
