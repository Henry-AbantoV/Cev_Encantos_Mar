import React, { useState } from 'react'
import ftAcercaDe from '../../../image/img_acerca_De.jpg'
import ftDelivery from '../../../image/delivery.png'
import ftCambios from '../../../image/Camdevoluciones.jpg'
import ftPromos from '../../../image/promo.png'
import ftAtencion from '../../../image/horario.jpeg'
import ftmApple from '../../../image/imgmarcas/aple.png'
import ftmsamsung from '../../../image/imgmarcas/samsung.png'
import ftmsoni from '../../../image/imgmarcas/soni.png'
import ftmewwto from '../../../image/imgmarcas/ewwtoo.png'
import ftmjbl from '../../../image/imgmarcas/jbll.png'
import ftmlevono from '../../../image/imgmarcas/lenovoo.png'
import ftmwireles from '../../../image/imgmarcas/wireles.png'
import ftmromax from '../../../image/imgmarcas/romax.png'

const Sobre_nosotros = () => {
  return (
    <>
      <div>
        <h3 className='title_acerca text-center'> Kasique´s Technology S.A</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <img className='img-fluid pb-2' src={ftAcercaDe} alt="img acerca de" width={600} />
         
          <div className="card text-center d-flex flex-column " >
          <div className="card-body">
            <h1 className="card-title">Misión:</h1>
            <p className="card-text">Reinventamos la experiencia digital, ofreciendo contenido inspirador y soluciones tecnológicas avanzadas para crear una comunidad conectada y enriquecedora.</p>
          </div>
        </div>

        <div className="card text-center " >
          <div className="card-body">
            <h1 className="card-title">Visión:</h1>
            <p className="card-text">Ser reconocidos como una empresa líder en la venta y suministro de productos tecnológicos, ofreciendo soluciones integrales y con garantía de calidad.</p>
          </div>
        </div>
        </div>

      </div>

      <div>
        <h3 className='title_about text-center'>Nuestros servicios</h3>

        <div className="row">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Servicio Delivery</p>
                <img  className='d-flex align-items-center d-block img-fluid' src={ftDelivery} alt="" width={100} height={150} />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Devoluciones</p>
                <img  className='d-flex align-items-center d-block img-fluid' src={ftCambios} alt="" width={100} height={120} />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Promociones</p>
                <img  className='d-flex align-items-center d-block img-fluid' src={ftPromos} alt="" width={130} height={400} />
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <p className="card-text">12 horas de atención</p>
                <img  className='d-flex align-items-center d-block img-fluid' src={ftAtencion} alt="" width={100} height={70} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-center'>Nuestras marcas</h3>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-3"><img src={ftmApple}alt="" width={150} /></div>
          <div className="col-sm-3"><img src={ftmsamsung} alt="" width={150}/></div>
          <div className="col-sm-3"><img src={ftmsoni} alt=""  width={150}/></div>
          <div className="col-sm-3"><img src={ftmromax} alt=""  width={150}/></div>
          <div className="col-sm-3"><img src={ftmlevono} alt=""  width={150}/></div>
          <div className="col-sm-3"><img src={ftmjbl} alt=""  width={150}/></div>
          <div className="col-sm-3"><img src={ftmewwto} alt=""  width={150}/></div>
          <div className="col-sm-3"><img src={ftmwireles} alt=""  width={150}/></div>
        </div>
      </div>

    </>
  )
}

export default Sobre_nosotros

