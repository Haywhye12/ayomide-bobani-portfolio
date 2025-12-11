import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import professionalPhoto from '../assets/proffessional-photo.png';

export default function AboutModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: FaCode, value: '3+', label: 'Years Experience' },
    { icon: FaRocket, value: '10+', label: 'Projects Completed' },
    { icon: FaUsers, value: '10+', label: 'Happy Clients' },
    { icon: FaAward, value: '5+', label: 'Awards Won' },
  ];

  const highlights = [
    {
      title: 'Full-Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, delivering end-to-end solutions.',
    },
    {
      title: 'Modern Architecture',
      description: 'Experienced in microservices, serverless, and cloud-native application design.',
    },
    {
      title: 'Performance Focused',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
    },
    {
      title: 'Team Leadership',
      description: 'Led development teams, mentored junior developers, and drove technical decisions.',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="w-full relative z-10" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg" style={{ maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto' }}>
            Passionate developer crafting innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ marginTop: '60px', marginBottom: '100px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-2xl opacity-30" />
              <img
                src={professionalPhoto}
                alt="Ayomide Bobani"
                className="relative rounded-3xl glass-effect"
                style={{ 
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  objectFit: 'cover',
                  border: '2px solid rgba(255, 255, 255, 0.1)'
                }}
              />
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed" style={{ marginBottom: '32px' }}>
              I'm a <span className="text-primary font-semibold">Full Stack Developer</span> with 
              over 4 years of experience building scalable web applications and leading development teams. 
              My passion lies in creating elegant solutions to complex problems using cutting-edge technologies.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed" style={{ marginBottom: '32px' }}>
              I specialize in the <span className="text-secondary font-semibold">MERN stack</span>, modern 
              frontend frameworks, and cloud architecture. Recently, I've been exploring 3D web experiences 
              with Three.js and WebGL to push the boundaries of what's possible on the web.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical 
              articles, or mentoring aspiring developers in the community.
            </p>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          style={{ marginTop: '60px', marginBottom: '100px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
              style={{ padding: '32px' }}
            >
              <h3 className="text-xl font-bold text-primary" style={{ marginBottom: '16px' }}>
                {highlight.title}
              </h3>
              <p className="text-slate-400" style={{ lineHeight: '1.8' }}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ marginTop: '80px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="glass-effect rounded-xl text-center hover:bg-white/10 transition-all duration-300 group"
              style={{ padding: '32px' }}
            >
              <stat.icon className="text-4xl text-primary mx-auto group-hover:scale-110 transition-transform" style={{ marginBottom: '24px' }} />
              <div className="text-3xl font-bold text-gradient" style={{ marginBottom: '12px' }}>
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}