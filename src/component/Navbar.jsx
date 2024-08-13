import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
                <Link className="navbar-brand safron-logo" to="#">
                    <span>AADHYA</span>
                    <p className='mb-0'>INFOTECH</p>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                                to="/"
                                onClick={() => setActiveLink('/')}
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link ${activeLink === '/technologies' ? 'active' : ''}`}
                                to="/technologies"
                                onClick={() => setActiveLink('/technologies')}
                            >
                                TECHNOLOGIES
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className={`nav-link ${activeLink === '/services' ? 'active' : ''}`}
                                to="/services"
                                onClick={() => setActiveLink('/services')}
                            >
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                                to="/about"
                                onClick={() => setActiveLink('/about')}
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                                to="/contact"
                                onClick={() => setActiveLink('/contact')}
                            >
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
