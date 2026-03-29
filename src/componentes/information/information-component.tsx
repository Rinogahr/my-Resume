import { ReactNode } from 'react';
import infoStyle from './information-component.module.css';

interface InformationComponentProps {
  infoIcon: ReactNode;
  infoTitle: string;
  infoText?: string;
  items?: string[];
}

function InformationComponent({
  infoIcon,
  infoTitle,
  infoText,
  items
}: InformationComponentProps) {
  return (
    <section className={infoStyle.containerInfo}>
      <div className={infoStyle.header}>
        <span className={infoStyle.infoIcon}>{infoIcon}</span>
        <h2>{infoTitle}</h2>
      </div>
      {infoText ? <p className={infoStyle.infoText}>{infoText}</p> : null}
      {items?.length ? (
        <ul className={infoStyle.list}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export { InformationComponent };
