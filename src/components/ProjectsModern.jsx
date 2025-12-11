import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import estatePic from '../assets/estate-pic.png';
import aiPromptPic from '../assets/AI-Prompt-to-Image-Converter.png';

export default function ProjectsModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard. Built with microservices architecture.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
    {
      title: '3D Portfolio Builder',
      description: 'Interactive portfolio builder with Three.js integration, allowing users to create stunning 3D presentations of their work.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      tags: ['Three.js', 'React', 'WebGL', 'GSAP'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    },
  /*   {
      title: 'Real-Time Analytics Dashboard',
      description: 'Enterprise analytics platform with real-time data visualization, custom reports, and predictive insights using ML.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Next.js', 'Python', 'PostgreSQL', 'D3.js', 'Docker'],
      github: 'https://github.com',
      live: 'https://demo.com',
      featured: true,
    }, */
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, file sharing, and video calls. Scalable to 10k+ concurrent users.',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80',
      tags: ['React', 'WebRTC', 'Socket.io', 'Redis', 'OpenAI'],
      github: 'https://github.com',
      live: 'https://demo.com',
    },
      {
      title: 'Blockchain Marketplace',
      description: 'Decentralized NFT marketplace with smart contracts, wallet integration, and real-time bidding system.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
      tags: ['React', 'Solidity', 'Web3.js', 'IPFS', 'Ethereum'],
      github: 'https://github.com',
      live: 'https://demo.com',
    },
    {
      title: 'Estate Community Management App',
      description: 'Comprehensive property management platform for estate communities with resident portal, maintenance tracking, billing system, and community features.',
      image: estatePic,
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      github: 'https://github.com/haywhye12/estate-management',
      live: 'https://estate-demo.com',
      featured: true,
    },
    {
      title: 'AI Prompt-to-Image Converter',
      description: 'Advanced AI-powered application that converts text prompts into high-quality images using state-of-the-art machine learning models and intuitive user interface.',
      image: aiPromptPic,
      tags: ['React', 'Python', 'OpenAI', 'FastAPI', 'TensorFlow'],
      github: 'https://github.com/yourusername/ai-prompt-converter',
      live: 'https://ai-prompt-demo.com',
      featured: true,
    },
  ];

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent" />
          
          {/* Overlay Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300"
            >
              <FaExternalLinkAlt className="text-xl" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <h3 className="text-xl font-bold text-gradient" style={{ marginBottom: '16px' }}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm" style={{ marginBottom: '20px', lineHeight: '1.6', height: '60px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span
                className="bg-slate-700/50 text-slate-400 rounded-full border border-slate-600/20"
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}
              >
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="w-full relative z-10" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg" style={{ maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto' }}>
            A showcase of my recent work spanning full-stack development, 3D graphics, and cloud architecture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: '60px', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/haywhye12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
