"use client";

import { ArrowRight, CheckCircle2, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const reasons = [
  "Straightforward communication",
  "Business-first thinking",
  "Fast delivery without sacrificing quality",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
          website: "",
        });
      } else {
        setStatus(data.message);
      }
    } catch {
      setStatus("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Contact</p>
        <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
          Let’s build something valuable.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-blue-200">
            Why clients hire me
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
                <CheckCircle2 className="mt-0.5 text-blue-300" size={18} />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-slate-300">
            <a href="mailto:kibretmulat@gmail.com" className="flex items-center gap-3 transition hover:text-blue-300">
              <Mail size={18} />
              <span>kibretmulat@gmail.com</span>
            </a>
            <a href="https://github.com/firew1212" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-300">
              <FaGithub size={18} />
              <span>github.com/firew1212</span>
            </a>
            <a href="https://linkedin.com/in/firew-mulat" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-300">
              <FaLinkedin size={18} />
              <span>linkedin.com/in/firew-mulat</span>
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Project brief</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your website, app, or business challenge..."
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400"
              />
            </div>

            {status && <p className="text-sm text-blue-300">{status}</p>}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Sending...
                </>
              ) : (
                <>
                  Send project inquiry
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
