import "./styles/Experience.css";

const Experience = () => {
  return (
    <div className="experience-section section-container">
      <div className="experience-container">
        <h2>
          Work <span>&</span>
          <br /> Experience
        </h2>
        <div className="experience-info">
          <div className="experience-timeline">
            <div className="experience-dot"></div>
          </div>
          <div className="experience-info-box">
            <div className="experience-info-in">
              <div className="experience-role">
                <h4>AI/ML Intern</h4>
                <h5>BYOL Academy</h5>
              </div>
              <h3>2025</h3>
            </div>
            <div className="experience-desc">
              <p>Sep 2025 - Jan 2026</p>
              <ul>
                <li>
                  Worked on real-time AI/ML projects, contributing to model
                  development and deployment.
                </li>
                <li>
                  Developed a Humaniser Model to make AI-generated content more
                  natural and human-like, improving readability and engagement.
                </li>
                <li>
                  Collaborated with the team to integrate ML pipelines and
                  optimize model performance for production use on AWS.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-info-box">
            <div className="experience-info-in">
              <div className="experience-role">
                <h4>Research Intern – Speech Lab</h4>
                <h5>IIIT Hyderabad</h5>
              </div>
              <h3>2023</h3>
            </div>
            <div className="experience-desc">
              <p>Jul 2023 - Feb 2024</p>
              <ul>
                <li>
                  Worked under the guidance of senior researchers at IIIT-H.
                </li>
                <li>
                  Learned and implemented sentence tokenization techniques on
                  TED talks and complex presentations.
                </li>
                <li>
                  Gained exposure to speech and text processing workflows,
                  laying the foundation for advanced NLP research.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
