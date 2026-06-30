import './ExperienceSection.css';

interface ExperienceSectionProps {
  data: any;
  lang: 'pt' | 'en';
}

export const ExperienceSection = ({ data, lang }: ExperienceSectionProps) => {
  return (
    <div className="experience-section">
      <h2 className="section-heading mobile-only">
        <span className="section-number">02.</span>
        {lang === 'pt' ? 'Experiência' : 'Experience'}
      </h2>
      <div className="experience-list">
        {data.experience.map((exp: any, idx: number) => (
          <div key={idx} className="exp-card">
            <div className="exp-period">
              <span>{exp.period}</span>
            </div>
            <div className="exp-details">
              <h3 className="exp-title">
                {exp.title}
                <span className="exp-company"> · {exp.company}</span>
                <svg className="exp-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </h3>
              <p className="exp-location">{exp.location}</p>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet: string, bIdx: number) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {exp.tags.map((tag: string, tIdx: number) => (
                  <span key={tIdx} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
