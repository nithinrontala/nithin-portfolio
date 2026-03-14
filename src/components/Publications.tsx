import { useState, useCallback } from "react";
import "./styles/Work.css";

const publications = [
  {
    title: "Automated Bot Detection on Twitter Using URL Patterns and Learning Automata",
    authors: "Nithin Rontala, et al.",
    journal: "Int. J. Eng. Tech. & Mgmt. Sci. Vol. 8, Issue 3, May-June 2024",
    link: "https://doi.org/10.46647/ijetms.2024.v08i03.025",
  },
  {
    title: "Speaking Hands: Advancing Communication with Gesture Recognition Systems",
    authors: "Nithin Rontala, et al.",
    journal: "International Conference on Computational Intelligence and Communication Networks (ICCICN-24)",
    link: "#",
  },
  // Add more publications here if needed
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
    const newIndex = currentIndex === 0 ? publications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === publications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="publications">
      <div className="work-container section-container">
        <h2>
          My <span>Publications</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous publication"
            data-cursor="disable"
          >
            &#8592;
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next publication"
            data-cursor="disable"
          >
            &#8594;
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
                        <div className="carousel-tools">
                          <span className="tools-label">Journal / Conference</span>
                          <p>{pub.journal}</p>
                          {/* Read more button removed as requested */}
                        </div>
                      </div>
                    </div>
                    {/* Optionally add an image or icon here for publications */}
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
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
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
