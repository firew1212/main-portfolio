import { FaDocker, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNestjs, SiPostgresql, SiPrisma, SiTypescript } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "NestJS", icon: SiNestjs },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <p className="section-label">Technical toolkit</p>
      <h2>My skills</h2>
      <div className="skills-layout">
        <div className="skills-grid">
          {skills.map(({ name, icon: Icon }) => (
            <div className="skill-card" key={name}>
              <Icon aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
        <aside className="skills-summary">
          <strong>Full<br />stack</strong>
          <p>Focused on practical applications, clear UX, and reliable systems.</p>
          <a href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </aside>
      </div>
      <div className="additional-skills-bar">
        <span>Additional skills</span>
        <p>REST APIs / Authentication / Role-based access / Deployment</p>
      </div>
    </section>
  );
}
