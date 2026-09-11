import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">firew<span>.</span></span>
        <div className="footer-socials">
          <a href="https://github.com/firew1212" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
          <a href="https://linkedin.com/in/firew-mulat" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
        </div>
        <p>Copyright 2026 Firew Mulat. Built with care.</p>
      </div>
    </footer>
  );
}
