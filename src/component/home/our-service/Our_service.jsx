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
                                <img src="/image/website-development.png" alt="website-development" className='it-bussiness-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>WEBSITE DEVELOPMENT</h4>
                                <p>Web development is the building and maintenance of websites. We are here to give your business a great looking online presence. We are a team with an expertise a creative solutions and stunning results.</p>
                                <div className='text-center'>
                                    <button className='our-service-see-more-btn'>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-4' data-aos="flip-left" data-aos-duration="1000">
                            <div className='our-service-ic'>
                                <img src="/image/game-development.png" alt="api-intigration" className='it-bussiness-ic game-development-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>GAME DEVELOPMENT</h4>
                                <p>A newly started game development company focuses on creating immersive, innovative, and engaging gaming experiences across multiple platforms.
                                </p>

                                <div className='text-center'>
                                    <button className='our-service-see-more-btn'>See More</button>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4 mt-4' data-aos="flip-left" data-aos-duration="1000">
                            <div className='our-service-ic'>
                                <img src="/image/app-development.png" alt="app-development" className='it-bussiness-ic' />
                            </div>
                            <div className='our-service-line'></div>
                            <div className='our-service-descroiption px-4 py-5'>
                                <h4 className='text-center fw-semibold'>APP DEVELOPMENT</h4>
                                <p>Mobile application development is the process of creating apps that run on any mobile platform: Android and iOS Do you wish to “Go Mobile” to expand your business? Being the mobile app development company.</p>

                                <div className='text-center'>
                                    <button className='our-service-see-more-btn'>See More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
