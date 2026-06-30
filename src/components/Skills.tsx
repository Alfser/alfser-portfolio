import './Skills.css';

interface SkillsProps {
  data: any;
  lang: 'pt' | 'en';
}

export const Skills = ({ data, lang }: SkillsProps) => {
  return (
    <div className="skills-section">
      <h2 className="section-heading mobile-only">
        <span className="section-number">03.</span>
        {lang === 'pt' ? 'Habilidades' : 'Skills'}
      </h2>
      <div className="skills-grid">
        {data.skillCategories.map((cat: any, idx: number) => (
          <div key={idx} className="skill-category">
            <h3 className="skill-category-name">
              {lang === 'pt' ? cat.name : cat.nameEn}
            </h3>
            <div className="skill-items">
              {cat.skills.map((skill: string, sIdx: number) => (
                <span key={sIdx} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
