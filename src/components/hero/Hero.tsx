import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-title">
       
        <h1>I&apos;m <em>Firew Mulat</em></h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="hero-stage">
        <div className="hero-glow" />
        <article className="hero-note review-note">
          <span>How I work</span>
          <strong>Clear and reliable</strong>
          <p>Thoughtful communication, clean code, and useful outcomes.</p>
        </article>
        <article className="hero-note expertise-note">
          <span>Core expertise</span>
          <p>Frontend <b>React / Next.js</b></p>
          <p>Backend <b>Node / NestJS</b></p>
          <p>Data <b>PostgreSQL</b></p>
        </article>
        <div className="hero-photo" role="img" aria-label="Portrait of Firew Mulat" />
        <a href="#projects" className="hero-project-button">My projects <ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}
