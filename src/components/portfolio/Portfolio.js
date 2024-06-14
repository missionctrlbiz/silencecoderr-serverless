import React from 'react';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';
import './Portfolio.css';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader'; 

const Portfolio = () => {
  const { state } = useAppContext(); // Access context
  const appScreens = state.portfolio; // Get portfolio data from context

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at a time
    slidesToScroll: 1, // Scroll 1 item at a time
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1024, // Screen width of 1024px or less
            settings: {
                slidesToShow: 2, // Show 2 items at a time
                slidesToScroll: 1, // Scroll 1 item at a time
            },
        },
        {
            breakpoint: 600, // Screen width of 600px or less
            settings: {
                slidesToShow: 1, // Show 1 item at a time
                slidesToScroll: 1, // Scroll 1 item at a time
            },
        },
    ],
};

  // Skeleton Loader for Portfolio Items
  const PortfolioSkeleton = () => (
    <ContentLoader 
      speed={2}
      width={300} // Adjust width as needed
      height={200} // Adjust height as needed
      viewBox="0 0 300 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="300" height="150" />
      <rect x="10" y="165" rx="3" ry="3" width="150" height="10" />
      <rect x="10" y="180" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );

  return (
    <section name="portfolio" id="portfolio" className="bx-contact-section bx-section padding-tb-80 body-bg">
      <div className="portfolio-section" style={{ marginTop: `50px` }}>
        <Fade triggerOnce duration={2000} direction="up" delay={300}>
          <div className="title">
            <p className="light-txt">My Portfolio</p>
            <h2>
              Recent <span className="primary-clr" style={{textTransform: 'unset'}}>Works</span>
            </h2>
          </div>
        </Fade>
        <div className="container">
          <div className="row">
            <Fade triggerOnce duration={2000} direction="up" delay={300}>
              {state.loading ? ( // Check loading state from context
                // Render skeleton loaders
                <Slider {...settings}>
                  {Array.from({ length: 3 }).map((_, index) => ( // Adjust the length as needed
                    <div key={index} className="portfolio-item">
                      <PortfolioSkeleton />
                    </div>
                  ))}
                </Slider>
              ) : (
                // Render actual portfolio items
                appScreens && appScreens.length > 0 ? (
                  <Slider {...settings}>
                    {appScreens.map((item, index) => (
                      <div key={index} className="portfolio-item">
                        <img src={item.image} alt={item.name} className="portfolio-image" />
                        <p className="portfolio-name">{item.name}</p>
                        {/* <p className="portfolio-desc">{item.short_desc}</p> */}
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div>No recent works available</div>
                )
              )}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;