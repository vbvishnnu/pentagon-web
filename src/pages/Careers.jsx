import { useState } from 'react'
import './Careers.css'

const openings = [
    {
        title: 'Sales Person',
        department: 'Sales & Marketing',
        type: 'Full Time',
        experience: '3+ Years',
        location: 'Virudhunagar, TN',
        requirements: [
            'Minimum 3 years of experience in product sales',
            'Excellent communication and negotiating skills',
            'Ability to work independently and manage client relationships',
            'Knowledge of textile industry preferred',
        ],
    },
]

const benefits = [
    { icon: '📈', title: 'Growth Environment', desc: 'Continuous learning and career advancement opportunities.' },
    { icon: '🏭', title: 'Modern Workplace', desc: 'Work in our state-of-the-art manufacturing facilities.' },
    { icon: '🤝', title: 'Team Culture', desc: 'Be part of a collaborative team that celebrates together.' },
    { icon: '🎯', title: 'Quality Focus', desc: 'Work with Six Sigma and Kaizen methodologies.' },
]

function Careers() {
    const [form, setForm] = useState({ jobName: openings[0]?.title || '', fullName: '', email: '', contactNumber: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <div className="careers">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Join Our Team</span>
                    <h1 className="section-title">Build Your <span className="text-gradient">Career</span></h1>
                    <p className="section-subtitle">
                        Join Pentagon Textiles and be part of a team that values growth, innovation, and excellence.
                    </p>
                </div>
            </section>

            {/* Benefits */}
            <section className="section careers__benefits">
                <div className="container">
                    <span className="section-label">Why Join Us</span>
                    <h2 className="section-title">Life at Pentagon</h2>
                    <div className="grid-4" style={{ marginTop: '2rem' }}>
                        {benefits.map((b, i) => (
                            <div className="card careers__benefit-card" key={i}>
                                <span className="careers__benefit-icon">{b.icon}</span>
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings */}
            <section className="section careers__openings">
                <div className="container">
                    <span className="section-label">Current Openings</span>
                    <h2 className="section-title">Open <span className="text-gradient">Positions</span></h2>

                    <div className="careers__openings-list">
                        {openings.map((job, i) => (
                            <div className="card careers__job-card" key={i}>
                                <div className="careers__job-header">
                                    <div>
                                        <h3>{job.title}</h3>
                                        <span className="careers__job-dept">{job.department}</span>
                                    </div>
                                    <div className="careers__job-meta">
                                        <span className="careers__job-tag">{job.type}</span>
                                        <span className="careers__job-tag">{job.experience}</span>
                                        <span className="careers__job-tag">📍 {job.location}</span>
                                    </div>
                                </div>
                                <div className="careers__job-body">
                                    <h4>Requirements</h4>
                                    <ul>
                                        {job.requirements.map((req, j) => (
                                            <li key={j}>
                                                <span className="careers__job-check">✓</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="section careers__apply">
                <div className="container">
                    <div className="careers__apply-grid">
                        <div className="careers__apply-content">
                            <span className="section-label">Apply Now</span>
                            <h2 className="section-title">Submit Your Application</h2>
                            <p>Fill out the form below and our HR team will get back to you within 48 hours.</p>
                        </div>
                        <div className="card careers__apply-form-card">
                            {submitted ? (
                                <div className="careers__apply-success">
                                    <span>✅</span>
                                    <h3>Application Submitted!</h3>
                                    <p>Thank you for your interest. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label className="form-label">Job Position</label>
                                        <select className="form-input form-select" value={form.jobName} onChange={(e) => setForm({ ...form, jobName: e.target.value })}>
                                            {openings.map((job, i) => (
                                                <option key={i} value={job.title}>{job.title}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Full Name</label>
                                        <input className="form-input" type="text" placeholder="Your full name" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input className="form-input" type="email" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Contact Number</label>
                                        <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" required value={form.contactNumber} onChange={(e) => setForm({ ...form, contactNumber: e.target.value })} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Careers
