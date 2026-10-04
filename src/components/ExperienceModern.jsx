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
      description: 'Building and maintaining enterprise-grade web and mobile applications for a publicly listed insurance company, supporting internal business operations and customer-facing insurance services.',
      achievements: [
        'Architect and develop customer-facing web applications using React, Next.js, and TypeScript, serving insurance policyholders and internal staff.',
        'Design scalable frontend architectures with reusable component systems, reducing delivery time across feature teams.',
        'Develop cross-platform mobile applications for iOS and Android using React Native and Flutter.',
        'Design, develop, and integrate RESTful APIs and third-party services to support enterprise data exchange and interoperability.',
        'Set up and maintain CI/CD pipelines to automate testing and deployment workflows.',
        'Implement secure development practices and contribute to NDPR compliance as a Data Protection Officer.',
        'Work directly with the Head of IT on development processes, architecture decisions, and technology roadmap.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'React Native', 'Flutter', 'REST APIs', 'CI/CD'],
    },
    {
      title: 'Chief Technology Officer',
      company: 'DevGeeks Tech',
      location: 'Remote',
      period: '2024 – Present',
      description: 'Leading technical strategy and overseeing the full software development lifecycle for a distributed agency, delivering enterprise-scale web and mobile products for clients across multiple industries.',
      achievements: [
        'Define system architecture for client projects — selecting appropriate patterns (monolith, microservices, serverless) based on scale and requirements.',
        'Translate client requirements into scalable, cloud-hosted web and mobile solutions deployed on AWS.',
        'Establish CI/CD pipelines and DevOps standards across all active projects, reducing deployment friction for distributed teams.',
        'Lead and coordinate distributed development teams of 3–8 engineers per engagement, running Agile sprints.',
        'Provide technical consulting on application architecture, infrastructure optimisation, and IT governance strategy.',
        'Establish and enforce secure coding practices, data protection compliance, and risk management frameworks.',
        'Advise stakeholders on technology decisions and identify opportunities for infrastructure improvements.',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Agile'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Techbox Labs',
      location: 'Lagos, Nigeria',
      period: '2024 – 2026',
      description: 'Led end-to-end development of enterprise-scale web and mobile applications across a range of client verticals including e-commerce, fintech, and SaaS platforms.',
      achievements: [
        'Led architecture and development of a full-stack e-commerce platform with product management, cart, checkout, payment gateway integration, and role-based access control.',
        'Built and maintained customer-facing React/Next.js frontends integrated with Node.js and Apollo GraphQL backends.',
        'Designed and implemented REST and GraphQL APIs and authentication systems consumed by web and mobile clients.',
        'Configured and maintained Docker-based deployment environments and contributed to CI/CD pipeline setup.',
        'Worked with MongoDB, PostgreSQL, and MySQL across projects with varying data architecture needs.',
        'Performed code reviews, enforced secure coding standards, and maintained technical documentation.',
        'Mentored junior developers in architecture best practices, code quality, and Agile delivery.',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Node.js', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Docker', 'CI/CD'],
    },
    {
      title: 'Software Developer',
      company: 'Syllabus Solution',
      location: 'Lagos, Nigeria',
      period: '2021 – 2023',
      description: 'Progressed from intern to software developer, building responsive frontend and backend applications and collaborating in Agile teams across client projects.',
      achievements: [
        'Developed responsive, customer-facing frontend applications using HTML, CSS, JavaScript, jQuery, and React.js.',
        'Built backend API endpoints and performed database operations supporting application data needs.',
        'Integrated third-party services and payment APIs into client applications.',
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
