import { useState } from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';
import './Media.css';

const Media = () => {
    const [isLiveMode, setIsLiveMode] = useState(false);

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
                        src={isLiveMode
                            ? `https://www.youtube.com/embed/live_stream?channel=${config.media.channelId}`
                            : `https://www.youtube.com/embed/${config.media.liveVideoId}`
                        }
                        title={isLiveMode ? "Live Stream" : "Intro Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="broadcast-info">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="live-tag">
                            {isLiveMode ? "Live Now" : "Featured Video"}
                        </span>
                        <button
                            onClick={() => setIsLiveMode(!isLiveMode)}
                            style={{
                                background: isLiveMode ? 'var(--color-primary)' : 'transparent',
                                color: isLiveMode ? 'black' : 'var(--color-primary)',
                                border: '1px solid var(--color-primary)',
                                padding: '0.25rem 0.75rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                cursor: 'pointer'
                            }}
                        >
                            {isLiveMode ? "Switch to Intro" : "Watch Live Stream"}
                        </button>
                    </div>

                    <h2>{isLiveMode ? "Live Service" : "Welcome to JPM"}</h2>
                    <p>
                        {isLiveMode
                            ? "Join our interactive live service. If the stream is offline, this screen will be black or show a status message."
                            : "Experience the power of God's word through our featured introduction."}
                    </p>
                    <a href={config.pastor.socials.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        Visit YouTube Channel
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Media;
