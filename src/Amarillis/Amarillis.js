import React from "react";
import "./Amarillis.css";
import {Header} from "./Header/Header";
import {About} from "./About/About";
import {AboutAmarillis} from "./AboutAmarillis/AboutAmarillis";
import {Grow} from "./Grow/Grow";
import {Review} from "./Review/Review";
import {Footer} from "./Footer/Footer";
import {Signin} from "./Signin/Signin";

export function Amarillis(props) {
    return(
        <div className={"container"}>
            <Header/>
            <About/>
            <AboutAmarillis/>
            <Grow/>
            {/**/}
            <Review/>
            <Signin/>
            <Footer/>
        </div>
    )
}