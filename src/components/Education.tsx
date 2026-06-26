import './Education.css';

const Education = ({data}: { data: any }) => {
  return (
    <div className="education-section">
      <div className="education-card">
        <h4><i className="fas fa-graduation-cap"></i> Formação</h4>
        <p>{data.education}</p>
      </div>
      <div className="education-card">
        <h4><i className="fas fa-certificate"></i> Certificação</h4>
        <p><i className="fas fa-aws" style={{ color: '#f29100' }}></i> {data.certifications}</p>
      </div>
    </div>
  );
};

export default Education;