import './Education.css';

interface EducationProps {
  data: any;
  lang: 'pt' | 'en';
}

export const Education = ({ data, lang }: EducationProps) => {
  return (
    <div className="education-section">
      <h2 className="section-heading mobile-only">
        <span className="section-number">04.</span>
        {lang === 'pt' ? 'Formação' : 'Education'}
      </h2>
      <div className="education-grid">
        <div className="edu-card">
          <div className="edu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.962 5.267a2 2 0 0 0-1.924 0L2.6 9.08a1 1 0 0 0 0 1.832l8.438 3.818a2 2 0 0 0 1.924 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
          </div>
          <div className="edu-info">
            <h3 className="edu-title">{lang === 'pt' ? 'Formação Acadêmica' : 'Education'}</h3>
            <p className="edu-detail">{data.education}</p>
          </div>
        </div>
        <div className="edu-card">
          <div className="edu-icon cert-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div className="edu-info">
            <h3 className="edu-title">{lang === 'pt' ? 'Certificação' : 'Certification'}</h3>
            <p className="edu-detail">{data.certifications}</p>
          </div>
        </div>
        <div className="edu-card">
          <div className="edu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          <div className="edu-info">
            <h3 className="edu-title">{lang === 'pt' ? 'Idiomas' : 'Languages'}</h3>
            <p className="edu-detail">{data.languages}</p>
          </div>
        </div>
      </div>
    </div>
  );
};