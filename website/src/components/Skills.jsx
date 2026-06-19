import { motion } from "framer-motion";
import "./Skills.css";

// TODO: Update with your actual skills
const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Vite", "Framer Motion"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Docker"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "OOP", "REST APIs", "Agile", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          Skills & <span>Tech Stack</span>
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              className="skills-card"
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <h3 className="skills-card-title">{cat.title}</h3>
              <div className="skills-tags">
                {cat.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
