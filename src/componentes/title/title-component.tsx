import titleStyle from './title-component.module.css';

interface TitleComponentProps {
  header: string;
  subheader: string;
}

function TitleComponent({ header, subheader }: TitleComponentProps) {
  return (
    <header className={titleStyle.containerTitle}>
      <h1>{header}</h1>
      <p>{subheader}</p>
    </header>
  );
}

export { TitleComponent };
