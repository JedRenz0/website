import { useState } from "react";
import "./WorkTree.css";
import rbcLogo from "../assets/Logorbc.jpeg";

const experiences = [
  {
    id: 1,
    company: "RBC",
    role: "Software Developer Intern",
    period: "Summer 2026",
    summary: "Incoming Software Developer in T&O.",
    highlights: [
      "Working on internal software solutions",
      "Collaborating with enterprise teams",
      "Contributing to development workflows"
    ],
    logo: rbcLogo,
    tech: ["Java", "Python", "Git"]
  },
  {
    id: 2,
    company: "RBC",
    role: "Technical Systems Analyst Intern",
    period: "Summer 2025",
    summary: "Worked on infrastructure and deployment-related tasks.",
    highlights: [
      "Supported deployment pipelines",
      "Worked with internal tooling",
      "Helped improve operational workflows"
    ],
    logo: rbcLogo,
    tech: ["Helios", "Beyond Compare", "Internal Tools"]
  }
];

export default function WorkTree() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="work-tree-section" id="experience">
      <h2 className="work-tree-title">Work Experience</h2>

      <div className="work-tree">
        <div className="tree-line"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`tree-node ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div
              className="node-dot"
              onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
            ></div>

            <div
              className="node-card"
              onClick={() => setOpenId(openId === exp.id ? null : exp.id)}
            >
              <p className="node-period">{exp.period}</p>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.summary}</p>

              {openId === exp.id && (
                <div className="node-details">
                  <ul>
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="tech-tags">
                    {exp.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}