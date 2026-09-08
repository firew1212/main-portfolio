import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-blue-300"></p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            My work! 
          </h2>
        </div>
        <p className="max-w-xl text-slate-300">
          I focus on business problems, clean UX, and reliable engineering that is easy to scale and maintain.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 md:p-6"
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-blue-200">
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold text-white md:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.architecture.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-400"
                    >
                      Live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                {project.image && (
                  <div className="relative h-[260px] w-full md:h-[340px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Problem</div>
                <p className="leading-7 text-slate-300">{project.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-400">Result</div>
                <p className="leading-7 text-slate-300">{project.results}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}