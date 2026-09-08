"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Firew home">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-black text-white shadow-[0_0_22px_rgba(59,130,246,0.35)]">
            F
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            firew<span className="text-blue-400">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20 md:inline-flex"
        >
          Hire me
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {openMenu && (
        <div className="mx-auto mt-3 max-w-6xl rounded-2xl border border-white/10 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-200">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpenMenu(false)} className="transition hover:text-blue-300">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpenMenu(false)} className="mt-2 rounded-full bg-blue-500 px-4 py-2 text-center font-medium text-white">
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}