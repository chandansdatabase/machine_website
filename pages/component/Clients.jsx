import React from 'react'
import Image from 'next/image'
const dataCenter = [
    {
        companyName: 'Nxtra Airtel',
        companyImgPath: 'https://www.nxtra.in/nxtra/images/logo.png',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'Reliance',
        companyImgPath: 'https://www.ril.com/App_Themes/RIL/images/generic/RIL_Logo.png',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'Amazon',
        companyImgPath: 'https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'Siemens',
        companyImgPath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABDCAMAAACRDGoDAAAAV1BMVEX///8AmpoAl5cAlJQAkZFytrZ4uLjq9PTf7e0mnp6w1NTJ4+MXm5u12Nh1ubny+PhRq6tfsLBBpaWdy8uBv7/X6emRxcXB3d1osrKm0NAAioqJwcHQ4+Mg68fUAAAC5UlEQVRYhe2W27qjIAxGMcGzVou14uj7P+ckAcRqv9mz7/mvOAQWkgMqlZSUlJSUlJSUlJT0G+2FAY3d+OipM9s8z+1ArSmPso1SpZXWEpYt0i+4+Tibtkq1sskqZpWVIVZva9RYP18790aEjAVQU6/VAIAltXKEQ/iiDbQ068A10u24mUVL0HT6Rkw1n17NWoZofR1A+JDl1EStNYJhLvKMcMGdJnJllZ79LbmuHKOLlo6LMvAQnM6QuSXbg2YQ77aySd0OQ9XYL1zzEOXNwXW7KfWETy48vekeuBlWJ+4IbDMPw7yawi3XZXT2JxemOOO5Gcj1lW7ryMU2mnoujJE78DE7P087GJ5//4aLDffecOUu0dRzxSeeW7E9RBu5LjTHwL+59YGCc+cbF/wHn78309ZHh/MvraqXr9ytrFiD48Ikp6S1C2boQuPgrtVhytwXm+rlw78cy6Mn1/7CsG7vXBeA+s/kHbXw9XBkURZ0g/6IZ3Smi+NiJdfRHdwjPPRTwqmsvTMy/b5zXXbgwXXTQ4UcFJ9cZ6rbwG21BEPgqh0gkF0IThDCoLnn0cgy/RGYctE9XSKWl+/1pnvguputZ/RcNbx0AFXurnvjSkn3Q1zRBhPPm45SUX1yL3lE3FkqhYXAJfLUnSoKax59xPzEDXmr9yt3uXJdrkAWuaRF3J7Fge7/uMo6L1Ft+5Ebznjm+vhSla9Vkl/Eu3DXG9fVZVxv3Ns9K7VB5O5+TgBGTdpsa79M/Pnks2tcdU5ZHgutewTUlXuYTpGrdOQaHN/N0kudo1NTJQBECStg3DWPfOjbyOVyAdud64VnrkRhqBsQQEhOmvSRVYZp8f215/f3Ke+vPKQDZykbDH++vb/CJVOXKl14GpU5nnnM2Wtva+iLwbycf+a8KIqci91aROW0WZkXuThpM0b+MgZLMy9uFWdTiq+WTF3cLLIdb91uzzpD+q3ZKpWUlJSUlJSUlJSU9Bv9BaVbJNP9dxlEAAAAAElFTkSuQmCC',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'Dell',
        companyImgPath: 'data:image/png;base64,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',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'IBM',
        companyImgPath: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAMAAACcjsm3AAAAclBMVEX///8ALon6/P1lh7NReqzo7vSPqMfk6fGxwdafss3Z4Ou/zN0AP48VW5yKpMUyZ6LQ2eYARZPy9fgAVJkAJ4YAAH0AI4UAH4TI0+JIdKkACX9GcKcAKodzkLkASJN+mb5bgK+outIANowAO44nYaAATpazpQw2AAABiklEQVRIie2Tf3ODIAyGkSoiKip2ra52+Kvf/ysuIVKtt91tu/3pc1fyBhJNE2Hs4OCvRJ5Vme0Bd47ZntDxe+A439hbsNB1fcRYcUZ9ubuwjw6dq9i8kXtWxbnh68E2apNnwhOhmVcOyyyJvoSopCedbhKtFoDWA/NKo9Us0eRjsBB01Ly2Rym1PAUUlqPIcrSqpP1n0Iods442kzEL8AX1lJ2hgarLANi5jyim3w7sW8Rc5LFTci4W5ggrzouiBY3bYIt9YinlQJNV0uNKN4OUDflpCss+UaVpSolx6nEVGBTK+aaBZZ+o6/xBpQ51vlC7Uh95nTS49+AtrP/TGcBO1biMAxTOOK+qAMcxVpNmp6waJSuqKtsnxmVZ0lcYgcJ/W5LlYGLcbDhToF+yjEgIybxyCDY4CwUkCbTFeWKTa26ho7WsCFfaO7PODjDnG2TfnSdhBK/f649pBrnc868u8iWE8cx4ka8WYnr41R1d5DQefGsWoqeKaaiRk/h4/gzDVv+t0oMD5BPTARq2psPRRAAAAABJRU5ErkJggg==',
        style: { objectFit: "scale-down" }
    }
]
const cra = [
    {
        companyName: 'GAIL',
        companyImgPath: 'https://www.gailonline.com/images/gaill.png',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'IOCL',
        companyImgPath: 'https://iocl.com/assets/images/logo.gif',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'HPCL',
        companyImgPath: 'https://www.hindustanpetroleum.com/images/logo.png',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'BPCL',
        companyImgPath: 'https://www.bharatpetroleum.in/images/bpcl_logo_1.jpg',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: 'Finolex Industries',
        companyImgPath: 'data:image/png;base64,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',
        style: { objectFit: "scale-down" }
    },
    {
        companyName: '& Many More',
        companyImgPath: 'https://www.nopaperforms.com/wp-content/uploads/2021/05/Customers-min.png',
        style: { objectFit: "scale-down" }
    }
]

export default function Clients() {
    return (
        <>
            <div className="member-area pb-70" id="clients">
                <div className="container">
                    <div className="section-title text-center">
                        <span>Our Clients</span>
                        <h2>We are all over</h2>
                        <p>
                            Checkout All our precious clietns
                        </p>
                    </div>
                    <div className="row pt-45">
                        {
                            dataCenter.map((data, dataKey) => (
                                <div className="col-lg-2 col-sm-6" key={data.companyName}>
                                    <div className="member-card" style={{ borderRadius: "10px 10px 0 0" }}>
                                        <div className="member-img">
                                            <a href="#members">
                                                <img height={"240px"} style={data.style} src={data.companyImgPath} alt="Member Images" />
                                            </a>
                                            <div className="member-content">
                                                <a href="#members">
                                                    <h3>{data.companyName}</h3>
                                                </a>
                                                <span>Data Center</span>
                                                {/* <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        {/* <div className="col-lg-2 col-sm-6">
                        <div className="member-card">
                            <div className="member-img">
                                <a href="#members">
                                    <img height={"240px"} style={{objectFit:"none"}} src="/https://www.ril.com/App_Themes/RIL/images/generic/RIL_Logo.png" alt="Member Images"/>
                                </a>
                                <div className="member-content">
                                    <a href="#members">
                                        <h3>Reliance</h3>
                                    </a>
                                    <span>Data Center</span>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="member-card">
                            <div className="member-img">
                                <a href="#members">
                                    <img src="/images/3.jpg" alt="Member Images"/>
                                </a>
                                <div className="member-content">
                                    <a href="#members">
                                        <h3>Amazon</h3>
                                    </a>
                                    <span>Data Center</span>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="member-card">
                            <div className="member-img">
                                <a href="#members">
                                <img src="/images/4.jpg" alt="Member Images"/>
                                </a>
                                <div className="member-content">
                                    <a href="#members">
                                        <h3>Siemens</h3>
                                    </a>
                                    <span>Data Center</span>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="member-card">
                            <div className="member-img">
                                <a href="#members">
                                <img src="/images/4.jpg" alt="Member Images"/>
                                </a>
                                <div className="member-content">
                                    <a href="#members">
                                        <h3>Dell</h3>
                                    </a>
                                    <span>Data Center</span>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6">
                        <div className="member-card">
                            <div className="member-img">
                                <a href="#members">
                                <img src="/images/4.jpg" alt="Member Images"/>
                                </a>
                                <div className="member-content">
                                    <a href="#members">
                                        <h3>IBM</h3>
                                    </a>
                                    <span>Data Center</span>
                                    <div className="social-icon">
                                        <ul>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <div className="row pt-45">
                        {
                            cra.map((data, dataKey) => (
                                <div className="col-lg-2 col-sm-6" key={data.companyName}>
                                    <div className="member-card" style={{ borderRadius: "10px 10px 0 0" }}>
                                        <div className="member-img">
                                            <a href="#members">
                                                <img height={"240px"} style={data.style} src={data.companyImgPath} alt="Member Images" />
                                            </a>
                                            <div className="member-content">
                                                <a href="#members">
                                                    <h3>{data.companyName}</h3>
                                                </a>
                                                <span>Control Room Application</span>
                                                {/* <div className="social-icon">
                                        <ul>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* <div className="member-shape-2">
                <img src="/images/member-shape-2.png" alt="Members Images"/>
            </div> */}
            </div>
        </>
    )
}
