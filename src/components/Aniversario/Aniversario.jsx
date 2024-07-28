import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aniversario.css';

import ftAniversario from '../../image/aniversario.jpg';
import ftCumple from '../../image/ftCumple.jpg';
import aniversarioE from '../../image/aniversarioE.mp4'; 
import aniversarioEWebm from '../../image/aniversarioE.webm';


const Aniversario = () => {
  return (
    <div className="form__container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ftAniversario} className="d-block w-100 img-fluid custom-img" alt="Slide 1" />
            
          </div>

          <div className="carousel-item">
            <video className="d-block w-100 custom-video" controls>
              <source src={aniversarioE} type="video/mp4" />
              <source src={aniversarioEWebm} type="video/webm" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <p className="gradient-text">Disfruta de nuestro video especial</p>
              <p className='color-text'>Aniversario</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={ftCumple} className="d-block w-100 img-fluid custom-img" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
            <h5 className="gradient-text">Feliz cumpleaños! Ven y celebra con nosotros.</h5>
            <p className="gradient-text">Descuentos y ofertas especiales.</p>
            </div>
          </div>
       
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Aniversario;
