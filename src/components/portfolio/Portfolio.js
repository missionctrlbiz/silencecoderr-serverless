import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import FsLightbox from 'fslightbox-react'; // Using fslightbox-react
import { Fade } from 'react-awesome-reveal';
import './Portfolio.css';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';

const Portfolio = () => {
  const { state } = useAppContext();
  const appScreens = state.portfolio;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PortfolioSkeleton = () => (
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox="0 0 300 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="300" height="150" />
      <rect x="10" y="165" rx="3" ry="3" width="150" height="10" />
      <rect x="10" y="180" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (slideIndex) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: slideIndex,
    });
  };

  useEffect(() => {
    appScreens.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [appScreens]);

  return (
    <section
      name="portfolio"
      id="portfolio"
      className="bx-contact-section bx-section body-bg"
    >
      <div className="portfolio-section">
        <Fade triggerOnce duration={2000} direction="up" delay={300}>
          <div className="title">
            <p className="light-txt">My Portfolio</p>
            <h2>
              Recent{' '}
              <span className="primary-clr" style={{ textTransform: 'unset' }}>
                Works
              </span>
            </h2>
          </div>
        </Fade>
        <div className="container">
          <div className="row">
            <Fade triggerOnce duration={2000} direction="up" delay={300}>
              {state.loading ? (
                <Slider {...settings}>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="portfolio-item col-md-10 offset-md-1"
                    >
                      <PortfolioSkeleton />
                    </div>
                  ))}
                </Slider>
              ) : appScreens && appScreens.length > 0 ? (
                <Slider {...settings}>
                  {appScreens.map((item, index) => (
                    <div
                      key={index}
                      className="portfolio-item col-md-10 offset-md-1"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="portfolio-image"
                        title="https://silencecoderr-serverless.vercel.app/"
                        onClick={() => openLightboxOnSlide(index + 1)} // Start from slide 1
                      />
                      <a
                        href="https://silencecoderr-serverless.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="portfolio-name">{item.name}</p>
                      </a>
                      <a
                        href="https://silencecoderr-serverless.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-link"
                      >
                        Visit Link
                      </a>
                    </div>
                  ))}
                </Slider>
              ) : (
                <div>No recent works available</div>
              )}
            </Fade>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={appScreens.map((item) => item.image)}
        slide={lightboxController.slide}
      />
    </section>
  );
};

export default Portfolio;