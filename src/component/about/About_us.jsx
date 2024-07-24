import React from 'react'

export default function About_us() {
    return (
        <div>
            <div className='text-center mb-5 mt-5'>
                <h2 className='fw-semibold'>About <span style={{ color: '#56c6c9' }}> Us</span></h2>
                <div className='home-box-div'></div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div>
                            <h2 className='h1 fw-semibold'>Connecting things, It’s all about Safron Infotech.</h2>
                            <p className='fs-5 fw-semibold'>Our IT services converge business and the technology experts to help to manage business processes of all categories.</p>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <ul className='about-us-category'>
                                        <li>Quick To Respond Flexible Price</li>
                                        <li>Verified Professionals Flexible</li>
                                        <li>Expert Team</li>
                                    </ul>
                                </div>

                                <div className='col-lg-6'>
                                    <ul className='about-us-category'>
                                        <li>Ontime at Services Flexible Price</li>
                                        <li>End-to-End Support</li>
                                        <li>Success Driven</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className='fs-5 fw-semibold'>
                                    Safron Infotech play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s for web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img src="/image/ab-1.png" alt="ab-1" className='img-fluid' />
                    </div>
                </div>
            </div>
            {/* Our Mission  */}
            <div className='container'>
                <div className='row align-items-center'>
                    <div className="col-12">
                        <div className='text-center mb-5 mt-5'>
                            <h2 className='fw-semibold'>Our <span style={{ color: '#56c6c9' }}> Mission</span></h2>
                            <div className='home-box-div text-start'></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="/image/our-mission-img.webp" alt="our-mission-img" className='img-fluid w-100 our-misson-img' />
                    </div>
                    <div className='col-lg-6 our-mission-description'>
                        <p>Our mission is to deliver optimal solutions with top quality and best services at affordable prices. In Our Business Policy Customer satisfaction is given top priority. Our team is very friendly in dealings to the customers and it helps us to retain lifelong relationship with our existing clients and expand our customer circle worldwide.</p>
                        <p>
                            We always try to improve the quality of our products by exploring innovative ideas and new techniques. Exceed client's expectations by going beyond software to provide best Web solutions that transform data into knowledge, enabling them to solve their problems.
                        </p>
                        <p>
                            We always try to enhance efficiency, productivity and capability of businesses by delivering the services above &beyond industry values and customer expectations. We visualize our organization to be the first and the last stop for the businesses across the globe seeking out for long-term success and prosperity with the help of our team.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Vision */}
            <div className='container'>
                <div className='row align-items-center'>
                    <div className="col-12">
                        <div className='text-center mb-5 mt-5'>
                            <h2 className='fw-semibold'>Our <span style={{ color: '#56c6c9' }}> Vision</span></h2>
                            <div className='home-box-div text-start'></div>
                        </div>
                    </div>


                    <div className='col-lg-6 our-mission-description'>
                        <p>Our Vision is to be a leading Web Solution company in IT sector and progress in our current position in market. We clearly understand that all customer landscapes are not of same kind. That’s why Izonnet sourcing methodology encompasses a clear solution especially crafted to address the clients' issues.</p>
                        <p>
                            We know that Customer’s growth is our growth, so we commit our customers to help in achieving their business goals. We believe in work with the accuracy and best quality. We want to be known as the reliable, innovative and user friendly software service provider in IT industry.
                        </p>
                    </div>


                    <div className="col-lg-6">
                        <img src="/image/our_vision.jpg" alt="our_vision" className='img-fluid w-100 our-misson-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}
