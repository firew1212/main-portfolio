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
    <section id="contact" className="portfolio-section work-section contact-section">
      <div className="contact-heading">
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">
          Let&apos;s discuss your next project.
        </h2>
      </div>

      <div className="contact-grid">
        <div className="work-panel">
          <div className="panel-pill">
            Why clients hire me
          </div>

          <div className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="reason-row">
                <CheckCircle2 size={18} />
                <span>{reason}</span>
              </div>
            ))}
          </div>

          <div className="contact-links">
            <a href="mailto:kibretmulat@gmail.com">
              <Mail size={18} />
              <span>kibretmulat@gmail.com</span>
            </a>
            <a href="https://github.com/firew1212" target="_blank" rel="noreferrer">
              <FaGithub size={18} />
              <span>github.com/firew1212</span>
            </a>
            <a href="https://linkedin.com/in/firew-mulat" target="_blank" rel="noreferrer">
              <FaLinkedin size={18} />
              <span>linkedin.com/in/firew-mulat</span>
            </a>
          </div>
        </div>

        <div className="work-panel">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="work-input"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="work-input"
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
              <label htmlFor="message">Project brief</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your website, app, or business challenge..."
                className="work-input"
              />
            </div>

            {status && <p className="form-status">{status}</p>}

            <button
              type="submit"
              className="lime-button submit-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Sending...
                </>
              ) : (
                <>
              Send message
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
