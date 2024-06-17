import React from 'react';
import { useAppContext } from '../../context/useAppContext';
import ContentLoader from 'react-content-loader';
import './Skills.css';

function Skills() {
  const { state } = useAppContext();
  const skills = state.skills;

  // Duplicate skills to create a continuous scroll effect
  const firstRowSkills = skills ? [...skills, ...skills] : [];
  const secondRowSkills = skills ? [...skills, ...skills] : [];

  // Skeleton Loader for Skill items
  const SkillSkeleton = () => (
    <ContentLoader
      speed={2}
      width={100}
      height={120}
      viewBox="0 0 100 120"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100" height="100" />
      <rect x="10" y="110" rx="3" ry="3" width="80" height="10" />
    </ContentLoader>
  );

  return (
    <section id="skills" className="bx-skills-section bx-section padding-tb-80 body-bg">
      <div className="container">
        <div className="row">
          <div className="title">
            <p className="light-txt">My Expertise</p>
            <h2>
              <span className="primary-clr">Skills</span> & Proficiency
            </h2>
          </div>

          <div className="skills-container">
            <div className="skills-row skills-row-left">
              {state.loading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="skill-item">
                      <SkillSkeleton />
                    </div>
                  ))
                : firstRowSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <img src={skill.image} alt={skill.name} />
                    </div>
                  ))}
            </div>

            <div className="skills-row skills-row-right">
              {state.loading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="skill-item">
                      <SkillSkeleton />
                    </div>
                  ))
                : secondRowSkills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <img src={skill.image} alt={skill.name} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
