import React from 'react'

export default function Faq() {
    return (
        <div>
            <div className='text-center py-5 technologis-back'>
                <h2 className='fw-semibold'>Frequently Asked <span style={{ color: '#56c6c9' }}> Questions</span></h2>
                <div className='home-box-div'></div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-12 mt-5'>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item border rounded-0 my-3">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. Why Choose Aadhya Infotech?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Aadhya Infotech is a leading IT company provides services in Web Applications Development, Mobile Application Development, E-commerce solution development, Game Development, Website Design and Development with a vision to fully satisfy our valuable clients.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border my-3">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. Will my website design be search-engine friendly?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        All our websites are created with search engines in mind, and all designs are compliant with search engine guidelines. It is a good idea for your website to be re-evaluated from time to time as search engines do alter their rules and algorithms. This will ensure that your site is up to date and compliant with new rules.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border my-3 rounded-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        3. Can you provide Web design and hosting services?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Yes, We are a one-stop shop. You do not have to worry about who to call if you have problems. We can take care of everything from registering your domain name and designing your site to building it and maintaining it for years to come.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border my-3 rounded-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="false" aria-controls="collapseFoure">
                                        4. What Services do you offer?
                                    </button>
                                </h2>
                                <div id="collapseFoure" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Here is a list of our main services:</p>
                                        <ul>
                                            <li>Web Application Development</li>
                                            <li>Web Design</li>
                                            <li>Mobile Application Development</li>
                                            <li>Game Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item border rounded-0">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        5. Can you help me with Online Marketing?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        100% Yes! We don't just build your the website for you. We do much more than building the website. Our main goal is to help you succeed online. We are in for the long haul, our team is committed to your success and we offer many online marking packages including, Local SEO and Paid Per Click Advertising (Adwords Account Step) including search network and display network.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
