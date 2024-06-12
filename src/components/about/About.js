import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader'; 

function About() {
    const { state } = useAppContext();
    const { aboutData, loading } = state; 
    
    const AboutSkeleton = () => (
        <ContentLoader
            speed={2}
            width={400}
            height={300}
            viewBox="0 0 400 300"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="20" y="20" rx="5" ry="5" width="350" height="20" />
            <rect x="20" y="50" rx="3" ry="3" width="300" height="10" />
            <rect x="20" y="70" rx="3" ry="3" width="100" height="10" />
            <rect x="20" y="90" rx="3" ry="3" width="100" height="10" />
            <rect x="140" y="90" rx="3" ry="3" width="100" height="10" />
            <rect x="20" y="120" rx="3" ry="3" width="100" height="10" />
            <rect x="140" y="120" rx="3" ry="3" width="200" height="10" />
            <rect x="20" y="150" rx="3" ry="3" width="350" height="10" />
            {/* Add more shapes to match your About section's structure */}
        </ContentLoader>
    );
    return (
        <div>
            <section id="about" className={`bx-about-section bx-section padding-b-80 ${"#about" ? "padding-top" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <Fade triggerOnce duration={2000} direction='up' delay={300} className="sec-img">
                                <img src="assets/img/about/img-1.jpg" alt="" />
                            </Fade>
                        </div>

                        <Fade triggerOnce duration={2000} direction='up' delay={300} className="col-md-12 col-lg-6">
                            <div className="detailed-content">
                                {loading ? (
                                    <AboutSkeleton />
                                ) : (
                                    <>
                                        <div className="title" style={{ textAlign: 'left' }}>
                                            <p className="light-txt">About me</p>
                                            {/* Use optional chaining to access properties */}
                                            <h2>{aboutData?.sub}</h2> 
                                            <p>{aboutData?.short_info}</p>
                                        </div>
                                        <div className="personal-detail">
                                            <div className="content">
                                                <div className="left">
                                                    <div className="name pb">
                                                        <span className="info">Full Name:</span>
                                                        <span className="detail">{aboutData?.name}</span>
                                                    </div>
                                                    <div className="address pb">
                                                        <div className="address">
                                                            <span className="info">Address:</span><br />
                                                            <span className="detail">{aboutData?.contact?.address}</span> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="ph pb">
                                                        <span className="info">Phone No:</span>
                                                        <span className="detail">
                                                            <Link to={`tel:${aboutData?.contact?.phone}`}>
                                                                {aboutData?.contact?.phone} 
                                                            </Link>
                                                        </span>
                                                    </div>
                                                    <div className="email pb">
                                                        <span className="info">Email:</span>
                                                        <span className="detail">
                                                            <Link to={`mailto:${aboutData?.contact?.email}`}>
                                                                {aboutData?.contact?.email}
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;