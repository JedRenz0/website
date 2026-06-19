import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Experience.css";
import rbcLogo from "../assets/rbc-logo.webp";
import frcLogo from "../assets/first-robotics-logo.jpg";
import scLogo from "../assets/skills-canada-logo.png";
const experiences = [
  {
    id: 1,
    company: "RBC Insurance",
    role: "Software Developer",
    type: "Internship",
    period: "May 2026 – Present",
    location: "Hybrid",
    summary: "DevOps",
    highlights: [
      "Working on internal software solutions",
      "Collaborating with enterprise teams",
      "Contributing to development workflows",
    ],
    logo: rbcLogo,
    tech: ["DevOps"],
  },
  {
    id: 2,
    company: "RBC",
    role: "Technical Systems Analyst",
    type: "Internship",
    period: "May 2025 – Aug 2025",
    location: "Mississauga, ON · Hybrid",
    summary: "Infrastructure",
    highlights: [
      "Supported QA deployment pipelines",
      "Server maintenance and monitoring",
      "Worked with internal tooling and operational workflows",
    ],
    logo: rbcLogo,
    tech: ["QA Deployment", "Server Maintenance"],
  },
  {
    id: 3,
    company: "FIRST Robotics Canada",
    role: "Build & Assembly Lead",
    type: null,
    period: "Oct 2021 – Jun 2024",
    location: "Cambridge, ON · On-site",
    summary:
      "Directed the construction and mechanical assembly of FRC competition robots. Managed and trained several students to assist with robot development.",
    highlights: [
      "Led construction and mechanical assembly of FRC competition robots",
      "Managed and trained team members on build processes",
      "Hands-on component development and pneumatics work",
    ],
    logo: frcLogo,
    tech: ["Component Development", "Pneumatics", "CAD"],
  },
  {
    id: 4,
    company: "Skills / Compétences Canada",
    role: "Lead Programmer",
    type: null,
    period: "2022 – 2024",
    location: "Toronto, ON",
    summary:
      "Worked in collaboration with 3 other students and participated in 2 different competitions with Skills Canada Robotics.",
    highlights: [
      "Led programming for competitive robotics entries",
      "Collaborated with a team of 4 across 2 competitions",
      "Developed skills in Tetrix robotics and Arduino programming",
    ],
    logo: scLogo,
    tech: ["Tetrix Robotics", "Arduino IDE"],
  },
];

export default function Experience() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="experience">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Work <span>Experience</span>
        </motion.h2>

        <div className="exp-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="exp-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              onClick={() => toggle(exp.id)}
            >
              <div className="exp-card-header">
                <div className="exp-logo-wrap">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="exp-logo"
                    />
                  ) : (
                    <div className="exp-logo-placeholder">
                      {exp.logoInitials}
                    </div>
                  )}
                </div>

                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">
                    {exp.company}
                    {exp.type && <span className="exp-type"> · {exp.type}</span>}
                  </p>
                  <p className="exp-meta">{exp.period}</p>
                  {exp.location && (
                    <p className="exp-meta">{exp.location}</p>
                  )}
                </div>

                <div className={`exp-chevron ${openId === exp.id ? "exp-chevron--open" : ""}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {exp.summary && (
                <p className="exp-summary">{exp.summary}</p>
              )}

              <AnimatePresence>
                {openId === exp.id && (
                  <motion.div
                    className="exp-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ul className="exp-highlights">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <div className="exp-tech-tags">
                      {exp.tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
