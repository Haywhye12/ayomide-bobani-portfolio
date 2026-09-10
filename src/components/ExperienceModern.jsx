import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

export default function ExperienceModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Prestige Assurance Plc',
      location: 'Lagos, Nigeria',
      period: 'June 2026 – Present',
      description: 'Developing and maintaining responsive web and mobile applications to support business operations and customer-facing services, while contributing to NDPR compliance as a Data Protection Officer.',
      achievements: [
        'Build and maintain responsive web apps using React, Next.js, and TypeScript.',
        'Develop cross-platform mobile applications for iOS and Android using React Native and Flutter.',
        'Design, develop, and integrate RESTful APIs and third-party services.',
        'Implement secure development practices and contribute to NDPR compliance as a Data Protection Officer.',
        'Work directly with the Head of IT on development processes, technologies, and tooling.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'React Native', 'Flutter', 'REST APIs'],
    },
    {
      title: 'Chief Technology Officer',
      company: 'DevGeeks Tech',
      location: 'Remote',
      period: '2024 – Present',
      description: 'Providing technical leadership and overseeing the full software development lifecycle for client projects, from architecture through delivery.',
      achievements: [
        'Translate client requirements into scalable web and mobile technology solutions.',
        'Provide technical consulting on application architecture, infrastructure optimisation, and IT strategy.',
        'Establish and promote secure coding practices, data protection compliance, and risk management.',
        'Lead distributed development teams and drive effective Agile collaboration.',
        'Advise stakeholders on technology decisions and infrastructure improvements.',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Docker', 'AWS', 'Agile'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Techbox Labs',
      location: 'Lagos, Nigeria',
      period: '2024 – 2026',
      description: 'Led end-to-end development of responsive web and mobile applications, designing APIs, mentoring junior developers, and enforcing secure coding standards.',
      achievements: [
        'Led development using React, TypeScript, Next.js, Node.js, Express.js, and Apollo GraphQL.',
        'Designed and implemented REST and GraphQL APIs and authentication systems.',
        'Worked with MongoDB, PostgreSQL, and MySQL for application data management.',
        'Performed code reviews, enforced secure coding practices, and maintained technical documentation.',
        'Mentored junior developers and contributed to technical decision-making.',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Software Developer',
      company: 'Syllabus Solution',
      location: 'Lagos, Nigeria',
      period: '2021 – 2023',
      description: 'Progressed from intern to software developer, building responsive frontend applications, developing backend API endpoints, and collaborating in Agile teams.',
      achievements: [
        'Developed responsive frontend applications using HTML, CSS, JavaScript, jQuery, and React.js.',
        'Developed backend API endpoints and performed database operations.',
        'Integrated third-party services into applications.',
        'Participated in Agile workflows including daily stand-ups, sprint planning, and code reviews.',
      ],
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'REST APIs'],
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
                        <span className="text-slate-500">·</span>
                        <span className="text-slate-400 text-sm">{exp.location}</span>
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
