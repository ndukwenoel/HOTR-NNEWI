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

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">Jude Peters Ministries</Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-link">
              {link.icon}
              <span className="sr-only">{link.name}</span>
            </a>
          ))}

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
            <Link to="/" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/media" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Media</Link>
            <Link to="/values" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Values & Impact</Link>
            <Link to="/pastor-mrs" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Pastor Mrs.</Link>
            <Link to="/sermons" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Sermons</Link>
            <Link to="/church" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Resident Church</Link>
            <Link to="/visual" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Visual</Link>

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
