import "./styles/Patents.css";

const patents = [
  {
    title: "An Improved Version of Artificial Intelligence and Machine Learning Algorithm to Detect The Percentages of Violence and Non-Violence from Real-Time CCTV Monitoring.",
    inventors: "Nithin Rontala, et al.",
    patentNumber: "Patent Application No: 202341029626",
    year: "2023",
    link: "#"
  }
];

const Patents = () => {
  return (
    <div className="patents-section" id="patents">
      <h3 className="title">Patents</h3>
      <ul className="patents-list">
        {patents.map((pat, idx) => (
          <li key={idx} className="patent-item">
            <strong>{pat.title}</strong><br />
            <span>{pat.inventors}</span><br />
            <span>Patent No: {pat.patentNumber} ({pat.year})</span><br />
            {pat.link && <a href={pat.link} target="_blank" rel="noopener noreferrer">View Patent</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patents;
