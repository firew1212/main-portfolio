"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About me", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link href="/" className="brand" aria-label="Firew home"><span>F</span>firew.</Link>
        <div className="desktop-nav">{navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}</div>
        <Link href="/#contact" className="nav-resume">Contact <ArrowUpRight size={15} /></Link>
        <button type="button" className="menu-button" aria-label="Toggle menu" onClick={() => setOpenMenu(!openMenu)}>{openMenu ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {openMenu && <div className="mobile-nav">
        {navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpenMenu(false)}>{item.label}</Link>)}
        <Link href="/#contact" onClick={() => setOpenMenu(false)}>Contact <ArrowUpRight size={15} /></Link>
      </div>}
    </header>
  );
}
