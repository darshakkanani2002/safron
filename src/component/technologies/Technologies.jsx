import React, { useState } from 'react'

export default function Technologies() {
    const [activeTab, setActiveTab] = useState('Android');
    const handleTabClick = (tabactive) => {
        setActiveTab(tabactive);
    };
    return (
        <div>
            <div className='text-center py-5 technologis-back'>
                <h2 className='fw-semibold'>Technologies</h2>
                <div className='home-box-div'></div>
            </div>
            <div className='container m-auto'>
                <div className='row'>
                    <div className='col-12 my-4'>
                        <h2 className='techno-heading'>{activeTab}</h2>
                    </div>

                    <div className='col-lg-3'>
                        <div className='techno-name px-3 py-3'>
                            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <div class="nav-link techno-link py-3 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" onClick={() => handleTabClick('Android')}> <span><i class="fa-solid fa-angles-right"></i></span> Android</div>
                                <div class="nav-link techno-link py-3" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => handleTabClick('Unity')}><span><i class="fa-solid fa-angles-right"></i></span> Unity</div>
                                <div class="nav-link techno-link py-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" onClick={() => handleTabClick('React Native')}><span><i class="fa-solid fa-angles-right"></i></span> React Native</div>
                                <div class="nav-link techno-link py-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => handleTabClick('Anguler.js')}><span><i class="fa-solid fa-angles-right"></i></span> Anguler.js</div>
                                <div class="nav-link techno-link py-3" id="v-pills-react-tab" data-bs-toggle="pill" data-bs-target="#v-pills-react" type="button" role="tab" aria-controls="v-pills-react" aria-selected="false" onClick={() => handleTabClick('React.js')}><span><i class="fa-solid fa-angles-right"></i></span> React.js</div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-9'>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                <div className='mb-5'>
                                    <img src="/image/tech-anroid.png" alt="tech-anroid" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>We are an android development company that guarantees scalability with expertise in everything related to what is android app development.</p>
                                    <p>
                                        We provide highly-professional and result-driven mobile app development to our clients. Our team of experts design such mobile apps that enhance visibility and encourage the extensive approach of customers for small or large scale business.
                                    </p>
                                    <p>
                                        We have a team of young & talented professionals who designs and develops the most reliable applications as per the customer needs.
                                    </p>
                                    <p>
                                        Our Android app development services help your enterprise reach widely across the target audience.
                                    </p>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <div className='mb-5'>
                                    <img src="/image/tech_ios.jpg" alt="tech_ios" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>We have experience building, deploying iOS app since its origin. Our iOS developers keep up to date with the latest framework and guidelines about iOS so that we can build the best App for you.</p>
                                    <p>
                                        We use best practices to optimize application performance, data security and user experience, ensuring all components are brought together.
                                    </p>
                                    <p>
                                        Our deep expertise in developing iOS apps to build a beautiful, engaging, and consistent app for your industries and Deliver value where it's needed.
                                    </p>
                                    {/* <p>
                                        Our Android app development services help your enterprise reach widely across the target audience.
                                    </p> */}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                                <div className='mb-5'>
                                    <img src="/image/tech_react_native.jpg" alt="tech_react_native" className='img-fluid w-100' />
                                </div>

                                <div className='techno-description p-4'>
                                    <p>React Native cross- platform development allows creating a single app for both Android and iOS. You can release both platforms simultaneously, serving the large user base. As a result, you receive a native app for both platforms.</p>
                                    <p>
                                        Our experts are in close cooperation and capable of delivering end to end software solutions that best suit your business model and result in success.
                                    </p>
                                    <p>
                                        With React Native mobile development, it is easy to sort out bugs for all OS—it is only needed to refresh the app on a simulator and get instant feedback for changes.
                                    </p>
                                    {/* <p>
                                        Our Android app development services help your enterprise reach widely across the target audience.
                                    </p> */}
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                                <div className='mb-5'>
                                    <img src="/image/tech_angular.png" alt="tech_angular" className='img-fluid w-100' />
                                </div>
                                <div className='techno-description p-4'>
                                    <p>Angular software is an ideal tool for crafting apps with complex logic.</p>
                                    <p>
                                        Angular software is used by default with Typescript, which minimizes errors at the stage of writing code. We believe that Angular web development companies must prioritize talented Angular developers with adherence to quality code and on-time delivery.
                                    </p>
                                    <p>
                                        To ensure the best fit for your technological needs, we perform a rigorous screening process and offer an Angular professional that meets unique requirements and tech expertise.
                                    </p>
                                    {/* <p>
                                        Our Android app development services help your enterprise reach widely across the target audience.
                                    </p> */}
                                </div>
                            </div>

                            <div class="tab-pane fade" id="v-pills-react" role="tabpanel" aria-labelledby="v-pills-react-tab" tabindex="0">
                                <div className='mb-5'>
                                    <img src="/image/tech_reactjs.png" alt="tech_reactjs" className='img-fluid w-100' />
                                </div>
                                <div className='techno-description p-4'>
                                    <p>React JS also pairs nicely with React Native. Not only do both use JavaScript, but React Native also uses React JS for base abstraction - leading to two very coherent solutions.</p>
                                    <p>
                                        React.js is a dominating frontend JavaScript technology, and it's getting more and more popular.
                                    </p>
                                    <p>
                                        We are a team of proficient and experienced ReactJS developers who are capable of building resilient and client-centric solutions for our clients.
                                    </p>
                                    {/* <p>
                                        Our Android app development services help your enterprise reach widely across the target audience.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
