import React, { useEffect } from 'react'
import Iframe from 'react-iframe'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <div>
            <div className='text-center py-5 technologis-back'>
                <h2 className='fw-semibold'>Contact <span style={{ color: '#56c6c9' }}> Us</span></h2>
                <div className='home-box-div'></div>
            </div>

            <div className="container">
                <div className='row mt-5'>
                    <div className='col-lg-4 mt-4' data-aos="zoom-in" data-aos-duration="2000">
                        <div className='contact-div px-3 py-5'>
                            <div className='text-center'>
                                <i class="fa-solid fa-location-dot contact-icon"></i>
                            </div>
                            <div className='text-center contact-info'>
                                <h2 className='fw-semibold pt-3'>WE ARE HERE</h2>
                                <a href="#">B-105, Shivalik Plaza Near Kapodra Bridge Uttran, surat, Gujarat</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-4' data-aos="zoom-in" data-aos-duration="2000">
                        <div className='contact-div px-3 py-5'>
                            <div className='text-center'>
                                <i class="fa-solid fa-phone contact-icon"></i>
                            </div>
                            <div className='text-center contact-info'>
                                <h2 className='fw-semibold pt-3'>CALL US</h2>
                                <a href="https://wa.me/7984351224"><strong>Contact No :-</strong> 7984351224</a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 mt-4' data-aos="zoom-in" data-aos-duration="2000">
                        <div className='contact-div px-3 py-5'>
                            <div className='text-center'>
                                <i class="fa-solid fa-envelope contact-icon"></i>
                            </div>
                            <div className='text-center contact-info'>
                                <h2 className='fw-semibold pt-3'>Mail US</h2>
                                <a href="mailto:info.safronh@gmail.com">info.safron@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid my-5'>
                <div className='row'>
                    <div className='col-12'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.9489233489095!2d72.86556666806453!3d21.228101140646327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4ff6ef74b1%3A0xf95e4148f01e2b6b!2sShivalik%20Plaza!5e0!3m2!1sen!2sin!4v1721710046446!5m2!1sen!2sin" width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
