import "./styles/Experience.css";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "LoginRadius",
    type: "Full-time",
    location: "India",
    duration: "Mar 2026 – Present",
    year: "2026",
    bullets: [
      "Contribute to software product development and enhancements, supporting application functionality, product improvements, and user experience.",
      "Collaborate with engineering teams to develop and improve product capabilities within an established software development environment.",
      "Support software issue analysis, debugging, and troubleshooting to maintain application reliability and functionality.",
      "Participate in development workflows involving version control, code maintenance, and software engineering best practices.",
    ],
    tags: ["Java", "Python", "FastAPI", "REST APIs", "Debugging", "Git", "Product Development"],
  },
  {
    role: "AI Developer",
    company: "Kautilya AI",
    type: "Freelance",
    location: "Remote",
    duration: "Nov 2025 – Jan 2026",
    year: "2025",
    bullets: [
      "Developed automation workflows for lead-generation processes, reducing repetitive manual operational tasks.",
      "Implemented automation workflows for Snapchat and Google Ads to streamline advertising-related processes.",
      "Translated operational requirements into functional automation workflows and supported their implementation.",
      "Automated recurring marketing and lead-generation activities to improve operational efficiency.",
    ],
    tags: ["Python", "Workflow Automation", "Google Ads API", "Lead Gen", "API Integration"],
  },
  {
    role: "AI / ML Intern",
    company: "BYOL Academy",
    type: "Internship",
    location: "Remote",
    duration: "Sep 2025 – Jan 2026",
    year: "2025",
    bullets: [
      "Contributed to machine learning model development, testing, integration, and deployment for real-time AI/ML projects.",
      "Developed an AI-based Humanizer Model to transform AI-generated content into natural and human-like language using NLP techniques.",
      "Built and integrated ML processing pipelines supporting model inference and production use.",
      "Contributed to model performance optimization and cloud deployment on AWS EC2.",
      "Applied Python and machine learning techniques to develop practical AI solutions.",
    ],
    tags: ["Python", "Hugging Face", "Transformers", "NLP", "AWS EC2", "ML Pipelines"],
  },
  {
    role: "Research Intern – Speech Lab",
    company: "IIIT Hyderabad",
    type: "Research",
    location: "Hyderabad, India",
    duration: "Jul 2023 – Feb 2024",
    year: "2023",
    bullets: [
      "Conducted research involving speech and text processing using TED Talks and complex presentation datasets.",
      "Implemented sentence tokenization and text preprocessing techniques for NLP research workflows.",
      "Prepared and processed speech and text datasets for downstream natural language analysis.",
      "Supported research activities involving natural language and speech-processing techniques under senior faculty guidance.",
    ],
    tags: ["NLP Research", "Speech Processing", "Tokenization", "Python", "Dataset Engineering"],
  },
];

const Experience = () => {
  return (
    <div className="experience-section section-container" id="experience">
      <div className="experience-container">
        <h2>
          Work <span>&</span>
          <br /> Experience
        </h2>
        <div className="experience-info">
          <div className="experience-timeline">
            <div className="experience-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="experience-info-box" key={index}>
              <div className="experience-info-in">
                <div className="experience-role">
                  <h4>{exp.role}</h4>
                  <h5>
                    {exp.company}
                    <span className="experience-type-pill">{exp.type}</span>
                  </h5>
                  <span className="experience-location-text">{exp.location}</span>
                </div>
                <h3>{exp.year}</h3>
              </div>
              <div className="experience-desc">
                <p className="experience-date-range">{exp.duration}</p>
                <ul>
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="experience-tags">
                  {exp.tags.map((tag, tIndex) => (
                    <span className="experience-tag" key={tIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
