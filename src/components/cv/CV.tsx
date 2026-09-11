import { Download } from "lucide-react";
import { cv } from "../../data/cv";

export default function CV() {
  return (
    <section id="resume" className="resume-section">
      <p className="section-label">Resume</p>
      <h2>Want the full picture?</h2>
      <p>Download my CV for experience, education, technical skills, and contact details.</p>
      <a href={cv.resumeUrl} target="_blank" rel="noreferrer" className="lime-button">Download CV <Download size={16} /></a>
    </section>
  );
}
