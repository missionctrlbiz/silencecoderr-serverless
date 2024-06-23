import React from 'react';
import Slider from 'react-slick';
import './Reviews.css';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Reviews() {
    const { state } = useAppContext();
    const reviews = state?.reviews;

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1, // Show one review at a time
        slidesToScroll: 1,
        arrows: false, // Hide the default arrows
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Skeleton Loader for a single review item
    const ReviewSkeleton = () => (
        <ContentLoader
            speed={2}
            width={350} // Adjust width as needed
            height={200} // Adjust height as needed
            viewBox="0 0 350 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="20" y="20" rx="5" ry="5" width="60" height="60" />
            <rect x="100" y="20" rx="3" ry="3" width="200" height="15" />
            <rect x="100" y="50" rx="3" ry="3" width="280" height="10" />
            <rect x="100" y="70" rx="3" ry="3" width="250" height="10" />
            <rect x="100" y="90" rx="3" ry="3" width="220" height="10" />
            <rect x="100" y="110" rx="3" ry="3" width="180" height="10" />
        </ContentLoader>
    );

    // Skeleton Loader for the image background
    const ImageSkeleton = () => (
        <ContentLoader
            speed={2}
            width="100%"
            height="100%"
            viewBox="0 0 800 600" // Adjust the dimensions as needed
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="8" ry="8" width="100%" height="100%" />
        </ContentLoader>
    );

    return (
        <section id="reviews" className="bx-service-section bx-section">
            <div className="container">
                <div className="shape-1"></div>
                <div className="shape-2"></div>

                <div className="row mb-m-30">
                    <div className="title">
                        <p className="light-txt">Discover What Others Say</p>
                        <h2>
                            Exploring<span className="primary-clr"> Customer Reviews</span>
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex align-items-center">
                        <div className="reviews-container w-100">
                            {state?.loading ? (
                                <Slider {...settings}>
                                    {/* Render skeletons while loading */}
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <div key={index} className="review-item">
                                            <ReviewSkeleton />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                <Slider {...settings}>
                                    {/* Render actual reviews when data is loaded */}
                                    {reviews?.map((review, index) => (
                                        <div key={index} className="review-item">
                                            <div className="review-content">
                                                <blockquote>
                                                    <p className="review-text">{review.review}</p>
                                                </blockquote>
                                                {review.picture && (
                                                    <img
                                                        src={review.picture}
                                                        alt=""
                                                        className="review-picture"
                                                    />
                                                )}
                                                <p className="review-author">- {review.name}</p>
                                                {review?.location && (
                                                    <p className="review-location">{review?.location}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div className="news-right-img">
                            {state?.loading ? (
                                <ImageSkeleton />
                            ) : (
                                <img src="assets/img/news/img-1.jpg" alt="News" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;




// import React from 'react';
// import Slider from 'react-slick';
// import './Reviews.css';
// import { useAppContext } from '../../context/useAppContext';
// import ContentLoader from 'react-content-loader';

// function Reviews() {
//     const { state } = useAppContext();
//     const reviews = state.reviews;
  
//     const settings = {
//       dots: false,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1, // Show one review at a time
//       slidesToScroll: 1,
//       arrows: false, // Hide the default arrows
//       autoplay: true,
//       autoplaySpeed: 3000,
//     };
  

//     // Skeleton Loader for a single review item
//     const ReviewSkeleton = () => (
//         <ContentLoader
//             speed={2}
//             width={350} // Adjust width as needed
//             height={200} // Adjust height as needed
//             viewBox="0 0 350 200"
//             backgroundColor="#f3f3f3"
//             foregroundColor="#ecebeb"
//         >
//             <rect x="20" y="20" rx="5" ry="5" width="60" height="60" />
//             <rect x="100" y="20" rx="3" ry="3" width="200" height="15" />
//             <rect x="100" y="50" rx="3" ry="3" width="280" height="10" />
//             <rect x="100" y="70" rx="3" ry="3" width="250" height="10" />
//             <rect x="100" y="90" rx="3" ry="3" width="220" height="10" />
//             <rect x="100" y="110" rx="3" ry="3" width="180" height="10" />
//         </ContentLoader>
//     );

//     return (
//         <section id="reviews" className="bx-service-section bx-section">
//           <div className="container">
//             <div className="shape-1"></div>
//             <div className="shape-2"></div>
    
//             <div className="row mb-m-30">
//               <div className="title">
//                 <p className="light-txt">Discover What Others Say</p>
//                 <h2>
//                   Exploring<span className="primary-clr"> Customer Reviews</span>
//                 </h2>
//               </div>
//             </div>
    
//             <div className="row">
//               <div className="col-md-12">
//                 <div className="reviews-container">
//                   {state.loading ? (
//                     <Slider {...settings}>
//                       {/* Render skeletons while loading */}
//                       {Array.from({ length: 3 }).map((_, index) => (
//                         <div key={index} className="review-item">
//                           <ReviewSkeleton />
//                         </div>
//                       ))}
//                     </Slider>
//                   ) : (
//                     <Slider {...settings}>
//                       {/* Render actual reviews when data is loaded */}
//                       {reviews.map((review, index) => (
//                         <div key={index} className="review-item">
//                           <div className="review-content">
//                             <blockquote>
//                               <p className="review-text">{review.review}</p>
//                             </blockquote>
//                             {review.picture && (
//                               <img
//                                 src={review.picture}
//                                 alt={review.name}
//                                 className="review-picture"
//                               />
//                             )}
//                             <p className="review-author">- {review.name}</p>
//                             {review.location && (
//                               <p className="review-location">{review.location}</p>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                     </Slider>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       );
//     }
    
//     export default Reviews;