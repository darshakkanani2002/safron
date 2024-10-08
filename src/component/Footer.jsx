import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className='mt-5 footer-animation'>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <section className='bg-light footer-back'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-lg-3 col-12 m-width-100'>
                                <a class="navbar-brand safron-logo" href="#">
                                    <span>AADHYA</span>
                                    <p className='mb-0 text-start text-white'>INFOTECH</p>
                                </a>
                                <div className='mt-4'>
                                    <p className='fs-6'>
                                        Ad Infotech focus on high quality, timely delivery, client satisfaction, and cost-effective development services to our clients.
                                    </p>
                                </div>
                                <div>
                                    <ul className='list-unstyled d-flex'>
                                        <li className='mx-2'><a href="https://wa.me/7984351224" target='_blank'><i class="fa-brands fa-whatsapp footer-icon"></i></a></li>
                                        <li className='mx-2'><a href="#"><i class="fa-brands fa-twitter footer-icon"></i></a></li>
                                        <li className='mx-2'><a href="#"><i class="fa-brands fa-instagram footer-icon"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-12 m-width-50'>
                                <h3 className='fw-bold'>Our Links</h3>
                                <ul className='footer-product-div mt-4 list-unstyled'>
                                    <li className='ps-4 footer-latest-pro  mb-3'><Link to='/term' target='_top' className='fw-semibold text-decoration-none text-white'>Terms & conditions</Link></li>
                                    <li className='ps-4 footer-latest-pro fw-semibold mb-3'><Link to='/faq' target='_top' className='fw-semibold text-decoration-none text-white'>FAQ's</Link></li>
                                    <li className='ps-4 footer-latest-pro fw-semibold mb-3'><Link to='/privacypolicy' target='_top' className='fw-semibold text-decoration-none text-white'>Privacy Policy</Link></li>
                                    <li className='ps-4 footer-latest-pro fw-semibold mb-3'><Link to='/about' target='_top' className='fw-semibold text-decoration-none text-white'>About Us</Link></li>
                                    <li className='ps-4 footer-latest-pro fw-semibold'><Link to='/contact' target='_top' className='fw-semibold text-decoration-none text-white'>Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className='col-lg-4 col-md-6 col-12 m-width-50'>
                                <div className='d-flex justify-content-lg-center justify-content-start'>
                                    <div>
                                        <h3 className='fw-bold'>More Solution</h3>
                                        <ul className='footer-product-div-2 mt-4 list-unstyled'>
                                            <li className='ps-4 footer-latest-pro fw-semibold mb-3'>Payment Gateway Integration</li>
                                            <li className='ps-4 footer-latest-pro fw-semibold mb-3'>Web Development(Azure)</li>
                                            <li className='ps-4 footer-latest-pro fw-semibold mb-3'>Mobile Application Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-3 col-12 m-width-100'>
                                <h3 className='fw-bold'>Get In Touch</h3>
                                <ul className='mt-4 footer-popular-product-div p-4'>
                                    <h6 className='text-dark'><i className="fa-solid fa-circle-dot"></i><strong className='text-dark'>Mon-Sat :</strong> 9:30 AM to 6:30 PM</h6>
                                    <h6 className='mt-4 text-dark'><i className="fa-solid fa-circle-dot"></i> <strong className='text-dark'>Sunday :</strong> Closed</h6>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='footer-rights-back pt-4 pb-3 text-center'>
                    <div className='container'>
                        <div className='footer-last-section-div'></div>
                        <h5 className='text-light mt-3 mb-0'>DESIGNED BY VARNIINFOSYSTEM.COM © 2021 ALL RIGHTS RESERVED</h5>
                    </div>
                </section>
            </footer>
        </div>
    )
}
