// components/Projects.js
import React from 'react';
import './Projects.css';
import aiPromptImage from '../assets/AI-Prompt-to-Image-Converter.png';
import heroBg from '../assets/hero-section-bk.png';
import estateAppImage from '../assets/estate-pic.png';

const Projects = () => {
  const projects = [
    {
      title: "AI Prompt-to-Image Converter",
      description: "A full-stack application that converts text prompts into images using AI models. Features user authentication and generation history.",
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "AI Integration"],
      image: aiPromptImage,
      liveLink: "https://ai-prompt-to-image-converter.onrender.com",
      githubLink: "https://github.com/haywhye12/AI-Prompt-to-Image-Converter"
    },
    {
      title: "Estate Community Management App",
      description: "Comprehensive platform for residential estate management with real-time notifications, announcement boards, and issue tracking.",
      technologies: ["React.js", "TypeScript", "Firebase", "Node.js", "Express.js", "Real-time Database"],
      image: estateAppImage,
      liveLink: "#",
      githubLink: "https://github.com/haywhye12/Manager"
    },
    {
      title: "Professional Portfolio & Client Websites",
      description: "Multiple responsive and SEO-friendly websites built for clients and personal use, focusing on modern UI/UX principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "React.js", "Responsive Design"],
      image: heroBg,
      liveLink: "https://my-portfolio-website-one-gamma.vercel.app/",
      githubLink: "https://github.com/haywhye12/MyPortfolioWebsite"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
