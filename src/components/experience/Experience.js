import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';

function Experience() {
  const { state } = useAppContext();
  const { education, experience } = state;

  // Skeleton Loader for timeline items
  const TimelineSkeleton = () => (
    <ContentLoader
      speed={2}
      width={350} // Adjust width as needed
      height={80} // Adjust height as needed
      viewBox="0 0 350 80"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="20" cy="20" r="10" />
      <rect x="40" y="15" rx="3" ry="3" width="100" height="10" />
      <rect x="40" y="35" rx="3" ry="3" width="250" height="10" />
      <rect x="40" y="55" rx="3" ry="3" width="200" height="10" />
    </ContentLoader>
  );

  return (
    <div>
      <section id="experience" className="bx-experience-section bx-section padding-tb-40">
        <div className="container">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="row mb-m-30">
            <Fade triggerOnce duration={2000} direction="up" delay={300}>
              <div className="title">
                <p className="light-txt">Unlocking Knowledge</p>
                <h2>
                  Exploring <span className="primary-clr" style={{textTransform: 'unset'}}>Academic & Work Experience</span>
                </h2>
              </div>
            </Fade>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Fade triggerOnce duration={2000} direction="up" delay={400} className="education bx-box">
                <h4>Education</h4>
                <ul className="timeline">
                  {state.loading ? ( // Check loading state from context
                    // Render skeletons while loading
                    Array.from({ length: 3 }).map((_, index) => (
                      <Fade triggerOnce duration={2000} direction="up" delay={400} key={index} className="timeline-item">
                        <TimelineSkeleton />
                      </Fade>
                    ))
                  ) : (
                    // Render actual education items when data is loaded
                    education.map((data, index) => (
                      <Fade triggerOnce duration={2000} direction="up" delay={400} key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-info">
                            <span>{data.year}</span>
                          </div>
                          <h5 className="timeline-title">{data.school}</h5>
                          <p className="sub">{data.short_desc}</p>
                        </div>
                      </Fade>
                    ))
                  )}
                </ul>
              </Fade>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Fade triggerOnce duration={2000} direction="up" delay={300} className="experience bx-box">
                <h4>Experience</h4>
                <ul className="timeline">
                  {state.loading ? ( // Check loading state from context
                    // Render skeletons while loading
                    Array.from({ length: 4 }).map((_, index) => ( 
                      <Fade triggerOnce duration={2000} direction="up" delay={400} key={index} className="timeline-item">
                        <TimelineSkeleton /> 
                      </Fade>
                    ))
                  ) : (
                    // Render actual experience items when data is loaded
                    experience.map((data, index) => (
                      <Fade triggerOnce duration={2000} direction="up" delay={400} key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <div className="timeline-info">
                            <span>{data.year}</span>
                          </div>
                          <h5 className="timeline-title">{data.company}</h5>
                          <p className="sub">{data.short_desc}</p>
                        </div>
                      </Fade>
                    ))
                  )}
                </ul>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;