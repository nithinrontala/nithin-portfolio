import { useState, useCallback } from "react";
import "./styles/Work.css";

const patents = [
  {
    title:
      "An Improved Version of Artificial Intelligence and Machine Learning Algorithm to Detect The Percentages of Violence and Non-Violence from Real-Time CCTV Monitoring.",
    inventors: "Nithin Rontala, et al.",
    patentNumber: "Patent Application No: 202341029626",
    year: "2023",
    link: "#",
  },
  // Add more patents here if needed
];

const Patents = () => {
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
    const newIndex = currentIndex === 0 ? patents.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === patents.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="patents">
      <div className="work-container section-container">
        <h2>
          My <span>Patents</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous patent"
            data-cursor="disable"
          >
            &#8592;
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next patent"
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
              {patents.map((pat, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{pat.title}</h4>
                        <p className="carousel-category">{pat.inventors}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Patent No & Year</span>
                          <p>
                            {pat.patentNumber} ({pat.year})
                          </p>
                          {/* View Patent button removed as requested */}
                        </div>
                      </div>
                    </div>
                    {/* Optionally add an image or icon here for patents */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {patents.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to patent ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patents;
