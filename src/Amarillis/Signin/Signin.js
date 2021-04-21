import React from "react";
import "./Signin.css";


export function Signin(props) {


    return (
        <div id="signin" className={"SigninWraper"}>
            <div className={"Signin"}>
                <div>
                    <h2>Signin</h2>
                </div>
                <div>
                    <input type="text" placeholder={"Full name"} name={"fullname"}/> <br/>
                    <input type="email" placeholder={"Email"} name={"email"}/> <br/>
                    <input type="password" placeholder={"Password"} name={"password"}/> <br/>
                    <input type="sbmit" value={"Signin"}/>
                </div>
            </div>
        </div>
    )
}