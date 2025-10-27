// components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "jQuery", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Apollo GraphQL", level: 80 },
        { name: "JWT", level: 85 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        {name: "MongoDB", level: 85},
        { name: "Firebase", level: 85 },
        { name: "Git", level: 90 },
        { name: "Database Migration", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;