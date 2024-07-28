import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='footer__section'>
           <b >
                <a className='s' href="https://maps.app.goo.gl/qQ11tWAjVQW6Lpb47" target="_blank" rel="noopener noreferrer">

                    <i className="fas fa-map-marker-alt"></i> AV. San Martin cdra 11
                </a>
            </b>
           </div>
            <div className='footer__section'>
                <b>
                    <a className='s' href="https://www.facebook.com/profile.php?id=100069064286027&sk=about&locale=es_LA" target="_blank" rel="noopener noreferrer">

                        <i className="fab fa-facebook"></i>

                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.tiktok.com/@cevicheriaencantosdelmar" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i> 
                    </a>
                </b>
                <b>
                    <a className='s' href="https://www.instagram.com/cevicheria_encantos_del_mar/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i> 
                    </a>
                </b>
            </div>

            <div className='footer__section'>
                <b>
                    <a href="tel:+51924282218"><i className="fas fa-phone"></i> 924 282 218</a>

                </b>
                <b>
                    <a href="https://api.whatsapp.com/send?phone=51924282218" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i> 924 282 218</a>
                </b>
            </div>
        </div>
    )
}

export default Footer