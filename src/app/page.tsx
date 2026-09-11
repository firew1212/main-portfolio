import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import CV from "../components/cv/CV";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="about-section">
          <div className="about-photo about-photo-left" aria-hidden="true" />
          <div className="about-copy-wrap">
            <p className="section-label">About me</p>
            <h2>Who am I?</h2>
            <p>I am a full-stack software engineer who builds dependable web applications for real business needs.</p>
            <p>My work combines clean interfaces, practical backend systems, and clear communication from planning through launch.</p>
            <a href="#projects" className="lime-button">View projects</a>
          </div>
          <div className="about-photo about-photo-right" aria-hidden="true" />
        </section>
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
