import React from "react";
import "./Grow.css";

export function Grow(props) {
    return(
        <div id={"grow"} className={"Grow"}>
            <div>
                <h2>How grow Amarillysi</h2>
            </div>
            <div className={"Grow__carts"}>
                <div className={"Grow__cart"}>
                    <h3 className={"Grow__cart-h3-1"}>Seeds</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content </p>
                    <div>
                        <img className={"img2"} src={require("../img/Grow1.png")} alt=""/>
                    </div>
                    <div>
                        <img className={"img1"} src={require("../img/Ellipse1.svg")} alt=""/>
                    </div>
                </div>
                <div className={"Grow__cart"}>
                    <h3 className={"Grow__cart-h3-2"}>Bulbs</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content </p>
                    <div>
                        <img className={"img2"} src={require("../img/Grow2.png")} alt=""/>
                    </div>
                    <div>
                        <img className={"img1"} src={require("../img/Ellipse2.svg")} alt=""/>
                    </div>
                </div>
                <div className={"Grow__cart"}>
                    <h3 className={"Grow__cart-h3-3"}>Green</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content </p>
                    <div>
                        <img className={"img2"} src={require("../img/Grow3.png")} alt=""/>
                    </div>
                    <div>
                        <img className={"img1"} src={require("../img/Ellipse3.svg")} alt=""/>
                    </div>
                </div>
                <div className={"Grow__cart"}>
                    <h3 className={"Grow__cart-h3-4"}>Flower</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content </p>
                    <div>
                        <img className={"img2"} src={require("../img/Grow4.png")} alt=""/>
                    </div>
                    <div>
                        <img className={"img1"} src={require("../img/Ellipse4.svg")} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}