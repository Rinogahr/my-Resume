import {
  BiBookOpen,
  BiBriefcaseAlt2,
  BiCodeAlt,
  BiUser
} from 'react-icons/bi';
import rightStyle from './right-component.module.css';
import { TitleComponent } from '../title/title-component';
import { InformationComponent } from '../information/information-component';
import { resumeData } from './resume-data';

function RightComponent() {
  return (
    <section className={rightStyle.containerRight}>
      <TitleComponent header={resumeData.name} subheader={resumeData.title} />

      <InformationComponent
        infoIcon={<BiUser />}
        infoTitle="Perfil Profissional"
        infoText={resumeData.profile}
      />

      <InformationComponent
        infoIcon={<BiCodeAlt />}
        infoTitle="Principais Tecnologias"
        items={resumeData.skills.slice(0, 6)}
      />

      <InformationComponent
        infoIcon={<BiBriefcaseAlt2 />}
        infoTitle="Experiência Profissional"
        items={resumeData.experiences.flatMap((experience) => [
          `${experience.role} · ${experience.company} (${experience.period})`,
          ...experience.highlights
        ])}
      />

      <InformationComponent
        infoIcon={<BiBookOpen />}
        infoTitle="Formação"
        items={resumeData.education.map(
          (education) =>
            `${education.course} · ${education.institution} (${education.period})`
        )}
      />
    </section>
  );
}

export { RightComponent };
