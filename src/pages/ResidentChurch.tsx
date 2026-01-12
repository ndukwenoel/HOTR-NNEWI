import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import config from '../data/config.json';
import './ResidentChurch.css';

const ResidentChurch = () => {
    return (
        <div className="church-page container">
            <div className="church-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="welcome-tag">Welcome to</span>
                    <h1>{config.residentChurch.name}</h1>
                    <p className="church-tagline">{config.residentChurch.description}</p>
                </motion.div>
            </div>

            <div className="church-info-bar">
                <div className="info-item">
                    <MapPin className="info-icon" />
                    <p>{config.residentChurch.address}</p>
                </div>
            </div>

            <div className="events-section">
                <h2>Upcoming Events & Services</h2>
                <div className="events-list">
                    {config.residentChurch.events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            className="event-card"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="event-date">
                                <Calendar className="calendar-icon" />
                                <span>Event</span>
                            </div>
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <div className="event-time">
                                    <Clock size={16} /> {event.date}
                                </div>
                                <p>{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResidentChurch;
