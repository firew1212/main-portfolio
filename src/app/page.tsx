import "./global.css";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

const services = [

  {
    title: "Full-Stack developer",
    text: "From frontend flow to backend logic, database, auth, and deployment.",
  },
  {
    title: "Product Strategy",
    text: "Clear thinking on features, priorities, and user journeys that reduce friction.",
  },
];

const process = [
  "Understand the problem and business goal",
  "Design a focused, clean user experience",
  "Deliver a reliable product with strong technical execution and at right time"
 
];

export default function HomePage() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />

        <section id="services" className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-300"> I can work</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-4xl">
              Simply, strategically and effectively.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-4 inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-200">
                  
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-blue-300">Process</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-4xl">
              How I work with you.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <div className="mb-4 text-xs uppercase tracking-[0.22em] text-blue-300">0{index + 1}</div>
                <p className="leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      <Footer />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
    </>
  );
}