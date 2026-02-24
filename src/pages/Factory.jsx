import './Factory.css'

const galleryItems = [
    { title: 'Front Gate', image: 'https://pentagontextiles.com/GJI/FRONT%20GATE.jpg' },
    { title: 'Front View', image: 'https://pentagontextiles.com/GJI/FRONT%20VIEW.jpg' },
    { title: 'Front View', image: 'https://pentagontextiles.com/GJI/FRONT%20VIEW-1.jpg' },
    { title: 'Garden View', image: 'https://pentagontextiles.com/GJI/GARDEN%20VIEW.jpg' },
    { title: 'Office Outside View', image: 'https://pentagontextiles.com/GJI/OFFICE%20OUTSIDE%20VIEW.jpg' },
    { title: 'Office Reception', image: 'https://pentagontextiles.com/GJI/OFFICE-RECEPTION.jpg' },
    { title: 'Office View', image: 'https://pentagontextiles.com/GJI/OFFICE-VIEW.jpg' },
    { title: 'Cutting Section', image: 'https://pentagontextiles.com/GJI/CUTTING-SECTION.jpg' },
    { title: 'Production', image: 'https://pentagontextiles.com/GJI/NPRODUCTION.jpg' },
    { title: 'Production Walkable View', image: 'https://pentagontextiles.com/GJI/PRODUCTION-WALKABLE%20VIEW.jpg' },
    { title: 'AQL Checking', image: 'https://pentagontextiles.com/GJI/AQL%20CHECKING.JPG' },
    { title: 'Packing Section', image: 'https://pentagontextiles.com/GJI/PACKING-SECTION.jpg' },
    { title: 'Packing Walkable View', image: 'https://pentagontextiles.com/GJI/PACKING-WALKABLE%20VIEW.jpg' },
]

const certifications = [
    { title: 'Six Sigma', desc: 'Data-driven approach to eliminate defects and minimize variability in manufacturing processes.', icon: '📐' },
    { title: 'Kaizen', desc: 'Continuous improvement philosophy applied across all departments and processes.', icon: '🔄' },
    { title: '5S Methodology', desc: 'Sort, Set, Shine, Standardize, Sustain — workplace organization for peak efficiency.', icon: '✨' },
]

function Factory() {
    return (
        <div className="factory">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Manufacturing Excellence</span>
                    <h1 className="section-title">Our <span className="text-gradient">Factory</span></h1>
                    <p className="section-subtitle">
                        A well-organized, professionally-run manufacturing facility equipped with modern machinery and skilled workforce.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="section factory__gallery-section">
                <div className="container">
                    <span className="section-label">Facility Tour</span>
                    <h2 className="section-title">Factory Appearances</h2>

                    <div className="factory__gallery">
                        {galleryItems.map((item, i) => (
                            <div className="factory__gallery-item" key={i}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="factory__gallery-img"
                                    loading="lazy"
                                />
                                <div className="factory__gallery-overlay">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section factory__certs">
                <div className="container">
                    <span className="section-label">Quality Assurance</span>
                    <h2 className="section-title">Our <span className="text-gradient">Standards</span></h2>
                    <p className="section-subtitle">
                        We incorporate world-class quality management systems to ensure every product meets the highest standards.
                    </p>

                    <div className="factory__certs-grid">
                        {certifications.map((cert, i) => (
                            <div className="card factory__cert-card" key={i}>
                                <div className="factory__cert-icon">{cert.icon}</div>
                                <h3>{cert.title}</h3>
                                <p>{cert.desc}</p>
                                <div className="factory__cert-bar">
                                    <div className="factory__cert-bar-fill" style={{ width: '95%' }}></div>
                                </div>
                                <span className="factory__cert-label">Compliance: 95%+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section factory__stats">
                <div className="container">
                    <div className="factory__stats-grid">
                        {[
                            { value: '4', label: 'Production Units' },
                            { value: '6', label: 'Facility Zones' },
                            { value: '100%', label: 'Quality Checked' },
                            { value: '24/7', label: 'Operations' },
                        ].map((stat, i) => (
                            <div className="factory__stat" key={i}>
                                <span className="factory__stat-value">{stat.value}</span>
                                <span className="factory__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Factory
