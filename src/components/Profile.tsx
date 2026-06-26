import './Profile.css';

export const Profile = ({ data }: {data : any}) => {
  const { name, title, location, contact, topSkills, languages } = data;

  return (
    <div className="profile">
      <div className="profile-avatar">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQH1mF-MqS-GcA/profile-displayphoto-scale_400_400/B4DZl7hLy_HwAg-/0/1758713922803?e=1784160000&v=beta&t=V85y8n7v5288louvuR2F219HmLSiEmMQpXL0ysmId88" 
          alt="Avatar" 
          className="avatar-image"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <div className="profile-title">
          <span><i className="fas fa-briefcase"></i> {title}</span>
          <span><i className="fas fa-map-pin"></i> {location}</span>
        </div>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}>
            <i className="fas fa-envelope"></i> {contact.email}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        <div className="skills-container">
          {topSkills.map((skill: string, idx: number) => (
            <span key={idx} className="skill-badge">
              <i className="fas fa-code"></i> {skill}
            </span>
          ))}
          <span className="skill-badge">
            <i className="fas fa-language"></i> {languages}
          </span>
        </div>
      </div>
    </div>
  );
};
