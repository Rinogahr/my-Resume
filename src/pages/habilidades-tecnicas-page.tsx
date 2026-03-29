import { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Competency, technicalSkills } from '../types/portfolio';

function HabilidadesTecnicasPage() {
  const [habilidades] = useState<technicalSkills[]>(portfolioData.habiliadadesTecncas);

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Habilidades Técnicas</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {habilidades.map((habilidade, index) => (
          <button
            key={`${habilidade.title}-${index}`}
            className="group flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] px-4 py-3 text-center shadow-sm transition-all hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
          >
            <span className="text-sm font-semibold text-[#24306a] group-hover:text-[#4f46e5]">
              {habilidade.title}
            </span>
          </button>
        ))}
      </div>
    </article>
  );
}

export { HabilidadesTecnicasPage };
