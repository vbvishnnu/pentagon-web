import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Factory from './pages/Factory'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="factory" element={<Factory />} />
                    <Route path="about" element={<About />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
