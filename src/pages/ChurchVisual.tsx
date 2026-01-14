import { motion } from 'framer-motion';
import config from '../data/config.json';
import visualImg from '../assets/hero-pulpit.jpg';
import './ChurchVisual.css';

const ChurchVisual = () => {
    return (
        <div className="visual-page">
            <div className="visual-background">
                <img src={visualImg} alt={config.residentChurch.name} />
                <div className="visual-overlay"></div>
            </div>

            <div className="container visual-content">
                <motion.div
                    className="final-text-block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="brand-name">{config.residentChurch.name}</h1>
                    <p className="brand-slogan">{config.residentChurch.description}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ChurchVisual;
