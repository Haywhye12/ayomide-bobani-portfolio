import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ayomidebobani@gmail.com',
      link: 'mailto:ayomidebobani@.com',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+234 (903) 900-7081',
      link: 'tel:+2349039007081',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Lagos, Nigeria',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayomide-bobani-a76247360/', color: '#0077B5' },
    { icon: FaGithub, href: 'https://github.com/haywhye12', color: '#333' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: '#1DA1F2' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="w-full relative z-10" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg" style={{ maxWidth: '512px', marginLeft: 'auto', marginRight: 'auto' }}>
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto" style={{ marginTop: '60px' }}>
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gradient" style={{ marginBottom: '32px' }}>
              Contact Information
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '48px' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                    <info.icon className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-200 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-slate-300">
                Connect With Me
              </h4>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-110 group"
                  >
                    <social.icon className="text-xl text-slate-400 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass-effect rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
