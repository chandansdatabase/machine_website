import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="client-area pb-70" id="contact">
                <div className="container-fluid p-0">
                    <div className="section-title text-center">
                        <span>Contact</span>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h3>Address</h3>
                                <p style={{ paddingTop: 0 }}>
                                    Madan Trading Company
                                    <br />
                                    E Block, Durgachak Haldia-721602
                                </p>
                            </div>
                            <div className='col-md-4'>
                                <h3>Email</h3>
                                <p style={{ paddingTop: 0 }}>
                                    <a style={{ color: "#75799b" }} href="mailto:sales@mtchaldia.com" target="_blank" rel="noreferrer">sales@mtchaldia.com</a>
                                    <br />
                                    <a style={{ color: "#75799b" }} href="mailto:suraj.g@mtchaldia.com" target="_blank" rel="noreferrer">suraj.g@mtchaldia.com</a>
                                </p>
                            </div>
                            <div className='col-md-4'>
                                <h3>Mobile</h3>
                                <p style={{ paddingTop: 0 }}>
                                    <a style={{ color: "#75799b" }} href="tel:+91-94340-42550" target="_blank" rel="noreferrer">+91 94340 42550</a>
                                    <br />
                                    <a style={{ color: "#75799b" }} href="tel:+91-98362-30127" target="_blank" rel="noreferrer">+91 98362 30127</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
