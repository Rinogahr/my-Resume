import homeStyle from './home-component.module.css';
import { LeftComponent } from '../left/left-component';
import { RightComponent } from '../right/right-component';

function HomeComponent() {
  return (
    <main className={homeStyle.page}>
      <section className={homeStyle.container}>
        <LeftComponent />
        <RightComponent />
      </section>
    </main>
  );
}

export { HomeComponent };
