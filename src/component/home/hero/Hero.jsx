import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Hero() {
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
            >
                <SwiperSlide className='overflow-hidden'>
                    <div className='position-relative'>
                        <img src="/image/banner-2.jpg" alt="banner-2" className='hero-image' />
                        <div className='text-center hero-section-text'>
                            <h2 className='text1'>Welcome to <br></br>SARFON INFOTECH</h2>
                            <h5 className='text2'>User Experiences Through Responsive Design and Optimized Performance for a Seamless Web Presence.</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='position-relative'>
                        <img src="/image/banner-3.jpg" alt="banner-3" className='hero-image' />
                        <div className='text-center hero-section-text'>
                            <h2 className='text1'>WEB DESIGN</h2>
                            <h5 className='text2'>User Experiences Through Responsive Design and Optimized Performance for a Seamless Web Presence.</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='position-relative'>
                        <img src="/image/banner-4.jpg" alt="banner-4" className='hero-image' />
                        <div className='text-center hero-section-text'>
                            <h2 className='text1'>WEB DESIGN</h2>
                            <h5 className='text2'>User Experiences Through Responsive Design and Optimized Performance for a Seamless Web Presence.</h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class=" hero-next-button"><img src="/image/prev.svg" alt="prev" className='hero-prev-next-icon' /></div>
            <div class=" hero-prev-button"><img src="/image/next.svg" alt="next" className='hero-prev-next-icon' /></div>
        </div >
    )
}
