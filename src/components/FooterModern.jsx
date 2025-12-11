import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function FooterModern() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://www.linkedin.com/in/ayomide-bobani-a76247360/' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/haywhye12' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername' },
    { icon: FaEnvelope, href: 'mailto:ayomidebobani@gmail.com' },
  ];

  return (
    <footer className="relative border-t border-white/10" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="w-full" style={{ maxWidth: '1600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'max(32px, calc((100vw - 1600px) / 2))', paddingRight: 'max(32px, calc((100vw - 1600px) / 2))' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ marginBottom: '60px' }}>
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient" style={{ marginBottom: '24px' }}>
              Ayomide Bobani
            </h3>
            <p className="text-slate-400 leading-relaxed" style={{ marginBottom: '20px' }}>
              Senior Full Stack Developer crafting exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white" style={{ marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white" style={{ marginBottom: '24px' }}>Connect</h4>
            <div className="flex gap-4" style={{ marginBottom: '20px' }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-110 group"
                >
                  <social.icon className="text-lg text-slate-400 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-slate-400 text-sm">
              Available for freelance opportunities
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4" style={{ paddingTop: '40px' }}>
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} Ayomide Bobani. All rights reserved.
          </p>
          {/* <p className="text-slate-400 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> using React & Three.js
          </p> */}
        </div>
      </div>
    </footer>
  );
}
