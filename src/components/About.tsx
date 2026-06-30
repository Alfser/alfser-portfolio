import './About.css';

interface AboutProps {
  data: any;
  lang: 'pt' | 'en';
}

export const About = ({ data, lang }: AboutProps) => {
  return (
    <div className="about-section">
      <h2 className="section-heading mobile-only">
        <span className="section-number">01.</span>
        {lang === 'pt' ? 'Sobre' : 'About'}
      </h2>
      <div className="about-content">
        <div className="about-text">
          <p>{data.summary}</p>
        </div>
        <div className="about-image">
          <div className="image-wrapper">
            <img 
              src="/profile-linkedin.jpeg" 
              alt={data.name} 
              className="profile-photo" 
            />
            <div className="image-border" />
          </div>
        </div>
      </div>
    </div>
  );
};
