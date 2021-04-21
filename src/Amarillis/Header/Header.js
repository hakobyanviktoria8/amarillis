import React from "react";
import "./Header.css";

export function Header(props) {
    return(
        <div className={"header"}>
            <div className={"navWraper"}>
                <div className={"nav"}>
                    <div  className={"logo"}>
                        <a href="/">
                            <img src={require("../img/LogoAmarillis 1.svg")} alt=""/>
                        </a>
                    </div>
                    <div className={"links"}>
                        <div><a href="#about">About</a></div>
                        <div><a href="#grow">Growth</a></div>
                        <div><a href="#review">Reviws</a></div>
                        <div><a href="#">Contact</a></div>
                        <div><a href="#signin">Signin</a></div>
                    </div>
                </div>
            </div>

            {/*header*/}
            <div className={"head"}>
                <div className={"left1"}>
                    <h1>Lorem ipsum <br/>
                        dolor sit amet new <br/>
                        a, consectetur arment
                    </h1>
                    <p>Lorem ipsum dolor sit amet new <br/>
                        a, consectetur arment
                    </p>
                    <button>
                        <span>Read more</span>
                        <img src={require("../img/send1.svg")}/>
                    </button>
                </div>
                <div className={"right1"}>
                    <div className={"squr1"} />
                    <img className={"squr2"} src={require("../img/Rectangle17.svg")} alt="Rectangle17.svg"/>
                    <div className={"squr3"} />
                    <img className={"squr4"} src={require("../img/Rectangle18.svg")} alt=""/>
                    <img className={"squr5"} src={require("../img/Rectangle20.svg")} alt=""/>
                </div>
            </div>
        </div>
    )
}