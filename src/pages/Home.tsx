import { motion } from 'framer-motion';
import config from '../data/config.json';
import heroImage from '../assets/hero-pastor.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background">
                    <img src={heroImage} alt="Pastor Jude Peters Ndukwe" />
                    <div className="hero-overlay"></div>
                </div>

                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hero-text"
                    >
                        <span className="subtitle">Welcome to</span>
                        <h1>Jude Peters <span className="highlight">Ministries</span></h1>
                        <p className="role">{config.pastor.title}</p>

                        <div className="church-badge">
                            <span className="label">Leading at</span>
                            <h2 className="church-name">{config.residentChurch.name}</h2>
                            <p className="church-desc">{config.residentChurch.description}</p>
                        </div>
                    </motion.div>
                </div>

                <div className="scroll-indicator">
                    <span>Scroll to Explore</span>
                    <div className="line"></div>
                </div>
            </section>

            {/* Placeholder for next sections */}
            <section className="debug-spacer" style={{ height: '100vh', background: 'var(--color-bg)' }}>
                {/* Just so we can scroll */}
            </section>
        </div>
    );
};

export default Home;
