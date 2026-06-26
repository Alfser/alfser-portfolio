
import './Header.css';
import { LanguageToggle } from './LanguageToggle';

const Header = ({ lang, toggleLanguage }:{lang: string, toggleLanguage: (value: 'pt'| 'en') => void}) => {
  return (
    <div className="header">
      <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />
      <div className="header-lang-indicator">
        <i className="fas fa-globe"></i>
        <span>{lang === 'pt' ? 'Idioma' : 'Language'}</span>
      </div>
    </div>
  );
};

export default Header;