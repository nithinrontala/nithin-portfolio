import { MdArrowOutward, MdCopyright, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:nithinrontala02@gmail.com" data-cursor="disable" className="contact-link">
                <MdEmail /> nithinrontala02@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917396460219" data-cursor="disable" className="contact-link">
                <MdPhone /> +91 7396460219
              </a>
            </p>
            <h4>Location</h4>
            <p className="contact-info-text">
              <MdLocationOn /> Hyderabad, Telangana, India
            </p>
          </div>

          <div className="contact-box">
            <h4>Current Role</h4>
            <p className="contact-info-text">Associate Software Engineer &bull; LoginRadius</p>
            <h4>Education</h4>
            <p className="contact-info-text">M.S. in Data Science &bull; IIIT Hyderabad (CGPA: 8.8)</p>
            <h4>Connect</h4>
            <div className="contact-social-links">
              <a
                href="https://github.com/nithinrontala"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                GitHub <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/nithinrontala"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                LinkedIn <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-box">
            <h2>
              Engineered & Designed <br /> by <span>Nithin Rontala</span>
            </h2>
            <p className="contact-tagline">
              Building scalable systems & applied intelligence.
            </p>
            <h5>
              <MdCopyright /> 2026 Nithin Rontala. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
