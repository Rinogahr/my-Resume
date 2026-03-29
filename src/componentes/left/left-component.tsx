import leftStyle from './left-component.module.css';
import { resumeData } from '../right/resume-data';

function LeftComponent() {
  return (
    <aside className={leftStyle.containerLeft}>
      <div className={leftStyle.profileCard}>
        <h2 className={leftStyle.sectionTitle}>Contato</h2>
        <p className={leftStyle.textItem}>{resumeData.location}</p>
        <p className={leftStyle.textItem}>{resumeData.phone}</p>
        <p className={leftStyle.textItem}>{resumeData.email}</p>
      </div>

      <div className={leftStyle.section}>
        <h2 className={leftStyle.sectionTitle}>Habilidades Técnicas</h2>
        <ul className={leftStyle.list}>
          {resumeData.skills.map((skill) => (
            <li key={skill} className={leftStyle.listItem}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={leftStyle.section}>
        <h2 className={leftStyle.sectionTitle}>Idiomas</h2>
        <ul className={leftStyle.list}>
          {resumeData.languages.map((language) => (
            <li key={language} className={leftStyle.listItem}>
              {language}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export { LeftComponent };
