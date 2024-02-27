import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer__section'>
           <b >
                <a className='s' href="https://maps.app.goo.gl/Ra1CUQnb4Xz99Sac8" target="_blank" rel="noopener noreferrer">

                    <i className="fas fa-map-marker-alt"></i> AV. Los heroes 0434 Bar. San Sebastian, Cajamarca
                </a>
            </b>
           </div>
            <div className='footer__section'>
                <b>
                    <a className='s' href="https://www.facebook.com/profile.php?id=61555908626822" target="_blank" rel="noopener noreferrer">

                        <i className="fab fa-facebook"></i>

                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.tiktok.com/@kasiquestechnology?_t=8jCSK1rMpa1&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i> 
                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.instagram.com/kasiquestechnology/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> 
                    </a>
                </b>
            </div>

            <div className='footer__section'>
                <b>
                    <a href="tel:+51930702459"><i className="fas fa-phone"></i> 930 702 459</a>

                </b>
                <b>
                    <a href="https://api.whatsapp.com/send?phone=51930702459" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i> 930 702 459</a>
                </b>
            </div>
        </div>
    )
}

export default Footer