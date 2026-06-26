
import './Header.css';
import { LanguageToggle } from './LanguageToggle';

const Header = ({ lang, toggleLanguage }:{lang: string, toggleLanguage: (value: 'pt'| 'en') => void}) => {
  return (
    <div className="header">
      <LanguageToggle lang={lang} toggleLanguage={toggleLanguage} />
    </div>
  );
};

export default Header;