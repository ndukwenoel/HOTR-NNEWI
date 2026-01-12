import config from '../../data/config.json';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h3>HOTR Nnewi</h3>
                    <p>Home for All</p>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>{config.residentChurch.address}</p>
                    <p>Email: contact@hotrnnewi.com</p>
                </div>

                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jude Peters Ministries. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
