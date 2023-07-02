import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import '../styles/Utilities.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [status, setStatus] = useState(false)

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');

        if (loginStatus === true) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }, [localStorage.getItem('isLoggedIn')])


    const navigate = useNavigate();
    return (
        <nav class="navbar navbar-expand-lg">
            <div className="container navbarcontainer">
                <div className="navbar-content d-flex justify-content-between align-items-center">
                    <div className="brand-and-toggler d-flex align-items-center justify-content-between">
                        <a className="navbar-brand d-flex align-items-center" onClick={() => navigate('/')} >
                            <span className="brand-shape d-inline-block">&nbsp;</span>
                            <span className="brand-text fw-7">HireLogic</span>
                        </a>
                        <button type="button" className="d-none navbar-show-btn">
                            <i className="fas fa-bars" />
                        </button>
                    </div>
                    <div className="navbar-box ">
                        <button type="button" className="navbar-hide-btn">
                            <i className="fas fa-times" />
                        </button>

                        <ul className="navbar-nav custom-navbar-nav">
                            <li className="nav-item " style={{ color: '#000' }}>
                                <a className="nav-link text-nowrap" onClick={() => navigate('/')}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-nowrap" onClick={() => navigate('/login')}>
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar