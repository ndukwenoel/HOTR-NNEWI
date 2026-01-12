import { motion } from 'framer-motion';
import config from '../data/config.json';
import './Values.css';

const Values = () => {
    return (
        <div className="values-page container">
            <div className="page-header">
                <motion.span
                    className="section-label"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Community & Service
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Values & Impact
                </motion.h1>
            </div>

            <div className="impact-grid">
                {config.values.impact.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="impact-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="card-image">
                            <div className="placeholder-img">{item.category}</div>
                        </div>
                        <div className="card-content">
                            <span className="card-category">{item.category}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Values;
