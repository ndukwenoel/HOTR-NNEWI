import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Music, Facebook, Instagram, Youtube } from 'lucide-react'; // Mic2 for Spotify substitute? Or Music.
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import config from '../../data/config.json';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Spotify', icon: <Music size={18} />, url: config.pastor.socials.spotify },
    { name: 'Apple Music', icon: <Music size={18} />, url: config.pastor.socials.appleMusic },
    { name: 'Facebook', icon: <Facebook size={18} />, url: config.pastor.socials.facebook },
    { name: 'Instagram', icon: <Instagram size={18} />, url: config.pastor.socials.instagram },
    { name: 'YouTube', icon: <Youtube size={18} />, url: config.pastor.socials.youtube },
  ];

  // Scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo" onClick={() => scrollToSection('home')}>Jude Peters Ministries</Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <div className="internal-links" style={{ display: 'flex', gap: '1.5rem', marginRight: '2rem' }}>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('media')} className="nav-link">Media</button>
            <button onClick={() => scrollToSection('values')} className="nav-link">Values</button>
            <button onClick={() => scrollToSection('pastor-mrs')} className="nav-link">Pastor Mrs.</button>
            <button onClick={() => scrollToSection('sermons')} className="nav-link">Sermons</button>
            <button onClick={() => scrollToSection('church')} className="nav-link">Resident Church</button>
            <button onClick={() => scrollToSection('visual')} className="nav-link">Visual</button>
          </div>

          <div className="social-links" style={{ display: 'flex', gap: '1rem', borderLeft: '1px solid var(--glass-border)', paddingLeft: '1.5rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-link">
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="dropdown-container">
            <button className="btn-primary" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Book a Call <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="dropdown-menu"
                >
                  <a href="mailto:contact@judepeters.com">General Inquiry</a>
                  <a href="#">Counseling</a>
                  <a href="#">Speaking Request</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (now acts as main menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{ height: '100vh', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999, paddingTop: '100px', background: 'black' }}
          >
            {/* Internal Navigation */}
            <button className="mobile-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="mobile-link" onClick={() => scrollToSection('about')}>About</button>
            <button className="mobile-link" onClick={() => scrollToSection('media')}>Media</button>
            <button className="mobile-link" onClick={() => scrollToSection('values')}>Values & Impact</button>
            <button className="mobile-link" onClick={() => scrollToSection('pastor-mrs')}>Pastor Mrs.</button>
            <button className="mobile-link" onClick={() => scrollToSection('sermons')}>Sermons</button>
            <button className="mobile-link" onClick={() => scrollToSection('church')}>Resident Church</button>
            <button className="mobile-link" onClick={() => scrollToSection('visual')}>Visual</button>

            <div className="divider" style={{ height: '1px', background: 'var(--glass-border)', margin: '1rem 0' }}></div>

            {navLinks.map((link) => (
              <a key={link.name} href={link.url} className="mobile-link" target="_blank" rel="noopener noreferrer">
                {link.icon} {link.name}
              </a>
            ))}
            <button className="btn-mobile">Book a Call</button>
            <button className="close-menu" style={{ marginTop: '2rem' }} onClick={() => setMobileMenuOpen(false)}>Close Menu</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
