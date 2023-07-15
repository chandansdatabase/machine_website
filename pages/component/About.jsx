import React from 'react'
import Image from 'next/image'
export default function About() {
    return (
        <>
            <div className="about-area about-max ptb-70" id="about">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-xxl-6">
                            <div className="about-img about-ml">
                                <img src="/images/about.png" alt="About Images" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-xxl-6">
                            <div className="about-content about-width">
                                <span>About Us</span>
                                <h2>ISA-71.04-2013 - History</h2>
                                <p>
                                    Originally published in 1985 to classify airborne contaminants and biological influences that may affect electronic hardware.
                                </p>
                                <p>
                                    The classification system provides users and manufacturers with a means to specify the type and concentration of airborne contaminants.
                                </p>
                                <p>
                                    The 2013 edition contains new features and updates to address RoHS
                                </p>
                                <h2>Purafil.</h2>
                                <p>
                                    Purafil Inc. USA, are pioneers and world leaders in gas filtration and monitoring technology, since 1962. Purafil technology takes care of the indoor environment safety for electronics, machine, automation & humans from harmful gases like H2S, SOx, NOx, VOCs, Cl, NH3..etc. This is the best that is available in the world.
                                </p>
                                <p>
                                    We not only supply Purafil Corrosion Monitors, which are patented and most reliable devices in the world to detect gases which cause corrosion and thereby breakdown of any electronic components in Data center, DCS Room, Drives, Server Room, Motor Room, Compressor Room etc. In addition, Purafil have specialized patented chemical media that filters harmful gases from the environment that cause health hazards, corrosion & odors.
                                </p>
                                {/* <div className="about-btn">
                                <a href="#about" className="default-btn">Know More</a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
