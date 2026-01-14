import { motion } from 'framer-motion';
import config from '../data/config.json';
import heroImage from '../assets/hero-pulpit.jpg';
import './Home.css';

// Import other sections
import About from './About';
import Media from './Media';
import Values from './Values';
import PastorMrs from './PastorMrs';
import SermonArchive from './SermonArchive';
import ResidentChurch from './ResidentChurch';
import ChurchVisual from './ChurchVisual';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section id="home" className="hero">
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

            {/* Stacked Sections */}
            <section id="about">
                <About />
            </section>

            <section id="media">
                <Media />
            </section>

            <section id="values">
                <Values />
            </section>

            <section id="pastor-mrs">
                <PastorMrs />
            </section>

            <section id="sermons">
                <SermonArchive />
            </section>

            <section id="church">
                <ResidentChurch />
            </section>

            <section id="visual">
                <ChurchVisual />
            </section>
        </div>
    );
};

export default Home;
