import { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Technology } from '../types/portfolio';

function PrincipaisTecnologiasPage() {
  const [technologies] = useState<Technology[]>(portfolioData.technologies);

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Principais Tecnologias</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {technologies.map((technology, index) => (
          <div key={`${technology.name}-${index}`} className="rounded-2xl border border-[#e8ebfa] p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#24306a]">{technology.name}</h3>
              <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-primary">
                {technology.level}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#4e5682]">{technology.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export { PrincipaisTecnologiasPage };
