import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const publications = [
  {
    title:
      "Automated Bot Detection on Twitter Using URL Patterns and Learning Automata",
    authors: "Nithin Rontala, et al.",
    journal:
      "International Journal of Engineering Technology & Management Sciences (IJETMS), Vol. 8, Issue 3, 2024",
    link: "https://doi.org/10.46647/ijetms.2024.v08i03.025",
    description:
      "Research publication proposing an automated bot classification method analyzing URL patterns, domain reputations, and learning automata to identify automated bot behavior on social media with high precision.",
    image: "/images/twitter.png",
  },
  {
    title:
      "Speaking Hands: Advancing Communication with Gesture Recognition Systems",
    authors: "Nithin Rontala, et al.",
    journal:
      "International Conference on Computational Intelligence and Communication Networks (ICCICN-24)",
    link: "https://github.com/nithinrontala",
    description:
      "Presented a deep learning vision system for real-time sign and hand gesture classification to facilitate accessible and intuitive communication for hearing and speech impaired individuals.",
    image: "/images/gesture.png",
  },
];

const Publications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? publications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === publications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="publications">
      <div className="work-container section-container">
        <h2>
          Research <span>Publications</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous publication"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next publication"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {publications.map((pub, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{pub.title}</h4>
                        <p className="carousel-category">{pub.authors}</p>
                        <p className="carousel-desc-text">{pub.description}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Journal / Conference</span>
                          <p>{pub.journal}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={pub.image}
                        alt={pub.title}
                        link={pub.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {publications.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to publication ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
