import { FormEvent, useState } from 'react';

interface PerfilCard {
  title: string;
  content: string;
}

function PerfilProfissionalPage() {
  const summary = `Com mais de 10 anos de experiência em desenvolvimento, manutenção e evolução de sistemas web e mobile. Experiência em ERPs, integrações, automação de processos e plataformas Low Code. Foco em código limpo, escalável, performance e alinhamento às regras de negócio. Focado em criar interfaces modernas, acessíveis e responsivas com atenção a performance e experiência do usuário.`

  const [cards, setCards] = useState<PerfilCard[]>([
    {
      title: 'Foco Principal no Front-End',
      content:
        'Desenvolvimento de interfaces com React.js e Angular.js com TypeScript, priorizando organização, performance e experiência do usuário.',
    },
    {
      title: 'Foco Principal no Back-End',
      content:
        'Desenvolvimento de back-end com Node.js e TypeScript, PHP e Laravel, priorizando arquitetura limpa no padrão RESTful e MVC, escalabilidade, performance e construção de produtos digitais consistentes.',
    },
    {
      title: 'Objetivo',
      content:
        'Atuar em projetos desafiadores, contribuindo com boas práticas de front-end, back-end, escalabilidade, performance, experiência do usuário, e construção de produtos digitais consistentes.',
    },
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditingIndex(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    if (editingIndex !== null) {
      setCards((previous) =>
        previous.map((item, index) =>
          index === editingIndex ? { title: title.trim(), content: content.trim() } : item
        )
      );
      resetForm();
      return;
    }

    setCards((previous) => [...previous, { title: title.trim(), content: content.trim() }]);
    resetForm();
  };

  const handleEdit = (index: number) => {
    setTitle(cards[index].title);
    setContent(cards[index].content);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setCards((previous) => previous.filter((_, currentIndex) => currentIndex !== index));
    if (editingIndex === index) {
      resetForm();
    }
  };

  return (
    <article>
      <h2 className="text-2xl font-bold text-[#202958] md:text-3xl">Perfil Profissional</h2>
      <textarea
        value={summary}        
        className="mt-4 min-h-24 w-full h-28 rounded-xl border border-[#d7ddfb] p-3 text-sm leading-relaxed text-[#4e5682] outline-none focus:border-primary"
      />
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className={`rounded-2xl bg-soft p-5 ${index === cards.length - 1 ? 'md:col-span-2' : ''}`}
          >
            <h3 className="text-lg font-semibold text-[#24306a]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4e5682]">{card.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export { PerfilProfissionalPage };
