import React, { useState } from 'react'
import './ComprarTodo.css'
import fotoProduct from '../../../../../image/addProduct.png'

const ComprarTodo = ({ data, inputValue }) => {
 
  if (Array.isArray(data)) {
    const filteredProducts = data && data?.filter(product =>
      product.nombre.toLowerCase().includes(inputValue.toLowerCase()));

    return (
      filteredProducts.map((data, index )=> (
        <article key={index} className='producto_color'>
          <div className="producto__tilte">
            <h3 style={{ fontSize: '20px', fontWeight: 900 }}>{data?.nombre}</h3>
          </div>

          <div className='container_producto-info'>
            <div className='producto__image'>
              {
                data?.imagen ?
                  <img src={data?.imagen} alt={data?.nombre} />
                  :
                  <img src={fotoProduct} alt={data?.nombre} />
              }
            </div>

            <div className='producto__info'>

              <div className="producto__info-datoss">
                <b>Precio antes: </b>
                <b>s/ {data?.precio} </b>
              </div>

              <div className="producto__info-datoss">
                <b>Precio: </b>
                <b>s/ {data?.descuento} </b>
              </div>

            </div>
          </div>



        </article>
      ))
    )



  } else {
    return (

      <article className='producto_color'>
        <div className="producto__tilte">
          <h3 style={{ fontSize: '20px', fontWeight: 900 }}>{data?.nombre}</h3>
        </div>

        <div className='container_producto-info'>
          <div className='producto__image'>
            {
              data?.imagen ?
                <img src={data?.imagen} alt={data?.nombre} />
                :
                <img src={fotoProduct} alt={data?.nombre} />
            }
          </div>

          <div className='producto__info'>

            <div className="producto__info-datoss">
              <b>Precio antes: </b>
              <b>s/ {data?.precio} </b>
            </div>

            <div className="producto__info-datoss">
              <b>Precio: </b>
              <b>s/ {data?.descuento} </b>
            </div>

          </div>
        </div>



      </article>
    )
  }

}

export default ComprarTodo