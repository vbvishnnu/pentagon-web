import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'

const stats = [
    { value: '2006', label: 'Established' },
    { value: '4', label: 'Manufacturing Units' },
    { value: '3', label: 'Product Lines' },
    { value: '18+', label: 'Years of Excellence' },
]

const categories = [
    {
        title: "Men's Collection",
        desc: 'Premium Bermudas, Shorts, Pyjamas & Vests crafted for comfort and durability.',
        icon: '👔',
        color: '#4a90d9',
    },
    {
        title: "Women's Collection",
        desc: 'Elegant Pyjamas & Kurtas blending traditional craftsmanship with modern design.',
        icon: '👗',
        color: '#d94a8a',
    },
    {
        title: "Kids' Collection",
        desc: 'Colorful, comfortable Shorts, T-Shirts & Briefs designed for active kids.',
        icon: '🧒',
        color: '#4ad9a5',
    },
]

const newsEvents = [
    { title: 'Quality Month Celebration', date: 'November 2022' },
    { title: 'Diwali Celebration', date: '2022' },
    { title: 'Pongal Celebrations', date: '2023' },
]

const qualities = [
    { icon: '📐', title: 'Six Sigma', desc: 'Data-driven quality management for near-perfect results' },
    { icon: '🔄', title: 'Kaizen', desc: 'Continuous improvement in every process and product' },
    { icon: '✨', title: '5S Methodology', desc: 'Workplace organization for peak efficiency' },
    { icon: '🧠', title: 'Intelligent Garments', desc: 'Innovative smart textiles for the modern world' },
]

function Counter({ end, label }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const isNum = !isNaN(parseInt(end))
        if (!isNum) { setCount(end); return }
        const target = parseInt(end)
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0
                const step = Math.max(1, Math.floor(target / 40))
                const timer = setInterval(() => {
                    start += step
                    if (start >= target) { setCount(target); clearInterval(timer) }
                    else { setCount(start) }
                }, 40)
                observer.disconnect()
            }
        }, { threshold: 0.5 })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [end])

    return (
        <div className="home-stat" ref={ref}>
            <span className="home-stat__value">{typeof count === 'number' ? count : count}</span>
            {end.toString().includes('+') && <span className="home-stat__plus">+</span>}
            <span className="home-stat__label">{label}</span>
        </div>
    )
}

function Home() {
    return (
        <div className="home">
            {/* Hero */}
            <section className="home-hero">
                <div className="home-hero__bg-shapes">
                    <div className="home-hero__shape home-hero__shape--1"></div>
                    <div className="home-hero__shape home-hero__shape--2"></div>
                    <div className="home-hero__shape home-hero__shape--3"></div>
                </div>
                <div className="container home-hero__content">
                    <div className="home-hero__text">
                        <span className="section-label">Since 2006</span>
                        <h1 className="home-hero__title">
                            Crafting <span className="text-gradient">Premium</span><br />
                            Intelligent Garments
                        </h1>
                        <p className="home-hero__subtitle">
                            High-tech manufacturer of quality branded Bermudas, Kurtas, Vests & Briefs.
                            Delivering excellence from Virudhunagar to the world.
                        </p>
                        <div className="home-hero__actions">
                            <Link to="/products" className="btn btn-primary">Explore Products</Link>
                            <Link to="/about" className="btn btn-outline">Our Story</Link>
                        </div>
                    </div>
                    <div className="home-hero__visual">
                        <div className="home-hero__card animate-float">
                            <div className="home-hero__card-inner">
                                <span className="home-hero__card-icon">🧵</span>
                                <span className="home-hero__card-text">Quality First</span>
                            </div>
                        </div>
                        <div className="home-hero__pentagon">
                            <div className="home-hero__pentagon-ring"></div>
                            <div className="home-hero__pentagon-ring home-hero__pentagon-ring--2"></div>
                            <span className="home-hero__pentagon-icon">⬠</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="home-stats">
                <div className="container">
                    <div className="home-stats__grid">
                        {stats.map((stat, i) => (
                            <Counter key={i} end={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section home-vm">
                <div className="container">
                    <div className="home-vm__grid">
                        <div className="card home-vm__card">
                            <div className="home-vm__icon">🎯</div>
                            <h3>Our Vision</h3>
                            <p>To become a textile industry leader within five years by integrating segments, developing intelligent garments, and innovating based on customer needs.</p>
                        </div>
                        <div className="card home-vm__card">
                            <div className="home-vm__icon">🚀</div>
                            <h3>Our Mission</h3>
                            <p>To provide superior quality textile products to help customers gain a competitive advantage and offer a growth-oriented environment for employees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="section home-categories">
                <div className="container">
                    <span className="section-label">What We Offer</span>
                    <h2 className="section-title">Our Product Lines</h2>
                    <p className="section-subtitle">Premium garments for the whole family, crafted with care and precision.</p>

                    <div className="home-categories__grid">
                        {categories.map((cat, i) => (
                            <Link to="/products" className="card home-categories__card" key={i}>
                                <div className="home-categories__icon" style={{ background: `${cat.color}15`, color: cat.color }}>
                                    {cat.icon}
                                </div>
                                <h3>{cat.title}</h3>
                                <p>{cat.desc}</p>
                                <span className="home-categories__arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality */}
            <section className="section home-quality">
                <div className="container">
                    <span className="section-label">Our Standards</span>
                    <h2 className="section-title">Quality at <span className="text-gradient">Every Step</span></h2>
                    <p className="section-subtitle">We employ world-class methodologies to deliver products of exceptional quality.</p>

                    <div className="grid-4 home-quality__grid">
                        {qualities.map((q, i) => (
                            <div className="card home-quality__card" key={i}>
                                <div className="home-quality__icon">{q.icon}</div>
                                <h4>{q.title}</h4>
                                <p>{q.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="section home-about">
                <div className="container">
                    <div className="home-about__grid">
                        <div className="home-about__content">
                            <span className="section-label">About Pentagon</span>
                            <h2 className="section-title">Welcome to Pentagon Textiles</h2>
                            <p>
                                Established in 2006 by five professionals with diverse backgrounds, Pentagon Textiles has grown into
                                a leading manufacturer of intelligent garments. Under the leadership of MD Mr. Jawahar, an expert in
                                intelligent textiles, we've built a reputation for quality and innovation.
                            </p>
                            <p>
                                Strategically located in Virudhunagar, Tamil Nadu, our manufacturing units are positioned to provide
                                local employment while maintaining optimal logistics and supply chain efficiency.
                            </p>
                            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="home-about__visual">
                            <div className="home-about__stat-card">
                                <span className="home-about__stat-number">5</span>
                                <span className="home-about__stat-text">Founding<br />Professionals</span>
                            </div>
                            <div className="home-about__stat-card">
                                <span className="home-about__stat-number">4</span>
                                <span className="home-about__stat-text">Manufacturing<br />Units</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News */}
            <section className="section home-news">
                <div className="container">
                    <span className="section-label">Latest Updates</span>
                    <h2 className="section-title">News & Events</h2>
                    <div className="home-news__grid">
                        {newsEvents.map((event, i) => (
                            <div className="card home-news__card" key={i}>
                                <div className="home-news__badge">{event.date}</div>
                                <h4>{event.title}</h4>
                                <p>A memorable celebration bringing our team together and strengthening our community bonds.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="home-cta">
                <div className="container">
                    <div className="home-cta__inner">
                        <h2>Ready to Place Your Order?</h2>
                        <p>Contact us today and discover our premium garment collections at competitive prices.</p>
                        <div className="home-cta__actions">
                            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                            <a href="mailto:contact@pentagontextiles.com" className="btn btn-ghost">
                                ✉ contact@pentagontextiles.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
