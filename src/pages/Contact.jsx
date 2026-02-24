import { useState } from 'react'
import './Contact.css'

const locations = [
    { name: 'GJ Innovations and Textile Network Pvt. Ltd.', address: '1/407, D.P-2, SIDCO Industrial Estate Sulakkarai, Virudhunagar - 626003', icon: '🏭' },
    { name: 'Pentagon Garments', address: '216, Alagai Nagar, Rajapalayam - 626117', icon: '✂️' },
    { name: 'Pentagon Apparels - I', address: '2, By-Pass Road, Virudhunagar - 626001', icon: '🧵' },
    { name: 'Pentagon Apparels - II', address: 'DP.No 71 to 82, SIDCO New Industrial Estate, Alagapuri Main Road, Pavali, Virudhunagar - 626001', icon: '📦' },
]

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className="contact">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Get In Touch</span>
                    <h1 className="section-title">Contact <span className="text-gradient">Us</span></h1>
                    <p className="section-subtitle">
                        Have questions? Looking to place an order? Reach out to us — we'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Info Bar */}
            <section className="contact__info-bar">
                <div className="container">
                    <div className="contact__info-grid">
                        <div className="contact__info-item">
                            <span className="contact__info-icon">✉</span>
                            <div>
                                <span className="contact__info-label">Email Us</span>
                                <a href="mailto:contact@pentagontextiles.com">contact@pentagontextiles.com</a>
                            </div>
                        </div>
                        <div className="contact__info-item">
                            <span className="contact__info-icon">☎</span>
                            <div>
                                <span className="contact__info-label">Call Us</span>
                                <a href="tel:+919750943102">(+91) 9750943102</a>
                            </div>
                        </div>
                        <div className="contact__info-item">
                            <span className="contact__info-icon">📍</span>
                            <div>
                                <span className="contact__info-label">Location</span>
                                <span>Virudhunagar, Tamil Nadu, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form + Map */}
            <section className="section contact__main">
                <div className="container">
                    <div className="contact__main-grid">
                        {/* Form */}
                        <div className="card contact__form-card">
                            <h3 className="contact__form-title">Send Us a Message</h3>
                            {submitted ? (
                                <div className="contact__form-success">
                                    <span>✅</span>
                                    <h4>Message Sent!</h4>
                                    <p>Thank you for reaching out. We'll respond within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="contact__form-row">
                                        <div className="form-group">
                                            <label className="form-label">Name</label>
                                            <input className="form-input" type="text" placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email</label>
                                            <input className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="contact__form-row">
                                        <div className="form-group">
                                            <label className="form-label">Contact Number</label>
                                            <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">City</label>
                                            <input className="form-input" type="text" placeholder="Your city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-textarea" placeholder="Tell us about your requirements..." required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                                </form>
                            )}
                        </div>

                        {/* Map Placeholder */}
                        <div className="contact__map-wrapper">
                            <div className="contact__map glass">
                                <div className="contact__map-pin">📍</div>
                                <h3>Virudhunagar, Tamil Nadu</h3>
                                <p>Our manufacturing facilities are located in the heart of South Tamil Nadu's textile corridor.</p>
                                <a href="https://www.google.com/maps/place/Virudhunagar" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1rem' }}>
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="section contact__locations">
                <div className="container">
                    <span className="section-label">Our Offices</span>
                    <h2 className="section-title">Manufacturing <span className="text-gradient">Locations</span></h2>

                    <div className="grid-4" style={{ marginTop: '2rem' }}>
                        {locations.map((loc, i) => (
                            <div className="card contact__location-card" key={i}>
                                <span className="contact__location-icon">{loc.icon}</span>
                                <h4>{loc.name}</h4>
                                <p>{loc.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
