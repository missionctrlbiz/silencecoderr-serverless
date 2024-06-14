import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';
import './Skills.css'; 

function Skills() {
  const { state } = useAppContext();
  const skills = state.skills; 

  
  // Split skills into two rows (only if skills is defined)
  const firstRowSkills = skills && skills.slice(0, Math.ceil(skills.length / 2));
  const secondRowSkills = skills && skills.slice(Math.ceil(skills.length / 2));


  // Skeleton Loader for Skill items
  const SkillSkeleton = () => (
    <ContentLoader 
      speed={2}
      width={100} // Adjust width as needed
      height={120} // Adjust height as needed
      viewBox="0 0 100 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100" height="100" /> 
      <rect x="10" y="110" rx="3" ry="3" width="80" height="10" /> 
    </ContentLoader>
  );

  return (
    <section
      id="skills"
      className="bx-skills-section bx-section padding-tb-80 body-bg"
    >
      
      <div className="container">
        <div className="row">          
          <Fade triggerOnce duration={2000} direction="up" delay={300}>
            <div className="title">
              <p className="light-txt">My Expertise</p>
              <h2>
                <span className="primary-clr">Skills</span> & Proficiency
              </h2>
            </div>
          </Fade>

          {/* First Row (Slide Left) */}
          <div className="skills-row">
            {state.loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <Fade
                  key={index}
                  triggerOnce
                  duration={2000}
                  direction="left"
                  delay={300}
                  className="skill-item"
                >
                  <SkillSkeleton />
                </Fade>
              ))
            ) : (
              firstRowSkills && // <-- Check BEFORE .map()
              firstRowSkills.map((skill, index) => (
                <Fade
                  key={index}
                  triggerOnce
                  duration={2000}
                  direction="left"
                  delay={300}
                  className="skill-item"
                >
                  <img src={skill.image} alt={skill.name} />
                </Fade>
              ))
            )}
          </div>

          {/* Second Row (Slide Right) */}
          <div className="skills-row">
            {state.loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <Fade
                  key={index}
                  triggerOnce
                  duration={2000}
                  direction="right"
                  delay={300}
                  className="skill-item"
                >
                  <SkillSkeleton />
                </Fade>
              ))
            ) : (
              secondRowSkills && // <-- Check BEFORE .map()
              secondRowSkills.map((skill, index) => (
                <Fade
                  key={index}
                  triggerOnce
                  duration={2000}
                  direction="right"
                  delay={300}
                  className="skill-item"
                >
                  <img src={skill.image} alt={skill.name} />
                </Fade>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;