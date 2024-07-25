import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Hero() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={
                    {
                        nextEl: ".hero-prev-button ",
                        prevEl: ".hero-next-button",
                    }
                }
                loop={true}
            // autoplay
            >
                <SwiperSlide className='overflow-hidden '>
                    <div className='position-relative hero-img-margin hero-bg-1'>
                        <div className='hero-bg-overlay'>
                            <div className='text-center' >
                                <h2 className='text1 animate__animated animate__flipInX' >Welcome to <br></br>SARFON INFOTECH</h2>
                                <h5 className='text2'>User Experiences Through Responsive Design and Optimized <br className='d-lg-block d-md-block' /> Performance for a Seamless Web Presence.</h5>
                            </div>
                        </div>
                        {/* <img src="/image/banner-2.jpg" alt="banner-2" className='hero-image' /> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='position-relative hero-img-margin hero-bg-2'>
                        {/* <img src="/image/banner-3.jpg" alt="banner-3" className='hero-image' /> */}
                        <div className='hero-bg-overlay'>
                            <div className='text-center'>
                                <h2 className='text1'>WEB DESIGN</h2>
                                <h5 className='text2'>User Experiences Through Responsive Design and Optimized Performance for a Seamless Web Presence.</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='position-relative hero-img-margin hero-bg-3'>
                        {/* <img src="/image/banner-4.jpg" alt="banner-4" className='hero-image' /> */}
                        <div className='hero-bg-overlay'>
                            <div className='text-center'>
                                <h2 className='text1'>WEB DESIGN</h2>
                                <h5 className='text2'>User Experiences Through Responsive Design and Optimized Performance for a Seamless Web Presence.</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className=" hero-next-button"><img src="/image/prev.svg" alt="prev" className='hero-prev-next-icon d-lg-block d-md-block d-none' /></div>
                <div className=" hero-prev-button"><img src="/image/next.svg" alt="next" className='hero-prev-next-icon d-lg-block d-md-block d-none' /></div>

            </Swiper>
        </div >
    )
}
