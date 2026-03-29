import { useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { Education } from '../types/portfolio';

function FormacaoPage() {
  const [educationList] = useState<Education[]>(portfolioData.education);

  

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Formação</h2>
      <div className="mt-6 grid gap-4">
        {educationList.map((item, index) => (
          <section key={`${item.course}-${item.institution}-${index}`} className="rounded-2xl bg-soft p-5">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold text-[#24306a]">{item.course}</h3>
              <span className="text-sm font-semibold text-primary">{item.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-[#4e5682]">{item.institution}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#4e5682]">{item.details}</p>
          </section>
        ))}
      </div>

    </article>
  );
}

export { FormacaoPage };
