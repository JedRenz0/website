import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import banner from "../assets/sky.jpg";
import profile from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-sky">
        <img className="hero-sky-img" src={banner} alt="" />
        <div className="hero-sky-overlay" />
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-card-content">
            <div className="hero-text">
              <div className="hero-status">
                <span className="status-dot" />
                Currently SDET Intern @ RBC
              </div>
              <p className="hero-greeting">Hi, I'm</p>
              <h1 className="hero-name">
                Jed <span className="highlight">Renzo</span>
              </h1>
              <h2 className="hero-typed">
                <ReactTyped
                  strings={[
                    "Computer Engineer",
                    "Software Developer",
                    "Problem Solver",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={1200}
                  smartBackspace
                  loop
                />
              </h2>
              <p className="hero-tagline">
                Aspiring software developer with a strong foundation in computer
                engineering and a drive to create impactful technology.
              </p>
              <div className="hero-cta">
                <a href="#projects" className="btn btn--primary">
                  View Projects
                </a>
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Resume
                </a>
              </div>
            </div>

            <motion.div
              className="hero-photo"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="profile-ring">
                <img
                  src={profile}
                  alt="Jed Renzo Villapando"
                  className="profile-img"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
