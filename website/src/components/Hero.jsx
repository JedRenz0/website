import React from "react";
import {ReactTyped} from "react-typed";


export default function Hero(){
    return(
        <section id="home" className="hero">
            <div className="hero-container">
                <img 
                    className="hero-img"
                    //src={banner}
                    alt="Sky Banner"
                />
            </div>
            <div className ="hero-wrap">
                <div className="herotext">
                    <h1>
                        Hi, I'm <span className="highlight">Jed Renzo</span>
                    </h1>
                    <h2>
                        {""}
                        <ReactTyped
                            strings={["An Computer Engineer","A programmer", "A Developer"]}
                            typeSpeed={100}
                            backSpeed={60}
                            backDelay={900}
                            smartBackspace
                            loop
                            />
                    </h2>
                    
                </div>

            </div>

        </section>
    );




}