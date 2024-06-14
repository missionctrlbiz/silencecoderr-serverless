import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';

function Service() {
    const { state } = useAppContext();
    const services = state.services;

    // Skeleton Loader for Service items
    const ServiceSkeleton = () => (
        <ContentLoader
            speed={2}
            width={350} // Adjust width as needed
            height={180} // Adjust height as needed
            viewBox="0 0 350 180"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="20" y="20" rx="5" ry="5" width="50" height="50" />
            <rect x="90" y="25" rx="3" ry="3" width="200" height="15" />
            <rect x="90" y="50" rx="3" ry="3" width="150" height="10" />
            <rect x="90" y="70" rx="3" ry="3" width="250" height="10" />
            <rect x="90" y="90" rx="3" ry="3" width="200" height="10" />
        </ContentLoader>
    );

    return (
        <div>
            <section
                id="services"
                className="bx-service-section bx-section body-bg"
                style={{ marginTop: `80px`, marginBottom: `20px` }}
            >
                <div className="container">
                    <div className="row">
                        <Fade triggerOnce duration={2000} direction="up" delay={300}>
                            <div className="title">
                                <p className="light-txt">Top Mobile Development Services</p>
                                <h2>
                                    Crafting Innovative <span className="primary-clr">Mobile Solutions</span>
                                </h2>
                            </div>
                        </Fade>
                        {state.loading ? ( // Check the loading state from context
                            // Render skeletons while loading
                            Array.from({ length: 3 }).map((_, index) => (
                                <Fade triggerOnce duration={2000} direction="up" delay={300} key={index} className="col-lg-4 col-md-12">
                                    <div className="section-card" style={{ marginBottom: '50px' }}>
                                        <ServiceSkeleton />
                                    </div>
                                </Fade>
                            ))
                        ) : (
                            // Render actual services when data is loaded
                            services.map((service, index) => (
                                <Fade triggerOnce duration={2000} direction="up" delay={300} key={index} className="col-lg-4 col-md-12">
                                    <div className="section-card" style={{ marginBottom: '50px' }}>
                                        <div className="sr-no">
                                            <h6>{index + 1}</h6>
                                        </div>
                                        <div className="card-description">
                                            <img src={service.image} alt={service.name} style={{ width: '40%', height: '40%' }} />
                                            <div className="detailed-txt">
                                                <h5>{service.name}</h5>
                                                <p>{service.short_desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))
                        )}
                       
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;