/* eslint-disable @next/next/no-sync-scripts */
import { useState} from 'react'

export default function Footer() {
    const [redHeart, changeOfHeart] = useState(false)
  return (
    <>
    {/* <script src="/js/jquery.min.js"></script> */}
    <script src="/js/bootstrap.bundle.min.js"></script>
    {/* <script src="/js/contact-form-script.js"></script> */}
    {/* <script src="/js/custom.js"></script> */}
    {/* <script src="/js/email-decode.min.js"></script> */}
    {/* <script src="/js/form-validator.min.js"></script> */}
    {/* <script src="/js/jquery.ajaxchimp.min.js"></script> */}
    {/* <script src="/js/jquery.magnific-popup.min.js"></script> */}
    {/* <script src="/js/meanmenu.min.js"></script> */}
    {/* <script src="/js/owl.carousel.min.js"></script> */}
    {/* <script src="/js/wow.min.js"></script> */}
        <footer id="footer" className="footer-area-bg">
            {/* <div className="footer-area-top pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-single">
                                <div className="footer-single-content">
                                    <a href="index.html">
                                        <img src="images/footer-logo.png" alt="Logo"/>
                                    </a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur convallis arcu, id dapibus nulla tincidunt.</p>
                                </div>
                                <div className="newsletter-area">
                                    <form className="newsletter-form" data-toggle="validator">
                                        <input type="email" className="form-control" placeholder="Email" name="EMAIL" required autoComplete="off"/>
                                        <button className="subscribe-btn" type="submit">
                                        Subscribe
                                        </button>
                                        <div id="validator-newsletter" className="form-result"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-list ml-50">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Lorem Ipsum</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-list">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#services">Service</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#about">About Us</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#testimonial">Testimonial</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#blog">Blog</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-list ml-20">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="tel:+1123456789">+1 1234 56 789</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="tel:+19876543210">+1 9876 543 210</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="/cdn-cgi/l/email-protection#b6dfd8d0d9f6d4d9d8c5d798d5d9db"><span className="__cf_email__" data-cfemail="e48d8a828ba4868b8a9785ca878b89">[email protected]</span></a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        <a href="/cdn-cgi/l/email-protection#69010c050506290b06071a08470a0604"><span className="__cf_email__" data-cfemail="cda5a8a1a1a28dafa2a3beace3aea2a0">[email protected]</span></a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-chevron-right"></i>
                                        28/A Street, Kolkata 700012 West Bengal India
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="bottom-text text-center">
                                <p>
                                    Copyright @{new Date().getFullYear()} MTC Haldia.
                                     {/* Made with&nbsp;
                                    <span className="" style={{cursor:'pointer'}} onMouseOver={()=>changeOfHeart(true)} onMouseLeave={()=>changeOfHeart(false)}>{redHeart?<>❤️</>:<>🤍</>}</span>
                                    &nbsp;by&nbsp;
                                    <a className='text-white' href="https://www.justaquib.com/" target="_blank" rel="noreferrer">JustAquib</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
