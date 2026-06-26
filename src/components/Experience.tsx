import './Experience.css';
import { ExperienceCard } from './ExperienceCard';

export const Experience = ({ data }: {data: any}) => {
  return (
    <div className="experience-section">
      <h2 className="section-title">
        <i className="fas fa-briefcase"></i> 
        {data.experience[0]?.title.includes('Analista') ? 'Experiência' : 'Experience'}
      </h2>
      <div className="experience-grid">
        {data.experience.map((exp: any, idx: number) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </div>
  );
};
