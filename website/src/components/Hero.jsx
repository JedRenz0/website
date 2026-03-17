import React from "react";
import {ReactTyped} from "react-typed";
import banner from "../assets/sky.jpg";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";



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
                    <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl font-bold"
                    >
                        Hi, I'm <span className="highlight">Jed Renzo</span>
                    </motion.h1>
                    <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl font-bold"
                    >
                        {""}
                        <ReactTyped
                            strings={["An Computer Engineer","A programmer", "A Developer"]}
                            typeSpeed={100}
                            backSpeed={60}
                            backDelay={900}
                            smartBackspace
                            loop
                            />
                    </motion.h2>
                    <motion.p 
                    className="hero-about"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        I am a Aspiring software developer with a strong foundation in computer engineering 
                        and a drive to create impactful technology.
                    </motion.p>

                    <motion.ul
                    className="hero-list"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                    <li>2nd year Computer Engineering Student at University of Guelph</li>
                    <li>Previous Technical Systems Analyst at RBC T&amp;O</li>
                    <li>Incoming Software Developer RBC T&amp;O Summer 2026</li>
                    <li>Passionate in software development</li>
                    <li>Past involvements with design teams and robotics competitions</li>
                    </motion.ul>
                    
                </div>
                <div className="hero-photo">
                    <img src={profile} alt="Jed Renzo Portrait" className="profile-img"/>
                </div>

            </div>

        </section>
    );




}