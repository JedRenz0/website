import { motion } from "framer-motion";
import uofgLogo from "../assets/uofg-logo.png";
import sbcssLogo from "../assets/sbcss-logo.png";
import "./Education.css";

const education = [
  {
    school: "University of Guelph",
    degree: "Bachelor of Engineering — Computer Engineering",
    period: "2024 – 2028",
    logo: uofgLogo,
    details: [
      "Relevant coursework: Data Structures, Digital Systems, Software Design",
    ],
  },
  {
    school: "St. Benedict Catholic Secondary School",
    degree: null,
    period: "Sep 2020 – Jun 2024",
    logo: sbcssLogo,
    details: [
      "Activities: FRC team build/assembly lead, Skills Canada robotics lead programmer, Robotics club, Coding club, Math club",
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span>Education</span>
        </motion.h2>

        <div className="education-list">
          {education.map((edu, i) => (
            <motion.div
              className="education-card"
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="education-card-header">
                <div className="education-logo-wrap">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="education-logo"
                    />
                  ) : (
                    <div className="education-logo-placeholder">
                      {edu.logoInitials}
                    </div>
                  )}
                </div>

                <div className="education-info">
                  <h3 className="education-school">{edu.school}</h3>
                  {edu.degree && (
                    <p className="education-degree">{edu.degree}</p>
                  )}
                  <p className="education-period">{edu.period}</p>
                </div>
              </div>

              {edu.details.length > 0 && (
                <ul className="education-details">
                  {edu.details.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
