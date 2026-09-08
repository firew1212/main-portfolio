import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 text-sm text-slate-400 md:flex-row md:px-6">
        <div>
          <span className="text-lg font-bold tracking-tight text-white">
            firew<span className="text-blue-400">.</span>
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com/firew1212" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/firew-mulat" target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FaLinkedin size={18} />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Firew Mulat. Built for business growth.</p>
      </div>
    </footer>
  );
}