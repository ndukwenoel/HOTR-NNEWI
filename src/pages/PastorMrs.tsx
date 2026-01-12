import { motion } from 'framer-motion';
import { Instagram, Facebook, ChevronDown } from 'lucide-react'; // Import icons
import config from '../data/config.json';
import pastorMrsImg from '../assets/pastor-mrs.png';
import './PastorMrs.css';
import { useState } from 'react';

const PastorMrs = () => {
    const [showExplore, setShowExplore] = useState(false);

    return (
        <div className="pastor-mrs-page container">
            <div className="split-layout">
                <motion.div
                    className="image-section"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="image-frame main-image">
                        <img src={pastorMrsImg} alt={config.pastorMrs.name} />
                    </div>
                </motion.div>

                <motion.div
                    className="text-section"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="subtitle">Co-Laborer in Christ</span>
                    <h1>{config.pastorMrs.name}</h1>

                    <div className="bio-block">
                        <h3>Biography</h3>
                        <p>{config.pastorMrs.bio}</p>
                    </div>

                    <div className="bio-block">
                        <h3>Her Ministries</h3>
                        <p>{config.pastorMrs.ministriesBio}</p>
                    </div>

                    <div className="action-area">
                        <div className="explore-dropdown">
                            <button
                                className="btn-explore"
                                onClick={() => setShowExplore(!showExplore)}
                            >
                                Explore <ChevronDown size={16} />
                            </button>

                            {showExplore && (
                                <motion.div
                                    className="explore-menu"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <a href={config.pastorMrs.socials.instagram} target="_blank" rel="noopener noreferrer">
                                        <Instagram size={18} /> Instagram
                                    </a>
                                    <a href={config.pastorMrs.socials.facebook} target="_blank" rel="noopener noreferrer">
                                        <Facebook size={18} /> Facebook
                                    </a>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PastorMrs;
