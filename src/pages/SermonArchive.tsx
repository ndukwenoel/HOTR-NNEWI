import { motion } from 'framer-motion';
import { Download, PlayCircle, Mic, Video } from 'lucide-react';
import config from '../data/config.json';
import './SermonArchive.css';

import audioBg from '../assets/pastor-2.jpg';
import videoBg from '../assets/pastor-1.jpg';

const SermonArchive = () => {
    return (
        <div className="sermon-archive container">
            <div className="page-header">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Sermon Archive
                </motion.h1>
                <p>Access spiritual resources to fuel your growth.</p>
            </div>

            <div className="archive-grid">
                {/* Audio / Telegram Section */}
                <motion.div
                    className="archive-card audio-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${audioBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="card-header">
                        <Mic size={32} className="card-icon" />
                        <h2>Audio Messages</h2>
                        <p>Listen on the go. Join our Telegram channel for direct downloads of all MP3 messages.</p>
                    </div>

                    <div className="card-body">
                        <div className="widget-placeholder telegram-widget">
                            <p>Telegram Widget / Recent Files</p>
                            {/* In a real app, embed a Telegram widget here or list files */}
                        </div>

                        <a href={config.sermons.telegram} target="_blank" rel="noopener noreferrer" className="btn-download">
                            <Download size={18} /> Join Telegram Channel
                        </a>
                    </div>
                </motion.div>

                {/* Video / YouTube Section */}
                <motion.div
                    className="archive-card video-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${videoBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="card-header">
                        <Video size={32} className="card-icon" />
                        <h2>Video Sermons</h2>
                        <p>Watch full services and sermon clips visually.</p>
                    </div>

                    <div className="card-body">
                        <div className="widget-placeholder youtube-playlist">
                            <p>YouTube Playlist Embed</p>
                        </div>

                        <a href={config.sermons.youtube} target="_blank" rel="noopener noreferrer" className="btn-play">
                            <PlayCircle size={18} /> Watch on YouTube
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SermonArchive;
