import "./home.css";

import AppHeader from "../header/header";
import AppHero from "../hero/hero";
import AppAbout from "../about/about";
import AppContact from "../contact/contact";
import AppFooter from "../footer/footer";
import AppSkills from "../skills/skills";

const AppHome = () => {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppAbout />
        <AppHero />
        <AppSkills />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
};

export default AppHome;
