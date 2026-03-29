import { FormEvent, useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Project } from '../types/portfolio';

function ProjetosPage() {
  const [projects, setProjects] = useState<Project[]>(portfolioData.projects);
  const [title, setTitle] = useState('');
  const [stack, setStack] = useState('');
  const [summary, setSummary] = useState('');
  const [link, setLink] = useState('');
  const [repositoryLink, setRepositoryLink] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const resetForm = () => {
    setTitle('');
    setStack('');
    setSummary('');
    setLink('');
    setRepositoryLink('');
    setEditingIndex(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !stack.trim() || !summary.trim() || !link.trim()) {
      return;
    }

    const payload: Project = {
      title: title.trim(),
      stack: stack.trim(),
      summary: summary.trim(),
      link: link.trim(),
      repositoryLink: link.trim(),
    };

    if (editingIndex !== null) {
      setProjects((previous) => previous.map((item, index) => (index === editingIndex ? payload : item)));
      resetForm();
      return;
    }

    setProjects((previous) => [...previous, payload]);
    resetForm();
  };

  const handleEdit = (index: number) => {
    const current = projects[index];
    setTitle(current.title);
    setStack(current.stack);
    setSummary(current.summary);
    setLink(current.link || '');
    setRepositoryLink(current.repositoryLink || '');
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setProjects((previous) => previous.filter((_, currentIndex) => currentIndex !== index));
    if (editingIndex === index) {
      resetForm();
    }
  };

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
