import React from "react";
import "./AboutAmarillis.css";

export function AboutAmarillis(props) {
    return(
        <div className={"AboutAmarilliswraper"}>
            <div className={"AboutAmarillis"}>
                <div>
                    <h2>About Amarillys</h2>
                </div>
                <div className={"AboutAmarillis__carts"}>
                    <div className={"cart"}>
                        <div className={"one"}>
                            <img src={require("../img/AAdiv2-1.svg")} alt=""/>
                        </div>
                        <div className={"two"}>
                            <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a readera reader will be distracted by the readable content </p>
                        </div>
                    </div>
                    <div className={"cart"}>
                        <div className={"one"}>
                            <img src={require("../img/AAdiv2-2.svg")} alt=""/>
                        </div>
                        <div className={"two"}>
                            <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a readera reader will be distracted by the readable content </p>
                        </div>
                    </div>
                    <div className={"cart"}>
                        <div className={"one"}>
                            <img src={require("../img/AAdiv2-3.svg")} alt=""/>
                        </div>
                        <div className={"two"}>
                            <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a readera reader will be distracted by the readable content </p>
                        </div>
                    </div>
                    <div className={"cart"}>
                        <div className={"one"}>
                            <img src={require("../img/AAdiv2-4.svg")} alt=""/>
                        </div>
                        <div className={"two"}>
                            <h3>Why do we use it?</h3>
                            <p>It is a long established fact that a readera reader will be distracted by the readable content </p>
                        </div>
                    </div>
                </div>
                <div className={"AboutAmarillis__button"}>
                    <button>See more</button>
                </div>
            </div>
        </div>
    )
}