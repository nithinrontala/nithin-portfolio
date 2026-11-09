import "./styles/Career.css";

const educations = [
  {
    degree: "Master of Science in Data Science",
    institution: "International Institute of Information Technology, Hyderabad",
    shortName: "IIIT Hyderabad",
    duration: "2024 – 2026",
    location: "Hyderabad, India",
    year: "2026",
    cgpa: "CGPA: 8.8",
    description:
      "Advanced postgraduate studies in Data Science, Machine Learning, and Natural Language Processing. Conducted speech and text processing research at the Speech Lab.",
    tags: ["Data Science", "Machine Learning", "NLP Research", "Deep Learning"],
  },
  {
    degree: "Bachelor of Technology in CSE",
    institution: "Hyderabad Institute of Technology and Management",
    shortName: "HITAM",
    duration: "2020 – 2024",
    location: "Hyderabad, India",
    year: "2024",
    cgpa: "CGPA: 7.26",
    description:
      "Comprehensive Computer Science and Engineering foundation. Relevant coursework in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, and Convolutional Neural Networks.",
    tags: ["Computer Science", "Computer Vision", "CNNs", "Algorithms", "OOP"],
  },
];

const certifications = [
  {
    issuer: "Google",
    title: "Cloud Agentic AI",
    year: "2025",
  },
  {
    issuer: "Microsoft",
    title: "Foundation Course on Generative AI",
    year: "2023",
  },
  {
    issuer: "NPTEL",
    title: "Cloud Computing",
    year: "2023",
  },
  {
    issuer: "VCET",
    title: "Parallel Programming (OpenMP & CUDA)",
    year: "2023",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {educations.map((edu, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{edu.degree}</h4>
                  <h5>{edu.shortName}</h5>
                  <span className="career-location-text">{edu.location}</span>
                </div>
                <h3>{edu.year}</h3>
              </div>
              <div className="career-desc">
                <div className="career-header-row">
                  <p className="career-date-range">{edu.duration}</p>
                  <span className="career-cgpa-pill">{edu.cgpa}</span>
                </div>
                <p className="career-text">{edu.description}</p>
                <div className="career-tags">
                  {edu.tags.map((tag, tIndex) => (
                    <span className="career-tag" key={tIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Certifications Box */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>Industry Credentials</h5>
                <span className="career-location-text">Verified Programs</span>
              </div>
              <h3>2025</h3>
            </div>
            <div className="career-desc">
              <p className="career-date-range">Continuous Professional Learning</p>
              <div className="career-certs-grid">
                {certifications.map((cert, cIndex) => (
                  <div className="career-cert-card" key={cIndex}>
                    <div className="cert-top">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-year">{cert.year}</span>
                    </div>
                    <div className="cert-title">{cert.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
