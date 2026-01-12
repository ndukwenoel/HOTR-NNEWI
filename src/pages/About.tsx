import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import config from '../data/config.json';
import './About.css';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const emojis = ['❤️', '🔥', '✨', '🙏', '🕊️', '💡', '🌍'];

    return (
        <div className="about-page container" ref={containerRef}>
            <div className="floating-emojis">
                {emojis.map((emoji, index) => (
                    <motion.div
                        key={index}
                        className="floating-emoji"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight + 100,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.4, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2
                        }}
                        style={{ fontSize: Math.random() * 20 + 20 + 'px' }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">The Man & The Mission</span>
                    <h1>Jude Peters <br />Chuckwuebuka</h1>
                    <div className="bio-body">
                        <p className="lead">{config.pastor.bioShort}</p>
                        <p>{config.pastor.bioLong}</p>
                        <p>
                            His journey is marked by a relentless pursuit of God's presence and a heart
                            that beats for the broken. As the lead pastor of {config.residentChurch.name},
                            he continues to impact lives through his teaching, humanitarian efforts, and
                            leadership.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="about-image"
                    style={{ y }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="image-placeholder">
                        {/* Use hero image as placeholder or generate a new one later */}
                        <div className="placeholder-text">Portrait</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
