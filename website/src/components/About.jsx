import { motion } from "framer-motion";
import "./About.css";

const highlights = [
  {
    label: "Education",
    value: "Computer Engineering",
    detail: "University of Guelph",
  },
  {
    label: "Experience",
    value: "2 Internships",
    detail: "RBC Technology & Operations",
  },
  {
    label: "Focus",
    value: "Software Development",
    detail: "Full-stack & systems",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          About <span>Me</span>
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="about-text">
            {/* TODO: Update with your personal bio */}
            I'm a second-year Computer Engineering student at the University of
            Guelph with a passion for building software that makes an impact.
            I've gained hands-on industry experience through internships at RBC
            Technology &amp; Operations, where I've worked on infrastructure,
            deployment pipelines, and internal tooling.
          </p>
          <p className="about-text">
            {/* TODO: Update with your interests and goals */}
            Outside of work and school, I'm involved in design teams and
            robotics competitions. I enjoy tackling complex problems and am
            always looking for new opportunities to learn and grow as a
            developer.
          </p>
        </motion.div>

        <div className="about-highlights">
          {highlights.map((item, i) => (
            <motion.div
              className="about-highlight-card"
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.15 * i }}
            >
              <span className="about-highlight-label">{item.label}</span>
              <strong className="about-highlight-value">{item.value}</strong>
              <span className="about-highlight-detail">{item.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
