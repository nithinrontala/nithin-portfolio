import "./styles/Publications.css";

const publications = [
  {
    title: "Automated Bot Detection on Twitter Using URL Patterns and Learning Automata",
    authors: "Nithin Rontala, et al.",
    journal: "Int. J. Eng. Tech. & Mgmt. Sci. Vol. 8, Issue 3, May-June 2024",
    link: "https://doi.org/10.46647/ijetms.2024.v08i03.025"
  },
  {
    title: "Speaking Hands: Advancing Communication with Gesture Recognition Systems",
    authors: "Nithin Rontala, et al.",
    journal: "International Conference on Computational Intelligence and Communication Networks (ICCICN-24)",
    link: "#"
  }
];

const Publications = () => {
  return (
    <div className="publications-section" id="publications">
      <h3 className="title">Publications</h3>
      <ul className="publications-list">
        {publications.map((pub, idx) => (
          <li key={idx} className="publication-item">
            <strong>{pub.title}</strong><br />
            <span>{pub.authors}</span><br />
            <span>{pub.journal}</span><br />
            {pub.link && <a href={pub.link} target="_blank" rel="noopener noreferrer">Read more</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
