import React from 'react'
import Header from '../components/Header'
import '../styles/Home.css'
import '../styles/Utilities.css'

import image1 from '../assets/curve-shape-1.png'
import image2 from '../assets/service-icon-1.png'
import image3 from '../assets/service-icon-2.png'
import image4 from '../assets/service-icon-3.png'

import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <div className='page-wrapper'>
                <Header />

                {/* <div className='main'> */}
                <div className="sc-services">
                    <div className="services-shape">
                        <img src={image1} alt="" />
                    </div>
                    <div className="container-wrapper">
                        <div className="services-content">
                            <div className="title-box text-center">
                                <div className="content-wrapper">
                                    <h3 className="title-box-name">Our services</h3>
                                    <div className="title-separator mx-auto" />
                                    <p className="text title-box-text">We understand recruiting is a difficult and time-
                                        consuming process. Our service offers integrated
                                        solutions that combine the power Of video, tools,
                                        workflows, analytics, and feedback collaboration to
                                        optimize the hiring process.</p>
                                </div>
                            </div>
                            <div className="services-list">
                                <div className="services-item">
                                    <div className="item-icon">
                                        <img src={image2} alt="service icon" />
                                    </div>
                                    <h5 className="item-title fw-7">Search Candidate</h5>
                                    <p className="text">Choose your right candidate form thousands of candidates</p>
                                </div>
                                <div className="services-item">
                                    <div className="item-icon">
                                        <img src={image3} alt="service icon" />
                                    </div>
                                    <h5 className="item-title fw-7">Transparency</h5>
                                    <p className="text">We ensure transparency at all stages of recruitment</p>
                                </div>
                                <div className="services-item">
                                    <div className="item-icon">
                                        <img src={image4} alt="service icon" />
                                    </div>
                                    <h5 className="item-title fw-7">Responsibility</h5>
                                    <p className="text">Full responsibility for the whole recruitment process</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home