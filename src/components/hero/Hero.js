import React, { useRef, useState } from 'react';
import { Fade } from "react-awesome-reveal";
import BgSlider from '../backgroundslider/BgSlider';
import { useAppContext } from '../../context/useAppContext'
import ContentLoader from 'react-content-loader'

function Hero() {
    const shape1Ref = useRef(null);
    const shape2Ref = useRef(null);
    const shape3Ref = useRef(null);
    const shape4Ref = useRef(null);
    const shape5Ref = useRef(null);
    const [isOpen ] = useState(false);


    const { state } = useAppContext();
    const aboutData = state.aboutData;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsOpen(!isOpen);
    // }
    // Skeleton Loader for Hero content
    const HeroSkeleton = () => (
        <ContentLoader
            speed={2}
            width={400}
            height={200}
            viewBox="0 0 400 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="3" ry="3" width="350" height="20" />
            <rect x="0" y="30" rx="3" ry="3" width="300" height="20" />
            <rect x="0" y="60" rx="3" ry="3" width="200" height="10" />
            <rect x="0" y="80" rx="3" ry="3" width="150" height="10" />
            {/* Add more shapes to match the structure of your Hero content */}
        </ContentLoader>
    );
    // Skeleton Loader for Profile Image
  const ProfileImageSkeleton = () => (
    <ContentLoader 
      speed={2}
      width={500} // Adjust width as needed
      height={500} // Adjust height as needed
      viewBox="0 0 150 150"
      backgroundColor= "#c0c0c0"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" width="150" height="150" />
    </ContentLoader>
  );
    return (
        <div>
            <section id="home" className="bx-home home-section bx-section padding-tb-80 bg-shape-hero">
                <div style={{ float: "right" }}>
                    {isOpen ? null : <BgSlider />}
                </div>

                <img ref={shape1Ref} id="shape1" className="parallax" src="assets/img/bg/shape-1.png" alt="shape" />

                <img ref={shape2Ref} id="shape2" className="parallax" src="assets/img/bg/shape-2.png" alt="shape" />

                <img ref={shape3Ref} id="shape3" className="parallax" src="assets/img/bg/shape-3.png" alt="shape" />

                <img ref={shape4Ref} id="shape4" className="parallax" src="assets/img/bg/shape-4.png" alt="shape" />

                <img ref={shape5Ref} id="shape5" className="parallax" src="assets/img/bg/shape-5.png" alt="shape" />

                <div className="container p-0">
          <div className="row">
            <div style={{ margin: "auto" }} className="col-md-6">
              <Fade triggerOnce duration={2000} direction="up" className="basic-details">
                <div className="info">
                  {state.loading ? ( // Conditional rendering based on loading state
                    <HeroSkeleton /> 
                  ) : (
                    <>
                      <span className="primary-color">Hello, My name is</span>
                      <h1>{aboutData.name}</h1>
                      <h2>{aboutData.sub}</h2>
                      <p>{aboutData.short_info}</p>

                      
                      <div className="buttons">
                  {aboutData?.contact?.email && ( 
                    <a 
                      className="custom-btn bx-btn" // Add a class for styling
                      href={`mailto:${aboutData?.contact?.email}`} 
                      target="_blank"  // Open email link in a new tab
                      rel="noopener noreferrer"
                    >
                      Email Me
                    </a>
                  )}
                </div>
                    </>
                  )}
                </div>
              </Fade>
            </div>
            <div className="col-md-6">
            <div className="profile-img">
              <div className="profile-detail">
                {state.loading ? ( 
                  <ProfileImageSkeleton /> 
                ) : (
                  <img src={aboutData.profile_pic} alt="" />
                )}
              </div>
            </div>
          </div> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;