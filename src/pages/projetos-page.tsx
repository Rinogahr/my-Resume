import { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Project } from '../types/portfolio';

function ProjetosPage() {
  const [projects] = useState<Project[]>(portfolioData.projects);

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Projetos</h2>
      <div className="mt-6 space-y-4">
        {projects.map((project, index) => (
          <section key={`${project.title}-${index}`} className="rounded-2xl border border-[#e8ebfa] p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold text-[#24306a]">{project.title}</h3>
              <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-primary">
                {project.stack}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#4e5682]">{project.summary}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 mr-2 text-sm font-semibold text-white transition hover:bg-secondary"
              >
                Ver projeto
              </a>
            )}
            <a
              href={project.repositoryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Ver repositório GitHub
            </a>
          </section>
        ))}
      </div>
    </article>
  );
}

export { ProjetosPage };
