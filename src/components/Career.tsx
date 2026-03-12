import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Science in Data Science</h4>
                <h5>IIIT Hyderabad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specialized in Data Science with Artificial Intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Science in Computer Science</h4>
                <h5>Hyderabad Institute of Technology and Management</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Graduated with honors, focusing on machine learning and AI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Bhashyam Junior College</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed with a focus on subjects foundational to technology and
              sciences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>Bhashyam High School</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Completed high school with a CGPA of 9.8.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
