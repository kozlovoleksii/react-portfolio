import "./Portfolio.css";
import React, { useEffect, useRef, useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoSlideTimeout = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;

      const deltaX = touchStartX.current - touchEndX.current;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }

      touchStartX.current = null;
      touchEndX.current = null;
    };

    slider.addEventListener("touchstart", handleTouchStart, { passive: true });
    slider.addEventListener("touchmove", handleTouchMove, { passive: true });
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width <= 600) {
        setVisibleCount(1);
      } else if (width <= 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const resetAutoSlide = () => {
    if (autoSlideTimeout.current) {
      clearTimeout(autoSlideTimeout.current);
    }

    autoSlideTimeout.current = setTimeout(() => {
      handleNext();
    }, 5000);
  };

  const handlePrev = () => {
    const maxIndex = portfolioData.length - visibleCount;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    resetAutoSlide();
  };

  const handleNext = () => {
    const maxIndex = portfolioData.length - visibleCount;
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();

    return () => {
      if (autoSlideTimeout.current) {
        clearTimeout(autoSlideTimeout.current);
      }
    };
  }, [visibleCount]);

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-slider-wrapper">
          <button className="custom-arrow left" onClick={handlePrev}>
            &#8249;
          </button>

          <div className="custom-slider" ref={sliderRef}>
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
                transition: "transform 0.5s ease-in-out",
                width: `${portfolioData.length * (100 / visibleCount)}%`,
              }}
            >
              {portfolioData.map((item) => (
                <div
                  key={item.id}
                  className="slider-item"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <PortfolioItem item={item} />
                </div>
              ))}
            </div>
          </div>

          <button className="custom-arrow right" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
