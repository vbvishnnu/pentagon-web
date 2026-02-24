import { useState } from 'react'
import './Products.css'

const products = {
    mens: [
        { name: 'Bermuda Shorts - Black', model: 'BM-001', category: 'mens', image: 'https://pentagontextiles.com/pentagon/black-shorts-1206.jpg', desc: 'Premium cotton bermuda in classic black, perfect for everyday comfort.' },
        { name: 'Bermuda Shorts - Khaki', model: 'BM-002', category: 'mens', image: 'https://pentagontextiles.com/pentagon/khaki-shorts-1206.jpg', desc: 'Versatile khaki bermuda with reinforced stitching for lasting durability.' },
        { name: 'Bermuda Shorts - Stellar', model: 'BM-003', category: 'mens', image: 'https://pentagontextiles.com/pentagon/stellar-shorts-1206.jpg', desc: 'Stellar bermuda shorts crafted from breathable cotton blend.' },
        { name: 'Black Pyjama', model: '9009', category: 'mens', image: 'https://pentagontextiles.com/pentagon/9009_black_Pyjama.jpg', desc: 'Soft cotton pyjama in rich black, designed for restful nights.' },
        { name: 'White Vest', model: '8820', category: 'mens', image: 'https://pentagontextiles.com/pentagon/White-Vest-8820.jpg', desc: 'Lightweight cotton vest with superior breathability and comfort fit.' },
        { name: 'Navy Shorts', model: '1206', category: 'mens', image: 'https://pentagontextiles.com/pentagon/navy-shorts-1206.jpg', desc: 'Classic navy shorts with elastic waistband for maximum flexibility.' },
    ],
    womens: [
        { name: "Women's Kurta", model: 'WK-001', category: 'womens', image: 'https://pentagontextiles.com/pentagon/Womens-Kurta-1.jpg', desc: 'Elegant kurta with premium finish and traditional styling.' },
        { name: "Women's Pyjama - Style 1", model: 'WP-001', category: 'womens', image: 'https://pentagontextiles.com/pentagon/Womens-Pyjama-1.jpg', desc: 'Comfortable pyjama pants with soft elastic waistband.' },
        { name: "Women's Pyjama - Style 2", model: 'WP-002', category: 'womens', image: 'https://pentagontextiles.com/pentagon/Womens-Pyjama-2.jpg', desc: 'Cozy patterned pyjama in rich tones for comfortable lounging.' },
    ],
    kids: [
        { name: 'Kids Collection - Style 1', model: 'KS-001', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids5.jpg', desc: 'Fun and colorful wear for active kids, durable and washable.' },
        { name: 'Kids Collection - Style 2', model: 'KS-002', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids2.jpg', desc: 'Bright and playful designs made from soft, skin-friendly cotton.' },
        { name: 'Kids Collection - Style 3', model: 'KS-003', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids7.jpg', desc: 'Comfortable kids wear with vibrant patterns and tagless design.' },
        { name: 'Kids Collection - Style 4', model: 'KS-004', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids6.jpg', desc: 'Durable everyday wear designed for comfort and easy movement.' },
        { name: 'Kids Collection - Style 5', model: 'KS-005', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids3.jpg', desc: 'Premium quality kids garments with fun colors and prints.' },
        { name: 'Kids Collection - Style 6', model: 'KS-006', category: 'kids', image: 'https://pentagontextiles.com/pentagon/Kids4.jpg', desc: 'Soft cotton blend garments perfect for all-day comfort.' },
    ]
}

const filters = [
    { key: 'all', label: 'All Products' },
    { key: 'mens', label: "Men's" },
    { key: 'womens', label: "Women's" },
    { key: 'kids', label: "Kids" },
]

function Products() {
    const [activeFilter, setActiveFilter] = useState('all')

    const allProducts = activeFilter === 'all'
        ? [...products.mens, ...products.womens, ...products.kids]
        : products[activeFilter] || []

    return (
        <div className="products">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">Our Collection</span>
                    <h1 className="section-title">Premium <span className="text-gradient">Garments</span></h1>
                    <p className="section-subtitle">
                        High-quality branded Bermudas, Kurtas, Vests, Pyjamas & Briefs — crafted with care for the whole family.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="products__filter-section">
                <div className="container">
                    <div className="products__filters">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                className={`products__filter-btn ${activeFilter === f.key ? 'products__filter-btn--active' : ''}`}
                                onClick={() => setActiveFilter(f.key)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="section products__grid-section">
                <div className="container">
                    <div className="products__grid">
                        {allProducts.map((product, i) => (
                            <div className="products__card card" key={`${activeFilter}-${i}`} style={{ animationDelay: `${i * 0.07}s` }}>
                                <div className="products__card-image">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="products__card-img"
                                        loading="lazy"
                                    />
                                    <span className="products__card-category">{product.category === 'mens' ? "Men's" : product.category === 'womens' ? "Women's" : "Kids"}</span>
                                </div>
                                <div className="products__card-content">
                                    <h3>{product.name}</h3>
                                    <span className="products__card-model">Model: {product.model}</span>
                                    <p>{product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Units */}
            <section className="section products__units">
                <div className="container">
                    <span className="section-label">Where We Manufacture</span>
                    <h2 className="section-title">Our Manufacturing Units</h2>
                    <div className="grid-4" style={{ marginTop: '2rem' }}>
                        {[
                            { name: 'GJ Innovations', icon: '🏭', desc: 'Primary R&D and production hub' },
                            { name: 'Pentagon Garments', icon: '✂️', desc: 'Main garment manufacturing unit' },
                            { name: 'Pentagon Apparels I', icon: '🧵', desc: 'Specialized apparel production' },
                            { name: 'Pentagon Apparels II', icon: '📦', desc: 'Large-scale finishing & packaging' },
                        ].map((unit, i) => (
                            <div className="card products__unit-card" key={i}>
                                <span className="products__unit-icon">{unit.icon}</span>
                                <h4>{unit.name}</h4>
                                <p>{unit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
