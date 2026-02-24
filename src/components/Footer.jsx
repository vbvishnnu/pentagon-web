import { Link } from 'react-router-dom'
import './Footer.css'

const locations = [
    { name: 'GJ Innovations', address: '1/407, D.P-2, SIDCO Industrial Estate Sulakkarai, Virudhunagar - 626003' },
    { name: 'Pentagon Garments', address: '216, Alagai Nagar, Rajapalayam - 626117' },
    { name: 'Pentagon Apparels I', address: '2, By-Pass Road, Virudhunagar - 626001' },
    { name: 'Pentagon Apparels II', address: 'SIDCO New Industrial Estate, Alagapuri Main Road, Pavali, Virudhunagar - 626001' },
]

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow"></div>
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-icon">⬠</span>
                            <div>
                                <div className="footer__logo-name">PENTAGON</div>
                                <div className="footer__logo-sub">TEXTILES</div>
                            </div>
                        </div>
                        <p className="footer__desc">
                            High-tech manufacturer of premium branded garments. Specializing in intelligent textiles since 2006.
                        </p>
                        <div className="footer__contact-quick">
                            <a href="mailto:contact@pentagontextiles.com">✉ contact@pentagontextiles.com</a>
                            <a href="tel:+919750943102">☎ (+91) 9750943102</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/factory">Factory</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Products</h4>
                        <ul className="footer__list">
                            <li><Link to="/products">Bermuda Shorts</Link></li>
                            <li><Link to="/products">Pyjamas</Link></li>
                            <li><Link to="/products">Vests</Link></li>
                            <li><Link to="/products">Kurtas</Link></li>
                            <li><Link to="/products">Briefs</Link></li>
                            <li><Link to="/products">Kids Wear</Link></li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Our Locations</h4>
                        <ul className="footer__locations">
                            {locations.map((loc, i) => (
                                <li key={i}>
                                    <strong>{loc.name}</strong>
                                    <span>{loc.address}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} Pentagon Textiles. All rights reserved.</p>
                    <p>Designed by Pentagon-TechSolution</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
