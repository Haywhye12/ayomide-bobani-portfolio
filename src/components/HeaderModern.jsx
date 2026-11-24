import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

export default function HeaderModern() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      // ScrollSpy: identify active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-darker/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <nav
          style={{
            width: '100%',
            maxWidth: '1600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 'max(16px, calc((100vw - 1600px) / 2))',
            paddingRight: 'max(16px, calc((100vw - 1600px) / 2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-2.5 text-xl font-bold tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-black shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                AB
              </span>
              <span className="text-gradient font-bold hidden sm:inline">
                Ayomide Bobani
              </span>
            </motion.a>

            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for hire
            </span>
          </div>

          {/* Desktop Navigation with Animated Pill (Hidden on Mobile) */}
          <div
            className="desktop-nav-pill items-center"
            style={{
              alignItems: 'center',
              gap: '4px',
              padding: '5px 8px',
              borderRadius: '9999px',
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 18px',
                    fontSize: '14px',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    textDecoration: 'none',
                    borderRadius: '9999px',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.35), rgba(139, 92, 246, 0.35))',
                        border: '1px solid rgba(14, 165, 233, 0.6)',
                        boxShadow: '0 0 16px rgba(14, 165, 233, 0.3)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 10 }}>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons (Hidden on Mobile) */}
          <div
            className="desktop-nav-actions items-center"
            style={{
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <a
              href="https://github.com/haywhye12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cbd5e1',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              aria-label="GitHub Profile"
            >
              <FaGithub style={{ fontSize: '18px' }} />
            </a>

            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 20px',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                whiteSpace: 'nowrap',
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaPaperPlane style={{ fontSize: '12px' }} />
              <span>Get In Touch</span>
            </motion.a>
          </div>

          {/* Mobile Menu Trigger Button (Visible on Mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-trigger rounded-xl glass-effect"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes style={{ fontSize: '18px' }} /> : <FaBars style={{ fontSize: '18px' }} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden border-b border-white/10 bg-darker/95 backdrop-blur-2xl overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                        isActive
                          ? 'bg-primary/20 text-white border border-primary/30 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </motion.a>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between px-1">
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Available for hire
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://github.com/haywhye12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-slate-300 hover:text-white"
                        aria-label="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ayomide-bobani-a76247360/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg glass-effect flex items-center justify-center text-slate-300 hover:text-white"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-center shadow-lg shadow-primary/20"
                  >
                    <FaPaperPlane className="text-xs" />
                    <span>Get In Touch</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
