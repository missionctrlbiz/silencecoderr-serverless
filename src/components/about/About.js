import { Fade } from 'react-awesome-reveal'

function About() {
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
                                <div className="title">
                                    <p className="light-txt">About us</p>
                                    <h2>Creativity bleeds from the
                                        pen of<span className="primary-clr"> inspiration</span></h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat molestiae veniam autem
                                        alias in provident est.</p>
                                </div>
                                <div className="personal-detail">
                                    <div className="content">
                                        <div className="left">
                                            <div className="name pb">
                                                <span className="info">Full Name :</span>
                                                <span className="detail">Richard Lord </span>
                                            </div>
                                            <div className="age pb">
                                                <span className="info">Age :</span>
                                                <span className="detail">30 Years</span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <div className="ph pb">
                                                <span className="info">Phone No :</span>
                                                <span className="detail">+00 987654321</span>
                                            </div>

                                            <div className="email pb">
                                                <span className="info">Email :</span>
                                                <span className="detail">example@example.com</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mail">
                                        <div className="mail">
                                            <div className="address">
                                                <span className="info">Address :</span>
                                                <span className="detail">Ruami mellow moraes,- Salvador, Brazil</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
