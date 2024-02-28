import React, { useState } from 'react'
import ftAcercaDe from '../../../image/combos.jpg'
import ftDelivery from '../../../image/delivery.png'
import ftCambios from '../../../image/Camdevoluciones.jpg'
import ftPromos from '../../../image/promo.png'
import ftAtencion from '../../../image/horario.jpeg'

import './Sobre_nosotros.css'
import Card from 'react-bootstrap/Card';

const Sobre_nosotros = () => {
  return (
    <>
      <div className='AcercaDe'>


        <h3 className='title_acerca text-center'>   Cevichería "Encantos del Mar"</h3>

        <div className="row mt-5">
          <div className="col-md-4">
            {/* Imagen */}
            <Card.Img variant="top" src={ftAcercaDe} alt="Imagen" />
          </div>
          <div className="col-md-8">
            {/* Tarjeta 1 */}
            <Card>
              <Card.Body>
                <Card.Title>Misión</Card.Title>
                <Card.Text>
                  "En nuestra cevichería, nos comprometemos a ofrecer a nuestros clientes una experiencia
                  culinaria excepcional, resaltando la frescura y calidad de nuestros productos marinos.
                  Nos esforzamos por ser reconocidos como el destino preferido para los amantes del ceviche,
                  donde la autenticidad, la innovación y el servicio excepcional se fusionan para crear momentos
                  inolvidables para nuestros comensales".
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Tarjeta 2 */}
            <Card>
              <Card.Body>
                <Card.Title>Visión</Card.Title>
                <Card.Text>
                  "Nos visualizamos como líderes en la industria de la restauración, destacando por
                  nuestra excelencia en la preparación de ceviches y otros platos marinos, así como
                  por nuestro compromiso con la sostenibilidad y la responsabilidad social. Aspiramos
                  a expandir nuestra presencia, llevando el sabor único de nuestro ceviche a nuevas
                  comunidades y consolidando nuestra reputación como un referente de calidad y autenticidad
                  en la gastronomía marina".
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div>
          <h3 className='title_about text-center'>Nuestros servicios</h3>

          <div className="row">
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Servicio Delivery</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftDelivery} alt="" width={100} height={150} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Devoluciones</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftCambios} alt="" width={100} height={120} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">Promociones</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftPromos} alt="" width={130} height={400} />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cards">
                <div className="card-body">
                  <p className="card-text">12 horas de atención</p>
                  <img className='d-flex align-items-center d-block img-fluid' src={ftAtencion} alt="" width={100} height={70} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sobre_nosotros

