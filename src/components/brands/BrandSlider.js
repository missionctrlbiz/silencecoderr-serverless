import React from 'react';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';
import './BrandSlider.css';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';

function BrandSlider() {
    const { state } = useAppContext(); // Access the context
    const brands = state.brands; // Get brands from context (adjust path if needed)

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust autoplay speed as needed
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    };

    // Skeleton Loader for Brand items
    const BrandSkeleton = () => (
        <ContentLoader
            speed={2}
            width={150} // Adjust width as needed
            height={100} // Adjust height as needed
            viewBox="0 0 150 100"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="5" ry="5" width="150" height="100" />
        </ContentLoader>
    );

    return (
        <div>
          <section
            id="brands"
            className="bx-service-section bx-section primary-clr"
            style={{ marginTop: `80px`, marginBottom: `20px` }}
          >
            <div className="container">
              <div className="row">
                <Fade triggerOnce duration={2000} direction="up" delay={300}>
                  <div className="title">
                    <p className="light-txt">Discover Brands</p>
                    <h2>
                      Crafting Innovative{' '}
                      <span className="primary-clr">Solutions for Our Partners</span>
                    </h2>
                  </div>
                </Fade>
    
                {/* Conditionally render based on loading state and data availability */}
                {state.loading ? ( 
                  <Slider {...settings}>
                    {/* Render skeletons while loading */}
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div key={index} className="brand-slide">
                        <BrandSkeleton />
                      </div>
                    ))}
                  </Slider>
                ) : ( 
                  brands && ( // Check if brands is defined before rendering the slider
                    <Slider {...settings}>
                      {brands.map((brand, index) => (
                        <div key={index} className="brand-slide">
                          <a href={brand.redirect} target="_blank" rel="noopener noreferrer">
                            <img src={brand.pic} alt={`brand-${index}`} />
                          </a>
                        </div>
                      ))}
                    </Slider>
                  )
                )} 
              </div>
            </div>
          </section>
        </div>
      );
    }
    
    export default BrandSlider;