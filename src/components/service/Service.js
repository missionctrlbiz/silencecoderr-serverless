import { Fade } from 'react-awesome-reveal'
import { services } from '../../utility/services'

function Service() {
    return (
        <div>
            <section id="service" className="bx-service-section bx-section padding-tb-80 body-bg">
                <div className="container">
                    <div className="row">
                        <Fade triggerOnce duration={2000} direction='up' delay={300} >
                            <div className="title">
                                <p className="light-txt">best it service</p>
                                <h2>It Industries We’re<span className="primary-clr"> Offering</span></h2>
                            </div>
                        </Fade>
                        {
                            services.map((data, index) => (
                                <Fade triggerOnce duration={2000} direction='up' delay={300} key={index} className="col-lg-4 col-md-12">
                                    <div className="section-card" >
                                        <div className="sr-no">
                                            <h6>{data.number}</h6>
                                        </div>
                                        <div className="card-description">
                                            <img src={data.image} alt="" />
                                            <div className="detailed-txt">
                                                <h5>{data.title}</h5>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))
                        }
                        <Fade triggerOnce duration={2000} direction='up' delay={300}>
                            <div className="border-bottom padding-tb-80"></div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
