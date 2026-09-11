import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section work-section projects-section">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white md:text-5xl">
            Selected projects
          </h2>
        </div>
        <p className="section-copy">
          A selection of business-focused applications built with clear UX, robust backend systems, and maintainable code.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="work-project group"
          >
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="mb-4 inline-flex rounded-full border border-[#d9f24d]/30 bg-[#d9f24d]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#d9f24d]">
                  {project.category}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.architecture.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="lime-button"
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
                      className="outline-button"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <div className="project-image">
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

            <div className="project-meta">
              <div>
                <div className="meta-label">Problem</div>
                <p>{project.problem}</p>
              </div>
              <div>
                <div className="meta-label">Result</div>
                <p>{project.results}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
