import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Our_service() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            <div className='my-5'>
                <div className='text-center mb-3'>
                    <h2 className='fw-semibold'>Our  <span style={{ color: '#56c6c9' }}>Services</span></h2>
                    <div className='home-box-div'></div>
                </div>

                <div className='container overflow-hidden'>
                    <div className='row'>
                        <div className='col-lg-4 mt-4' data-aos="flip-left" data-aos-duration="1000">
                            <div className='our-service-ic'>
                                <img src="/image/h1-icon.png" alt="h1-icon" className='it-bussiness-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>WEBSITE DEVELOPMENT</h4>
                                <p>Web development is the building and maintenance of websites. We are here to give your business a great looking online presence. We are a team with an expertise a creative solutions and stunning results.</p>

                                <button className='our-service-see-more-btn'>See More</button>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-4' data-aos="flip-left" data-aos-duration="1000">
                            <div className='our-service-ic'>
                                <img src="/image/api-intigration.png" alt="api-intigration" className='it-bussiness-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>API INTEGRATION</h4>
                                <p>API integration can be defined as the process of creating a means for two or more APIs to share data and communicate with each other without human interruption.
                                </p>

                                <button className='our-service-see-more-btn'>See More</button>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-4' data-aos="flip-left" data-aos-duration="1000">
                            <div className='our-service-ic'>
                                <img src="/image/h3-icon.png" alt="h3-icon" className='it-bussiness-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>APP DEVELOPMENT</h4>
                                <p>Mobile application development is the process of creating apps that run on any mobile platform: Android and iOS Do you wish to “Go Mobile” to expand your business? Being the mobile app development company.</p>

                                <button className='our-service-see-more-btn'>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
