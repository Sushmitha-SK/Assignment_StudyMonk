import React from 'react'
import '../styles/Footer.css'
import footerImage1 from '../assets/element-img-4.png'
import footerImage2 from '../assets/element-img-5.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-content text-center">
                        <p className="text-white copyright-text" style={{ marginLeft: '5%' }}>Design and Developed By | Sushmitha S</p>
                    </div>
                </div>
                <div className="footer-element-1">
                    <img src={footerImage1} alt />
                </div>
                <div className="footer-element-2">
                    <img src={footerImage2} alt />
                </div>
            </div>
        </>
    )
}

export default Footer