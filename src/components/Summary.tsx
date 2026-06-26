import './Summary.css';

const Summary = ({ data }: {data: any}) => {
  return (
    <div className="summary">
      <p>{data.summary}</p>
    </div>
  );
};

export default Summary;