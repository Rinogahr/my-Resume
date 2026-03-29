import { Outlet } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio-data';
import { NavButton } from './nav-button';

const navItems = [
  { to: '/', label: 'Perfil Profissional' },
  { to: '/tecnologias', label: 'Principais Tecnologias' },
  { to: '/experiencias', label: 'Experiências Profissionais' },
  { to: '/formacao', label: 'Formação' },
  { to: '/habilidades', label: 'Habilidades Técnicas' },
  { to: '/projetos', label: 'Projetos' },
];

function PortfolioLayout() {
  return (
    <main className="min-h-screen bg-base px-4 py-8 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[340px_1fr]">
        <aside className="rounded-3xl bg-card p-6 shadow-soft">
          <div className="relative mx-auto mb-6 h-72 w-72 max-w-full">
            <div className="orbit-ring absolute inset-0">
              {portfolioData.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="orbit-item flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:scale-110 hover:text-secondary"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${index * (360 / portfolioData.socialLinks.length)}deg) translateY(-132px)`,
                    }}
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon size={30} />
                  </a>
                );
              })}
            </div>
            <img
              src={portfolioData.profileImage}
              alt={`Foto de perfil de ${portfolioData.name}`}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover ring-4 ring-soft"
            />
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#202958]">{portfolioData.name}</h1>
            <p className="mt-2 text-sm font-semibold text-accent">{portfolioData.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#4e5682]">{portfolioData.summary}</p>
          </div>

          <nav className="mt-8 grid gap-3">
            {navItems.map((item) => (
              <NavButton key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>
        </aside>

        <section className="rounded-3xl bg-card p-4 shadow-soft sm:p-6 md:p-8">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export { PortfolioLayout };
