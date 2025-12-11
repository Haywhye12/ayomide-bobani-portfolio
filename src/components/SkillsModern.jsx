import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaGitAlt,
  FaDatabase, FaServer
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiRedis,
  SiGraphql, SiKubernetes, SiTailwindcss, SiExpress, SiThreedotjs
} from 'react-icons/si';

export default function SkillsModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 95, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, level: 92, color: '#3178C6' },
        { name: 'Three.js', icon: SiThreedotjs, level: 85, color: '#000000' },
        { name: 'Tailwind', icon: SiTailwindcss, level: 95, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 93, color: '#339933' },
        { name: 'Express', icon: SiExpress, level: 90, color: '#000000' },
        { name: 'Python', icon: FaPython, level: 88, color: '#3776AB' },
        { name: 'GraphQL', icon: SiGraphql, level: 87, color: '#E10098' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 90, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 88, color: '#4169E1' },
        { name: 'Redis', icon: SiRedis, level: 85, color: '#DC382D' },
        { name: 'SQL', icon: FaDatabase, level: 90, color: '#F29111' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: FaAws, level: 87, color: '#FF9900' },
        { name: 'Docker', icon: FaDocker, level: 90, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 82, color: '#326CE5' },
        { name: 'Git', icon: FaGitAlt, level: 95, color: '#F05032' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="w-full relative z-10" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-lg" style={{ maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto' }}>
            Expertise across the full stack with modern technologies and best practices
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-center"
          style={{ marginTop: '60px', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300"
              style={{ padding: '40px' }}
            >
              <h3 className="text-2xl font-bold text-primary" style={{ marginBottom: '32px' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between" style={{ marginBottom: '12px' }}>
                      <div className="flex items-center gap-3">
                        <skill.icon
                          className="text-2xl"
                          style={{ color: skill.color }}
                        />
                        <span className="font-medium text-slate-200" style={{ fontSize: '16px' }}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-slate-400" style={{ fontSize: '14px' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="bg-slate-800 rounded-full overflow-hidden" style={{ height: '10px' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
          style={{ marginTop: '80px' }}
        >
          <p className="text-slate-400" style={{ marginBottom: '24px', fontSize: '16px' }}>Also experienced with:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['REST APIs', 'WebSockets', 'CI/CD', 'Microservices', 'Jest', 'Cypress', 
              'Webpack', 'Vite', 'GSAP', 'Framer Motion', 'Prisma', 'Serverless'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                className="glass-effect rounded-full text-slate-300 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
