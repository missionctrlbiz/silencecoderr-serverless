import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useAppContext } from '../../context/useAppContext';
import './Counters.css';

function Counters() {
    const { state } = useAppContext();
    const aboutData = state.aboutData;

    const [yearsExperience, setYearsExperience] = useState(0);
    const [projectsCompleted, setProjectsCompleted] = useState(0);
    const [happyClients, setHappyClients] = useState(0);

    const experienceIcon = <i className="fas fa-briefcase"></i>;
    const projectsIcon = <i className="fas fa-project-diagram"></i>;
    const clientsIcon = <i className="fas fa-users"></i>;

    useEffect(() => {
        if (aboutData) {
            // Set target values from aboutData (adjust property names if needed)
            const targetYearsExp = parseInt(aboutData.years_exp, 10) || 0;
            const targetProjectsCompleted = parseInt(aboutData.project_completed, 10) || 0;
            const targetHappyClients = parseInt(aboutData.happy_client, 10) || 0;

            // Animate the counters
            animateCounter(setYearsExperience, targetYearsExp);
            animateCounter(setProjectsCompleted, targetProjectsCompleted);
            animateCounter(setHappyClients, targetHappyClients);
        }
    }, [aboutData]);

    // Counter animation function
    const animateCounter = (setCounter, targetValue) => {
        let currentCount = 0;
        const increment = Math.ceil(targetValue / 50); // Adjust for animation speed 
        const timer = setInterval(() => {
            currentCount += increment;
            setCounter(currentCount);
            if (currentCount >= targetValue) {
                clearInterval(timer);
                setCounter(targetValue); // Ensure the final value is exact
            }
        }, 20); // Adjust interval for animation speed (milliseconds)
    };


    return (
        <section className="counters-section">
            <div className="container">
                <div className="row">
                    {/* Experience Counter */}
                    <div className="col-md-4 counter-item">
                        <Fade triggerOnce duration={2000} direction="up" delay={300}>
                            <div className="counter-icon">{experienceIcon}</div>
                            <div className="counter-value">{yearsExperience}+</div>
                            <div className="counter-label">Years of Experience</div>
                        </Fade>
                    </div>

                    {/* Projects Counter */}
                    <div className="col-md-4 counter-item">
                        <Fade triggerOnce duration={2000} direction="up" delay={300}>
                            <div className="counter-icon">{projectsIcon}</div>
                            <div className="counter-value">{projectsCompleted}+</div>
                            <div className="counter-label">Projects Completed</div>
                        </Fade>
                    </div>

                    {/* Happy Clients Counter */}
                    <div className="col-md-4 counter-item">
                        <Fade triggerOnce duration={2000} direction="up" delay={300}>
                            <div className="counter-icon">{clientsIcon}</div>
                            <div className="counter-value">{happyClients}+</div>
                            <div className="counter-label">Happy Clients</div>
                        </Fade>
                    </div>
                   
                </div>
                <Fade triggerOnce duration={2000} direction="up" delay={300}>
                            <div className="border-bottom top-50 padding-tb-20"></div>
                        </Fade>
            </div>
        </section>
    );
}

export default Counters;