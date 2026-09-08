"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = [
  "business websites",
  "mobile apps",
  "clean system",
  "video editing",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="mx-auto max-w-6xl px-4 pb-16 pt-12 md:px-6 md:pb-24 md:pt-18">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-2 text-xs font-medium tracking-[0.18em] text-blue-100 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for freelance work
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-300">
            Full stack software engineer
          </p>

          <h1 className="max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-6xl">
            I design and build
            <span className="relative ml-3 inline-flex min-h-[1.1em] items-center align-middle">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="hero-word"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="mt-2 block text-slate-100">that help solve real problem.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">

            
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(59,130,246,0.28)] transition hover:bg-blue-400"
            >
              View my work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400/60 hover:bg-blue-500/10"
            >
              Let’s talk
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              ["1+", "Years building"],
              ["2+", "Projects shipped"],
              
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full justify-center">
          <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_60%)] blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_20px_80px_rgba(15,23,42,0.5)]"
          >
            <div className="relative h-[520px] w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_38%)]" />
              <Image
                src="/me.jpg"
                alt="Firew Mulat"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover opacity-100"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-300">Trusted by</div>
                    <div className="mt-2 text-lg font-bold text-white">Founders & teams</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 p-2 text-emerald-300">
                    <Sparkles size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}