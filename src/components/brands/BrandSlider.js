import React from 'react';
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';
import './BrandSlider.css';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';

function BrandSlider() {
  const { state } = useAppContext();
  const brands = state?.brands;

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const BrandSkeleton = () => (
    <ContentLoader
      speed={2}
      width={150}
      height={100}
      viewBox="0 0 150 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="150" height="100" />
    </ContentLoader>
  );

  return (
    <section id="brands" className="bx-service-section padding-b-10 bx-section primary-clr">
      <div className="container">
        <div className="row">
          <Fade triggerOnce duration={2000} direction="up" delay={300}>
            <div className="title">
              <p className="light-txt">Discover Brands</p>
              <h2>
                Crafting Innovative{' '}
                <span className="primary-clr">
                  Solutions for Our Partners
                </span>
              </h2>
            </div>
          </Fade>

          {state?.loading ? (
            <Slider {...settings}>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="brand-slide">
                  <BrandSkeleton />
                </div>
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {brands?.map((brand, index) => (
                <div key={index} className="brand-slide">
                  <a
                    href={brand?.redirect}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={brand?.pic} alt={`brand-${index}`} />
                  </a>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;



// import React from 'react';
// import Slider from 'react-slick';
// import { Fade } from 'react-awesome-reveal';
// import './BrandSlider.css';
// import { useAppContext } from '../../context/useAppContext';
// import ContentLoader from 'react-content-loader';

// function BrandSlider() {
//   const { state } = useAppContext();
//   const brands = state.brands;

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 0, // Set to 0 for continuous scroll
//     cssEase: 'linear', // Linear easing for smooth scroll
//     pauseOnHover: true, // Disable pause on hover
//     arrows: false, // Disable arrows
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//     ],
//   };

//   const BrandSkeleton = () => (
//     <ContentLoader
//       speed={2}
//       width={150}
//       height={100}
//       viewBox="0 0 150 100"
//       backgroundColor="#f3f3f3"
//       foregroundColor="#ecebeb"
//     >
//       <rect x="0" y="0" rx="5" ry="5" width="150" height="100" />
//     </ContentLoader>
//   );

//   return (
//     <section
//       id="brands"
//       className="bx-service-section bx-section primary-clr"
//       style={{ marginTop: `80px`, marginBottom: `120px` }}
//     >
//       <div className="container">
//         <div className="row">
//           <Fade triggerOnce duration={2000} direction="up" delay={300}>
//             <div className="title">
//               <p className="light-txt">Discover Brands</p>
//               <h2>
//                 Crafting Innovative{' '}
//                 <span className="primary-clr">
//                   Solutions for Our Partners
//                 </span>
//               </h2>
//             </div>
//           </Fade>

//           {state.loading ? (
//             <Slider {...settings}>
//               {Array.from({ length: 4 }).map((_, index) => (
//                 <div key={index} className="brand-slide">
//                   <BrandSkeleton />
//                 </div>
//               ))}
//             </Slider>
//           ) : (
//             <Slider {...settings}>
//               {brands.map((brand, index) => (
//                 <div key={index} className="brand-slide">
//                   <a
//                     href={brand.redirect}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img src={brand.pic} alt={`brand-${index}`} />
//                   </a>
//                 </div>
//               ))}
//             </Slider>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BrandSlider;
