import { useState } from "react";
import { content } from "./data/content";
import Header from "./components/Header";
import { Profile } from "./components/Profile";
import Summary from "./components/Summary";
import { Experience } from "./components/Experience";
import Education from "./components/Education";

function App() {
  const [lang, setLang] = useState<'pt'| 'en'>('pt');

  const toggleLanguage = (newLang: 'pt'| 'en') => {
    setLang(newLang);
  };

  const data = content[lang];

  return (
    <div className="app-container">
      <div className="container">
        <Header lang={lang} toggleLanguage={toggleLanguage} />
        <Profile data={data} />
        <Summary data={data} />
        <Experience data={data} />
        <Education data={data} />
        
        <div className="footer">
          <span>© {new Date().getFullYear()} Janilson Serra</span>
          <span>{lang === 'pt' ? 'Desenvolvido com React · Portfólio' : 'Built with React · Portfolio'}</span>
        </div>
      </div>
    </div>
  );
}

export default App;