import { useState, useEffect } from 'react';

const slides = [
  {
    url: "w8svfoih8qcuqu3od6xxb9ygl2z9q3-zsb73",
    src: "/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802347773-4M0AMC83UCK4XH3X54HA/the+one.jpg",
    alt: "The One Alex Gallery"
  },
  {
    url: "s1v24rpw9s56wahpgabqalukwz5zj0-z8we4",
    src: "/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802347763-VMD3B8IBQT81JWU2H4L9/The+One+Pre-launch+-3.png",
    alt: "A modern architectural rendering of a large, multi-story residential complex"
  },
  {
    url: "oe23no0gkeg5f6w9o99gkh4b3rc1p6-nx9af",
    src: "/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802347749-IJDG2RFGQHU1YAXDN6VC/the+one+landscape.jpg",
    alt: "Modern residential complex with a landscaped courtyard"
  }
];

export const TheOneAlexSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="gallery-fullscreen-slideshow"
      data-controller="GalleryFullscreenSlideshow"
      data-section-id="6a61ec2b2383587ba923bead"
      style={{ height: "75vh" }}
      data-width="full"
      data-transition="site-default"
      data-controls="arrows"
      data-show-captions="false"
    >
      <div className="gallery-fullscreen-slideshow-wrapper">
        <div className="gallery-fullscreen-slideshow-list">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % slides.length;
            
            return (
              <figure
                key={slide.url}
                className="gallery-fullscreen-slideshow-item"
                data-slide-url={slide.url}
                data-active={isActive ? "true" : undefined}
                data-in={isActive ? "true" : undefined}
                data-next={isNext ? "true" : undefined}
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                  position: isActive ? 'relative' : 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  zIndex: isActive ? 1 : 0
                }}
              >
                <div className="gallery-fullscreen-slideshow-item-wrapper" style={{ height: '100%' }}>
                  <div className="gallery-fullscreen-slideshow-item-src" style={{ height: '100%' }}>
                    <div className="gallery-fullscreen-slideshow-item-img" data-animation-role="image" style={{ height: '100%' }}>
                      <img
                        alt={slide.alt}
                        src={slide.src}
                        style={{
                          display: "block",
                          objectPosition: "50% 50%",
                          objectFit: "cover",
                          width: "100%",
                          height: "100%"
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>

        <div className="gallery-fullscreen-slideshow-controls">
          <div className="gallery-fullscreen-slideshow-control">
            <button className="gallery-fullscreen-slideshow-control-btn" aria-label="Previous Slide" onClick={prevSlide}>
              <div className="gallery-fullscreen-slideshow-control-btn-icon">
                <svg className="caret-left-icon--small" viewBox="0 0 9 16">
                  <polyline fill="none" strokeMiterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2 " />
                </svg>
              </div>
            </button>
          </div>
          <div className="gallery-fullscreen-slideshow-control">
            <button className="gallery-fullscreen-slideshow-control-btn" aria-label="Next Slide" onClick={nextSlide}>
              <div className="gallery-fullscreen-slideshow-control-btn-icon">
                <svg className="caret-right-icon--small" viewBox="0 0 9 16">
                  <polyline fill="none" strokeMiterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7 " />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="gallery-fullscreen-slideshow-bullet-nav">
          {slides.map((slide, index) => (
            <button
              key={slide.url}
              className={`gallery-fullscreen-slideshow-bullet ${index === currentIndex ? 'gallery-fullscreen-slideshow-bullet--active' : ''}`}
              data-slide-url={slide.url}
              data-target={index + 1}
              onClick={() => setCurrentIndex(index)}
              style={{
                opacity: index === currentIndex ? 1 : 0.5,
                background: index === currentIndex ? '#000' : 'transparent',
                border: '1px solid #000'
              }}
            >
              <span hidden className={index === currentIndex ? "js-slideshow-active-slide" : "js-slideshow-inactive-slide"}>
                Slide {index + 1} {index === currentIndex ? '(current slide)' : ''}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

