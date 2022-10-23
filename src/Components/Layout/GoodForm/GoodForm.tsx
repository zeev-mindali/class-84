import { useForm } from "react-hook-form";
import "./GoodForm.css";
import { UserCred } from "./userCred";

function GoodForm(): JSX.Element {
    //npm install react-hook-form
    const {register,handleSubmit,formState:{errors}} = useForm<UserCred>();

    const send = (userCred:UserCred)=>{
        console.log(userCred);
        //axios send, post to server
    };
    return (
        <div className="GoodForm">
            <form onSubmit={handleSubmit(send)}>
                <h1>Login Form<br/>Good Version</h1><hr/>
                <label>Name:</label>
                <input type="Text" placeholder="User name.." {...register("userName",{
                    required:{
                        value:true,
                        message: "יש להקיש שם משתמש"
                    },
                    minLength:{
                        value:3,
                        message:"מינימום 3 תווים"
                    }
                })}/>
                <span>{errors.userName?.message}</span><br/><br/>
                <label>Password:</label>
                <input type="password" placeholder="Password..." {...register("userPassword",{
                     required:{
                        value:true,
                        message: "יש להקיש שם משתמש"
                    },
                    minLength:{
                        value:3,
                        message:"מינימום 3 תווים"
                    }
                })}/>
                {errors.userPassword && <span>in your mother, what with password?</span>}
                <button>login</button>
            </form>
        </div>
    );
}

export default GoodForm;
