import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className='mt-5'>
                <section className='bg-light footer-back'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-lg-3 col-12 m-width-100'>
                                <a class="navbar-brand safron-logo" href="#">
                                    <span>SAFRON</span>
                                    <p className='mb-0 text-start text-white'>INFOTECH</p>
                                </a>
                                <div className='mt-4'>
                                    <p className='fs-6'>
                                        We are fast growing integrated and ISO 9001-2008 certified Pharmaceutical bulk drugs [API] , pharmamedicine and Intermediates exporting company.
                                    </p>
                                </div>
                            </div>

                            <div className='col-lg-2 col-md-6 col-12 m-width-50'>
                                <h3 className='fw-bold'>Our Links</h3>
                                <div className='footer-product-div mt-4'></div>
                                <p className='ps-4 footer-latest-pro fw-semibold'>Terms & conditions</p>
                                <p className='ps-4 footer-latest-pro fw-semibold'>FAQ's</p>
                                <p className='ps-4 footer-latest-pro fw-semibold'>Privacy Policy</p>
                                <p className='ps-4 footer-latest-pro fw-semibold'>About Us</p>
                                <p className='ps-4 footer-latest-pro fw-semibold'>Contact Us</p>
                            </div>

                            <div className='col-lg-4 col-md-6 col-12 m-width-50'>
                                <div className='d-flex justify-content-lg-center justify-content-start'>
                                    <div>
                                        <h3 className='fw-bold'>More Solution</h3>
                                        <div className='footer-product-div-2 mt-4'></div>
                                        <p className='ps-4 footer-latest-pro fw-semibold'>Payment Gateway Integration</p>
                                        <p className='ps-4 footer-latest-pro fw-semibold'>Web Development(Azure)</p>
                                        <p className='ps-4 footer-latest-pro fw-semibold'>Mobile Application Development</p>
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
