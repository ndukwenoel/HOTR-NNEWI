import { motion } from 'framer-motion';
import config from '../data/config.json';
import './Media.css';

const Media = () => {
    return (
        <div className="media-page container">
            <div className="page-header">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Media & Broadcasts
                </motion.h1>
                <p>Join our live services and catch up on messages.</p>
            </div>

            <section className="live-broadcast">
                <div className="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${config.media.liveVideoId}`}
                        title="Live Service"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="broadcast-info">
                    <span className="live-tag">Live Service</span>
                    <h2>Latest Broadcast</h2>
                    <p>Experience the power of God's word from anywhere in the world.</p>
                    <a href={config.pastor.socials.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Visit YouTube Channel
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Media;
