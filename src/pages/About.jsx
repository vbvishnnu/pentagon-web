import './About.css'

const timeline = [
    { year: '2006', title: 'Founded', desc: 'Pentagon Textiles established by five professionals with diverse backgrounds.' },
    { year: '2008', title: 'First Expansion', desc: 'Opened Pentagon Garments unit in Rajapalayam for dedicated garment production.' },
    { year: '2013', title: 'Digital Presence', desc: 'Launched corporate website and expanded market reach beyond Tamil Nadu.' },
    { year: '2018', title: 'Pentagon Apparels', desc: 'Opened two new units — Pentagon Apparels I & II in Virudhunagar.' },
    { year: '2022', title: 'Quality Excellence', desc: 'Celebrated Quality Month, reinforcing Six Sigma and Kaizen practices.' },
]

const values = [
    { icon: '🎯', title: 'Customer Focus', desc: 'Delivering superior quality products that give our customers a competitive advantage.' },
    { icon: '🌱', title: 'Employee Growth', desc: 'Providing a growth-oriented environment where talent can flourish and innovate.' },
    { icon: '🤝', title: 'Social Responsibility', desc: 'Strategic location in Virudhunagar to improve local employment and community welfare.' },
    { icon: '💡', title: 'Innovation', desc: 'Pioneering intelligent garments and smart textile solutions for the modern era.' },
    { icon: '⚡', title: 'Excellence', desc: 'Six Sigma, Kaizen, and 5S methodologies ensuring consistency in every product.' },
    { icon: '🌍', title: 'Sustainability', desc: 'Committed to sustainable manufacturing practices for a better tomorrow.' },
]

function About() {
    return (
        <div className="about">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Our Story</span>
                    <h1 className="section-title">About <span className="text-gradient">Pentagon Textiles</span></h1>
                    <p className="section-subtitle">
                        Established in 2006, we are a team of passionate professionals dedicated to crafting intelligent garments.
                    </p>
                </div>
            </section>

            {/* Company Profile */}
            <section className="section about__profile">
                <div className="container">
                    <div className="about__profile-grid">
                        <div className="about__profile-content">
                            <span className="section-label">Company Profile</span>
                            <h2 className="section-title">A Legacy of Quality</h2>
                            <p>
                                Pentagon Textiles was founded in 2006 by five visionary professionals, each bringing unique expertise
                                from diverse backgrounds. Together, they created a company rooted in innovation and quality.
                            </p>
                            <p>
                                Under the leadership of Managing Director Mr. Jawahar, an expert in intelligent textiles, the company
                                has grown from a single unit to four strategically located manufacturing facilities in and around
                                Virudhunagar, Tamil Nadu.
                            </p>
                            <p>
                                Our weaving and garment units are positioned for optimal logistics and labor availability, while
                                simultaneously fulfilling our societal obligation of providing local employment opportunities.
                            </p>
                        </div>
                        <div className="about__profile-visual">
                            <div className="about__profile-card glass">
                                <img
                                    src="https://i.ytimg.com/vi/XXz2rC0e34Q/maxresdefault.jpg"
                                    alt="Mr. Jawahar - Managing Director"
                                    className="about__profile-card-img"
                                />
                                <h3>Mr. Jawahar</h3>
                                <span className="about__profile-card-role">Managing Director</span>
                                <p>Expert in Intelligent Garments & Smart Textiles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section about__timeline-section">
                <div className="container">
                    <span className="section-label">Our Journey</span>
                    <h2 className="section-title">Growth <span className="text-gradient">Timeline</span></h2>

                    <div className="about__timeline">
                        {timeline.map((item, i) => (
                            <div className={`about__timeline-item ${i % 2 === 0 ? 'about__timeline-item--left' : 'about__timeline-item--right'}`} key={i}>
                                <div className="about__timeline-dot"></div>
                                <div className="card about__timeline-card">
                                    <span className="about__timeline-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="about__timeline-line"></div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section about__values">
                <div className="container">
                    <span className="section-label">What Drives Us</span>
                    <h2 className="section-title">Our Core <span className="text-gradient">Values</span></h2>
                    <p className="section-subtitle">The principles that guide every thread, every stitch, and every garment we create.</p>

                    <div className="about__values-grid">
                        {values.map((val, i) => (
                            <div className="card about__value-card" key={i}>
                                <div className="about__value-icon">{val.icon}</div>
                                <h4>{val.title}</h4>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
