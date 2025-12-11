import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

export default function ExperienceModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Techbox Lab',
      period: '2024 - Present',
      description: 'Leading development of enterprise-scale applications, architecting microservices, and mentoring a team of 5 developers.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Led migration to cloud infrastructure (AWS) serving 1M+ users',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Syllabux Solutions.',
      period: '2023',
      description: 'Developed and maintained multiple client projects, focusing on scalable web applications and API development.',
      achievements: [
        'Built real-time analytics dashboard processing 100k+ events/day',
        'Developed RESTful APIs serving 50+ client applications',
        'Improved code quality by implementing automated testing (95% coverage)',
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Redis', 'GraphQL'],
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      period: '2022 - 2023',
      description: 'Created responsive, user-friendly interfaces for various clients across different industries.',
      achievements: [
        'Delivered 20+ responsive websites with 100% client satisfaction',
        'Implemented modern UI/UX designs with pixel-perfect accuracy',
        'Optimized websites achieving 95+ Google Lighthouse scores',
      ],
      technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'REST APIs'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Background Elements */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="w-full relative z-10" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-slate-400 text-lg" style={{ maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto' }}>
            My professional journey and key accomplishments
          </p>
        </motion.div>

        <div style={{ marginTop: '60px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '40px', paddingRight: '40px' }}>
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 last:pb-0"
                style={{ paddingBottom: '60px' }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-primary border-4 border-darker" />

                {/* Content Card */}
                <div className="glass-effect rounded-xl hover:bg-white/10 transition-all duration-300" style={{ padding: '32px' }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between" style={{ marginBottom: '24px' }}>
                    <div>
                      <h3 className="text-2xl font-bold text-gradient" style={{ marginBottom: '8px' }}>
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300">
                        <FaBriefcase className="text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                      <FaCalendar className="text-secondary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300" style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 className="text-sm font-semibold text-primary" style={{ marginBottom: '16px' }}>
                      Key Achievements:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-slate-400 text-sm flex items-start gap-2"
                        >
                          <span className="text-secondary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3" style={{ marginTop: '24px' }}>
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                        style={{
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: '500',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
