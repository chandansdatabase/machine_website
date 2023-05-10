import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="navbar-area">
            <div className="mobile-nav">
                <a href="#" className="logo">
                    <img src="images/logo.png" className="logo-one" alt="Logo"/>
                    <img src="images/sticky-logo.png" className="logo-two" alt="Logo"/>
                </a>
            </div>

            <div className="main-nav top-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light ">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo"/>
                        </a>
                        <a className="navbar-brand-sticky" href="#">
                            <img src="images/sticky-logo.png" alt="Logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu d-flex justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">
                                    Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link">
                                    Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">
                                    About
                                    </a>
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#testimonial" className="nav-link">
                                    Testimonial
                                    </a>
                                </li> */}
                                <li className="nav-item">
                                    <a href="#clients" className="nav-link">
                                    Clients
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">
                                    Contact
                                    </a>
                                </li>
                            </ul>
                            {/* <div className="other-side">
                                <div className="modal-menu">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#myModal2">
                                        <i className="flaticon-menu"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </>
  )
}
