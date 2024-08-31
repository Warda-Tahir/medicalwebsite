import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './NavBar.css';

// Import components for each section
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import FeedbackPage from '../Feedback/Feedbackpage';
import SpareParts from '../SpareParts/SpareParts';
import Projects from '../Projects/Projects';
import Products from '../Products/Products.jsx'; // New import for Products

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchContainerRef = useRef(null);

    const navToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const toggleSearchBar = () => {
        setIsSearchOpen((prevState) => !prevState);
    };

    const handleMenuItemClick = () => {
        if (window.innerWidth <= 768) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Router>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className={`nav-menu ${isMenuOpen ? 'nav-active' : ''}`}>
                        <div className="close-icon" onClick={navToggle}></div>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/spare-parts" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Spare Parts
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleMenuItemClick}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                    <div onClick={navToggle} className="nav-toggler" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? (
                            <div className="close-icon"></div>
                        ) : (
                            <>
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </>
                        )}
                    </div>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'contact-button active' : 'contact-button')}>
                        Contact Us
                    </NavLink>
                    <div className="search-icon-wrapper" onClick={toggleSearchBar}>
                        <i className="fa fa-search search-icon"></i>
                    </div>
                    {isSearchOpen && (
                        <form ref={searchContainerRef} className="search-container active">
                            <div className="search-bar-wrapper">
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search..."
                                    className="search-bar"
                                />
                            </div>
                        </form>
                    )}
                </div>
            </nav>

            {/* Define the routes for each component */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} /> 
                <Route path="/spare-parts" element={<SpareParts />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/reviews" element={<FeedbackPage />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default NavBar;
