import './LanguageToggle.css';

export const LanguageToggle = ({ lang, toggleLanguage }: {lang: string, toggleLanguage: (value: 'pt' | 'en') => void}) => {
  return (
    <div className="lang-toggle">
      <button 
        className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} 
        onClick={() => toggleLanguage('pt')}
        aria-label="Português"
      >
        PT
      </button>
      <span className="lang-divider">/</span>
      <button 
        className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
        onClick={() => toggleLanguage('en')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};
