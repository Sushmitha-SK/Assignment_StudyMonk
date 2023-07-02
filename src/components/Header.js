import React, { useEffect, useState } from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'
import '../styles/Utilities.css'
import '../styles/Animations.css'
import element from '../assets/element-img-1.png'
import landingImage from '../assets/landing.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="header-section">
                <Navbar />

                <div className="element-one">
                    <img src={element} alt="" />
                </div>

                <div className="banner">
                    <div className="container">
                        <div className="banner-content">
                            <div className="banner-left">
                                <div className="content-wrapper animated-content">
                                    <h1 className="banner-title">Digital Recruitment <br /> Solution</h1>
                                    <p className="text">HireLogic provides a seamless hiring experience </p>
                                    <a className="btn btn-secondary" onClick={() => navigate('/login')}>Hire Now</a>

                                </div>
                            </div>
                            <div className="banner-right d-flex align-items-center justify-content-end">
                                <img src={landingImage} alt='' className="animated-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header