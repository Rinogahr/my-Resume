import { FormEvent, useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Experience } from '../types/portfolio';

function ExperienciasProfissionaisPage() {
  const [experiences, setExperiences] = useState<Experience[]>(portfolioData.experiences);
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [period, setPeriod] = useState('');
  const [highlights, setHighlights] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Experiências Profissionais</h2>
      <div className="mt-6 space-y-4">
        {experiences.map((experience, index) => (
          <section
            key={`${experience.role}-${experience.company}-${index}`}
            className="rounded-2xl border border-[#e8ebfa] p-5"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold text-[#24306a]">{experience.role}</h3>
              <span className="text-sm font-medium text-primary">{experience.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-[#4e5682]">{experience.company}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#4e5682]">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

export { ExperienciasProfissionaisPage };
