import { Navigate, Route, Routes } from 'react-router-dom';
import { PortfolioLayout } from './components/layout/portfolio-layout';
import { ExperienciasProfissionaisPage } from './pages/experiencias-profissionais-page';
import { FormacaoPage } from './pages/formacao-page';
import { HabilidadesTecnicasPage } from './pages/habilidades-tecnicas-page';
import { PerfilProfissionalPage } from './pages/perfil-profissional-page';
import { PrincipaisTecnologiasPage } from './pages/principais-tecnologias-page';
import { ProjetosPage } from './pages/projetos-page';

function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<PerfilProfissionalPage />} />
        <Route path="tecnologias" element={<PrincipaisTecnologiasPage />} />
        <Route path="experiencias" element={<ExperienciasProfissionaisPage />} />
        <Route path="formacao" element={<FormacaoPage />} />
        <Route path="habilidades" element={<HabilidadesTecnicasPage />} />
        <Route path="projetos" element={<ProjetosPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export { App };
