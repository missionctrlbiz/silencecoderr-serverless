import { Fade } from 'react-awesome-reveal'
import { experience } from '../../utility/experience'
import { education } from '../../utility/education'

function Experience() {
    return (
        <div>
            <section id="experience" className="bx-experience-section bx-section padding-tb-80">
                <div className="container">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="row mb-m-30">
                        <Fade triggerOnce duration={2000} direction='up' delay={300} className="title" >
                            <p className="light-txt">qualification</p>
                            <h2>My<span className="primary-clr"> achievements</span></h2>
                        </Fade>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <Fade triggerOnce duration={2000} direction='up' delay={400} className="education bx-box">
                                <h4>Education</h4>
                                <ul className="timeline">
                                    {education.map((data, index) => (
                                        <Fade triggerOnce duration={2000} direction='up' delay={400} key={index} className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <div className="timeline-info">
                                                    <span>{data.date}</span>
                                                </div>
                                                <h5 className="timeline-title">{data.title}<span className="sub">{data.category}</span></h5>
                                                <p>{data.description}</p>
                                            </div>
                                        </Fade>
                                    ))}

                                </ul>
                            </Fade>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <Fade triggerOnce duration={2000} direction='up' delay={300} className="experience bx-box" >
                                <h4>experience</h4>
                                <ul className="timeline">
                                    {experience.map((data, index) => (
                                        <Fade triggerOnce duration={2000} direction='up' delay={400} key={index} className="timeline-item" >
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <div className="timeline-info">
                                                    <span>{data.date}</span>
                                                </div>
                                                <h5 className="timeline-title">{data.title}<span className="sub">{data.category}</span></h5>
                                                <p>{data.description}</p>
                                            </div>
                                        </Fade>
                                    ))}
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
