import React, { useEffect } from 'react'
import 'devicon';
import skills from '../data/skills.json';

const Skills = () => {
    // console.log(skills);
    return (
        <section id="skills" className="skills section-bg section-wrap" data-aos="fade-down">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                {
                    skills.map((section) => (
                        <div className="row mb-4 skill-section" key={section.key}>
                            <div className="col-md-4 mb-4 mb-md-0">
                                <div className="skill-title">{section.type}</div>
                            </div>
                            <div className="col-md-8">
                                <div className="skill-wrapper">
                                    {
                                        section.list.map((skill) => (
                                            <div className="skill-card" key={skill.key}>
                                                <div className="skill-item">
                                                    <i className={skill.icon}></i>
                                                </div>
                                                <div className="skill-name">
                                                    {skill.name}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Skills
