import React, { useState } from 'react'

export default function Services() {
    const [activeTab, setActiveTab] = useState('Android');
    const handleTabClick = (tabactive) => {
        setActiveTab(tabactive);
    };
    return (
        <div>
            <div className='text-center py-5 technologis-back'>
                <h2 className='fw-semibold'>Services</h2>
                <div className='home-box-div'></div>
            </div>

            <div className='container m-auto'>
                <div className='row'>
                    <div className='col-12 my-4'>
                        <h2 className='techno-heading'>{activeTab}</h2>
                    </div>

                    <div className='col-lg-4 mb-lg-0 mb-4'>
                        <div className='techno-name px-3 py-3'>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <div className="nav-link techno-link py-3 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => handleTabClick('Web Development')}> <span><i className="fa-solid fa-angles-right"></i></span> Web Development</div>
                                <div className="nav-link techno-link py-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => handleTabClick('Web Designing')}><span><i className="fa-solid fa-angles-right"></i></span> Web Designing</div>
                                <div className="nav-link techno-link py-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => handleTabClick('Mobile Application')}><span><i className="fa-solid fa-angles-right"></i></span> Mobile Application</div>
                                <div className="nav-link techno-link py-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => handleTabClick('SEO')}><span><i className="fa-solid fa-angles-right"></i></span> SEO</div>
                                <div className="nav-link techno-link py-3" id="v-pills-react-tab" data-bs-toggle="pill" data-bs-target="#v-pills-react" type="button" role="tab" aria-controls="v-pills-react" aria-selected="false" onClick={() => handleTabClick('Digital Marketing')}><span><i className="fa-solid fa-angles-right"></i></span> Digital Marketing</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-8'>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                                <div className='mb-5'>
                                    <img src="/image/service-web-devlopment.jpg" alt="service-web-devlopment" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>Your one-stop-shop for all types of Web Development. We have extensive experience with several types of website development like Business, E-commerce, etc... Hands-on experience in all 3rd-party API integration.</p>
                                    <p>
                                        We are here to give your business a great looking online presence.
                                    </p>
                                    <p>
                                        We are a team with an expertise a creative solutions and stunning results.Your one-stop-shop for all types of Web Development. We have extensive experience with several types of website development like Business, E-commerce, etc...Hands-on experience in all 3rd-party API integration.
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                <div className='mb-5'>
                                    <img src="/image/service-webdesign-img.jpg" alt="service-webdesign-img" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>We Have a very good skills in graphic designing as well including logo designing, banner designing, branding, etc...</p>
                                    <p>
                                        Strengthening your web connections as Design is the intelligence made visible. Think Creative, Do Creative. Come to us and see your imagination turning into an innovation.
                                    </p>
                                    <p>
                                        We have a team of artistic and professional designers, Provides attractive and responsive(all devices) design Have a very good skills in graphic designing as well including logo designing, banner designing, branding, etc...
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                <div className='mb-5'>
                                    <img src="/image/service-mobile-img.jpg" alt="service-mobile-img" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>Designing and Developing an Android & iOS applications from scratch.</p>
                                    <p>
                                        Customization as well as ongoing maintenance, troubleshooting, enhancement of an applications. WE DO NOT JUST BUILD APPS. WE CRAFT TOP-NOTCH MOBILE EXPERIENCES.
                                    </p>
                                    <p>
                                        WE CRAFT TOP-NOTCH MOBILE EXPERIENCES. Izonnet Web Solution team is having years of experience and expertise in mobile application development.
                                    </p>
                                    <p>
                                        Do you wish to “Go Mobile” to expand your business? Being the mobile app development company, Izonnet web solution offers custom mobile apps development services for Android & iPhone.Designing and Developing an Android & iOS applications from scratch.
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                                <div className='mb-5'>
                                    <img src="/image/service-seo.jpg" alt="service-seo" className='img-fluid w-100' />
                                </div>
                                <div className='techno-description p-4'>
                                    <p>In today’s Digital World, every target customer finds solution of their problem on internet.The core practice of our professional SEO services is to get your website appear in top list to the right prospect. That’s the simple logic how your business grows online using our professional SEO Services!!</p>
                                    <p>
                                        SEO is stands for Search Engine Optimization. Professional SEO Services is one of the indispensable technique of Digital Marketing. In today’s Digital World, every target customer finds solution of their problem on internet.
                                    </p>
                                    <p>
                                        The core practice of our professional SEO services is to get your website appear in top list to the right prospect. That’s the simple logic how your business grows online using our professional SEO Services!! Website SEO is an on-going and time taking process. To achieve expected result it may take 3 to 6 months of timeframe.
                                    </p>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="v-pills-react" role="tabpanel" aria-labelledby="v-pills-react-tab" tabIndex="0">
                                <div className='mb-5'>
                                    <img src="/image/service-digital-img.jpg" alt="service-digital-img" className='img-fluid w-100' />
                                </div>
                                <div className='techno-description p-4'>
                                    <p>While ensuring your customers stay with you and tell the world the tales of your business’s awesomeness transforming our custom-made business strategies into real time success.</p>
                                    <p>
                                        Developing a long-term and reliable marketing strategy that will live a longer life, while ensuring your customers stay with you and tell the world the tales of your business’s awesomeness transforming our custom-made business strategies into real time success.
                                    </p>
                                    <p>
                                        Digital marketing is a multifaceted strategy aimed to target, reach out to, and build relationships with customers online, across a broad range of channels, ultimately getting them to make a purchase and more purchases in the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
