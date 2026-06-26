
import './ExperienceCard.css';

export const ExperienceCard = ({ experience }:{ experience: any }) => {
  const { title, company, period, location, bullets, tags } = experience;

  return (
    <div className="experience-card">
      <div className="exp-header">
        <h3>{title} <span className="company">· {company}</span></h3>
        <span className="exp-date">
          <i className="far fa-calendar-alt"></i> {period}
        </span>
      </div>
      <div className="exp-location">
        <i className="fas fa-map-marker-alt"></i> {location}
      </div>
      <div className="exp-bullets">
        <ul>
          {bullets.map((bullet: string, idx: number) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="tech-tags">
        {tags.map((tag: string, idx: number) => (
          <span key={idx} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};
