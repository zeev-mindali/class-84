import { SyntheticEvent, useState } from "react";
import "./BadForm.css";

function BadForm(): JSX.Element {
    let userCred = {name:"",password:""};
    const [userName,setUser] = useState("");
    const [userPassword,setPassword] = useState("");

    const updateUser = (args:SyntheticEvent)=>{
        let uName = (args.target as HTMLInputElement).value;
        console.log(uName);
        setUser(uName);
    };

    const updatePassword = (args:SyntheticEvent)=>{
        let uPass = (args.target as HTMLInputElement).value;
        console.log(uPass);
        setPassword(uPass);
    };
    const loginUser = ()=>{
        if (userName.length<3){
            console.log("User name too short");
            return;
        }
        if (userPassword.length<3){
            console.log("user password too short");
            return;
        }
        userCred.name = userName;
        userCred.password=userPassword;
        console.log(userCred);
    };

    return (
        <div className="Form">
            <form>
                <h1>Login Form<br/>Bad Version</h1><hr/>
                <label>Name:</label>
                <input type="Text" placeholder="User name.." onChange={updateUser}/>
                <label>Password:</label>
                <input type="password" placeholder="Password..." onChange={updatePassword}/>
                <input type="button" value="login" onClick={loginUser}/>
            </form>
        </div>
    );
}

export default BadForm;

/*
{
    userName: zeev,
    password: 12345
}

userName min 3 char
password min 3 char

*/