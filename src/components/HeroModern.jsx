import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Scene3D from './Scene3D';

export default function HeroModern() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-darker/50 to-darker z-10" />
      
      {/* Content */}
      <div className="relative z-20 w-full py-20" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
          style={{ maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} style={{ marginBottom: '24px' }}>
            <span className="text-primary text-lg md:text-xl font-medium">
              Hi, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{ marginBottom: '32px' }}
          >
            <span className="text-gradient">Ayomide Bobani</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-slate-300"
            style={{ marginBottom: '40px' }}
          >
           Full Stack Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
            style={{ maxWidth: '672px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '60px' }}
          >
            Crafting scalable, high-performance web applications with modern technologies.
            4+ years building scalable systems (Web + Mobile) with React, MERN, Next.js, NestJS, Three.js, MVC patterns, and React Native and more.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center"
            style={{ marginBottom: '80px' }}
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-effect hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 justify-center"
          >
            {[
              { icon: FaGithub, href: 'https://www.linkedin.com/in/ayomide-bobani-a76247360/e', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/haywhye12', label: 'LinkedIn' },
              { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
              { icon: FaEnvelope, href: '#contact', label: 'Email' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="text-xl text-slate-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
       {/*  <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-slate-400">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}
