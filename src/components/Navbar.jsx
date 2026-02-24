import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/factory', label: 'Factory' },
    { path: '/about', label: 'About Us' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [location])

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__logo">
                    <span className="navbar__logo-icon">⬠</span>
                    <div className="navbar__logo-text">
                        <span className="navbar__logo-name">PENTAGON</span>
                        <span className="navbar__logo-sub">TEXTILES</span>
                    </div>
                </Link>

                <ul className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="navbar__cta-mobile">
                        <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                    </li>
                </ul>

                <Link to="/contact" className="btn btn-primary navbar__cta-desktop">
                    Get in Touch
                </Link>

                <button
                    className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
