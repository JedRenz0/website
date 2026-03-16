import React from "react";
import {ReactTyped} from "react-typed";
import banner from "../assets/sky.jpg";
import profile from "../assets/profile.png";



export default function Hero(){
    return(
        <section id="home" className="hero">
            <div className="hero-container">
                <img 
                    className="hero-img"
                    src={banner}
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
                    <p className="hero-about">I am a Aspiring software developer with a strong foundation in computer engineering 
                        and a drive to create impactful technology.
                    </p>
                    <list className="hero-list">
                    <li>2nd year Computer Engineering Student at University of Guelph</li>
                    <li>Previous Technical Systems Analyst at RBC T&O </li>
                    <li>Incomming Software Developer RBC T&O Summer 2026</li>
                    <li>Passionate in software development</li>
                    <li>Past envolvments with design teams and Robotics competitions</li>
                </list>
                    
                </div>
                <div className="hero-photo">
                    <img src={profile} alt="Jed Renzo Portrait" className="profile-img"/>
                </div>

            </div>

        </section>
    );




}