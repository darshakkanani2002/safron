import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <div>
            {/* // Navigaton bar */}
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container">
                    <Link className="navbar-brand safron-logo" to="#">
                        <span>SAFRON</span>
                        <p className='mb-0'>INFOTECH</p>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link" to="technologies">
                                    TECHNOLOGIES
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SERVICES
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='#'>
                                    REVIEWS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='#'>
                                    FEATURES
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to='about'>
                                    ABOUT US
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='contact'>
                                    CONTACT US
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>


    )
}
