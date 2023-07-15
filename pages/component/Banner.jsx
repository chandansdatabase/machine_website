import React from 'react'
import Image from 'next/image'
export default function Banner() {
  return (
    <>
        <div className="banner-another" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="banner-text banner-ptb">
                            <span>MADAN TRADING COMPANY</span>
                            <h2 className="head-width text-capitalize">Indoor Air Quality(IAQ) management, Corrosion monitoring and molecular filtration. </h2>
                            <p>
                                Madan Trading company is an authorised distributor of Purafil Inc. with head office based in Haldia, west Bengal and branch offices currently at Kolkata and Delhi.
                            </p>
                            <div className="banner-btn">
                                <a href="#contact" className="default-btn">Contact Us</a>
                                <a href="#about" className="default-btn active">Know More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-img-3">
                            <img src="/images/home3.jpg" alt="Banner Images"/>
                            <div className="banner-img-shape">
                                <img src="/images/shape-home3.png" alt="Banner Shape"/>
                            </div>
                            <div className="banner-social-icon">
                                <a href="#" className="banner-icon-tag banner-icon1">
                                <img src="/fonts/youtube.svg" alt="Youtube"/>
                                </a>
                                <a href="#" className="banner-icon-tag banner-icon2">
                                <img src="/fonts/pinterest.svg" alt="Pinterest"/>
                                </a>
                                <a href="#" className="banner-icon-tag banner-icon3">
                                <img src="/fonts/twitter.svg" alt="Twitter"/>
                                </a>
                                <a href="#" className="banner-icon-tag banner-icon4">
                                <img src="/fonts/instagram.svg" alt="Instagram"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-shape">
                <div className="shape1">
                    <img src="/images/1.png" alt="shape"/>
                </div>
                <div className="shape2">
                    <img src="/images/2.png" alt="shape"/>
                </div>
                <div className="home-shape3">
                    <img src="/images/3_2.png" alt="shape"/>
                </div>
                <div className="home-shape4">
                    <img src="/images/4_2.png" alt="shape"/>
                </div>
                <div className="home-shape5">
                    <img src="/images/2.png" alt="shape"/>
                </div>
                <div className="home-shape6">
                    <img src="/images/6_1.png" alt="shape"/>
                </div>
                <div className="shape7">
                    <img src="/images/3_2.png" alt="shape"/>
                </div>
                <div className="home-shape8">
                    <img src="/images/5_1.png" alt="shape"/>
                </div>
            </div>
        </div>
    </>
  )
}
