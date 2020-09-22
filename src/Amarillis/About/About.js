import React from "react";
import "./About.css";

export function About(props) {
    return(
        <div className={"about"}>
            <div className={"left2"}>
                <h2>About</h2>
                <h3>Why do we use it?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem isearch for 'lorem ipsum' will uncover many web sites still in their infaweb sites still in their infancy. Various versions.</p>
                <h3>Why do we use it?</h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sitewill uncover many web sites still in their infancy. Various versions have .</p>
            </div>
            <div className={"right2"}>
                <img className={"elips1"} src={require("../img/Frame1.png")} alt=""/>
                <img className={"elips2"} src={require("../img/Rectangle25.svg")}/>
                <img className={"elips3"} src={require("../img/Group8.png")} alt=""/>
                <img className={"elips4"} src={require("../img/Rectangle24.png")} alt=""/>
                <img className={"elips5"} src={require("../img/Frame.svg")}/>
            </div>
        </div>
    )
}