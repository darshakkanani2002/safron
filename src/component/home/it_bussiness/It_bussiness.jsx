import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function It_bussiness() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            <div className='my-5 py-5'>
                <div className='text-center mb-3'>
                    <h2 className='fw-semibold'>We Help <span style={{ color: '#56c6c9' }}>Your IT Business</span></h2>
                    <div className='home-box-div'></div>
                </div>

                <div className='container'>
                    <div className='row mt-5 pt-3'>
                        <div className='col-lg-4'>
                            <img src="/image/img_about_us_02.png" alt="img_about_us_02" className='img-fluid w-100' />
                        </div>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-6 mt-3'>
                                    <div className='it-bussiness-cate' data-aos="fade-up" data-aos-duration="2000">
                                        <div className='d-flex align-items-center px-4 py-4 rounded'>
                                            <div className='me-3'>
                                                <img src="/image/app-development.png" alt="app-development" className='it-bussiness-ic' />
                                            </div>
                                            <div>
                                                <h4 className='mb-0 fw-semibold'>App Development</h4>
                                                <p className='mb-0'>Faster & Smarter Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 mt-3'>
                                    <div className='it-bussiness-cate' data-aos="fade-up" data-aos-duration="2000">
                                        <div className='d-flex align-items-center px-4 py-4 rounded'>
                                            <div className='me-3'>
                                                <img src="/image/ui-ux-design.png" alt="h2-icon" className='it-bussiness-ic' />
                                            </div>
                                            <div>
                                                <h4 className='mb-0 fw-semibold'>UX/UI Strategy</h4>
                                                <p className='mb-0'>Faster & Smarter Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-6 mt-3'>
                                    <div className='it-bussiness-cate' data-aos="fade-up" data-aos-duration="2000">
                                        <div className='d-flex align-items-center px-4 py-4 rounded'>
                                            <div className='me-3'>
                                                <img src="/image/web-delopment.png" alt="web-delopment" className='it-bussiness-ic' />
                                            </div>
                                            <div>
                                                <h4 className='mb-0 fw-semibold'>Web Development</h4>
                                                <p className='mb-0'>Faster & Smarter Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6 mt-3'>
                                    <div className='it-bussiness-cate' data-aos="fade-up" data-aos-duration="2000">
                                        <div className='d-flex align-items-center px-4 py-4 rounded'>
                                            <div className='me-3'>
                                                <img src="/image/game-development.png" alt="game-development" className='it-bussiness-ic game-development-ic' />
                                            </div>
                                            <div>
                                                <h4 className='mb-0 fw-semibold'>Game Development</h4>
                                                <p className='mb-0'>Faster & Smarter Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 mt-5">
                                <div className='it-solution-bussiness'>
                                    <h5 className='mb-0 text-white'>IT Solutions & Business Services Company</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
