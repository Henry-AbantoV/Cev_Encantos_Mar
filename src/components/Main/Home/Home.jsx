import React, { useEffect } from 'react'
import './Home.css'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import { useState } from 'react'
import { Whatsapp } from 'react-bootstrap-icons';



import useGet from '../../../Hooks/useGet'



const Home = () => {

  const [headerLink, setHeaderLink] = useState('Sin_categoria');

  const { data, getData } = useGet('https://65c2e3fdf7e6ea59682bc40a.mockapi.io/Producto')

  useEffect(() => {
    getData()
  }, [])

  const [lapis, setLapis] = useState()

  const Sin_categoria = () => {
    setHeaderLink('Sin_categoria')
  }

  const Adaptadores = () => {
    setHeaderLink('Adaptadores')
  }

  const Audifonos_inalambricos = () => {
    setHeaderLink('Audifonos_inalambricos')
  }

  const Cables = () => {
    setHeaderLink('Cables')
  }

  const Calculadoras = () => {
    setHeaderLink('Calculadoras')
  }

  const mouse = () => {
    setHeaderLink('mouse')
  }


  const Tomacorrientes_Estabilizadoresrtas = () => {
    setHeaderLink('Tomacorrientes_Estabilizadoresrtas')
  }


  const Bombillas = () => {
    setHeaderLink('Bombillas')
  }

  const Microfono = () => {
    setHeaderLink('Microfono')
  }

  const [inputValue, setInputValue] = useState('');


  // Controlador de eventos para manejar los cambios en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado con el valor del input
  };


  return (
    <div className='home'>

      <b>
        <a href="https://api.whatsapp.com/send?phone=51930702459&text=https://kasiques-technology.netlify.app/%0AHola,%20estoy%20interesado%20deseo%20obtener%20más%20información%20" target="_blank" rel="noopener noreferrer">
          <div className='contactanos_flotante'><Whatsapp color="rgb(86, 253, 108)" size={24} />Contactanos</div> </a>
      </b>

      <div className='nav_header_home'>
        <ul className='ul_header_home'>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Sin_categoria' ? 'blue' : 'black'}` }} onClick={Sin_categoria} className='li_header_home'>Sin categoria</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Adaptadores' ? 'blue' : 'black'}` }} onClick={Adaptadores} className='li_header_home'>Adaptadores</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Audifonos_inalambricos' ? 'blue' : 'black'}` }} onClick={Audifonos_inalambricos} className='li_header_home'>Audifonos inalambricos</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Microfono' ? 'blue' : 'black'}` }} onClick={Microfono} className='li_header_home'>Microfono</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Cables' ? 'blue' : 'black'}` }} onClick={Cables} className='li_header_home'>Cables</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Calculadoras' ? 'blue' : 'black'}` }} onClick={Calculadoras} className='li_header_home'>Calculadoras</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Tomacorrientes_Estabilizadoresrtas' ? 'blue' : 'black'}` }} onClick={Tomacorrientes_Estabilizadoresrtas} className='li_header_home'>Tomacorrientes/Estabilizadores</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Bombillas' ? 'blue' : 'black'}` }} onClick={Bombillas} className='li_header_home'>Bombillas</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'mouse' ? 'blue' : 'black'}` }} onClick={mouse} className='li_header_home'>Mouse</li>
        </ul>
      </div>

      <div className='home__buscador'>
        <input
          type="text"
          value={inputValue} // El valor del input se toma del estado
          onChange={handleInputChange} // Maneja los cambios en el input
          placeholder='Buscar...'
        />

      </div>



      <div className='container_page' >
        {

          inputValue.length > 0 ?
            <div className='container_categorias'>
              {

                <ComprarTodo

                  data={data}
                  inputValue={inputValue}
                />


              }
            </div>
            :

            headerLink === 'Sin_categoria' ?
              <div className='container_categorias'>
                {
                  data && data.map(data => (
                    <ComprarTodo
                      key={data?.id}
                      data={data}
                    />

                  ))
                }
              </div>
              :
              headerLink === "Adaptadores" ?
                <div className='container_categorias'>
                  {
                    data && data.map(data => (
                      data.categoria === 'Adaptadores' ?
                        <ComprarTodo
                          key={data?.id}
                          data={data}
                        />
                        :
                        null

                    ))
                  }
                </div>
                :
                headerLink === "Audifonos_inalambricos" ?
                  <div className='container_categorias'>
                    {
                      data && data.map(data => (
                        data.categoria === 'Audifonos_inalambricos' ?
                          <ComprarTodo
                            key={data?.id}
                            data={data}
                          />
                          :
                          null

                      ))
                    }
                  </div>
                  :
                  headerLink === "Cables" ?
                    <div className='container_categorias'>
                      {
                        data && data.map(data => (
                          data.categoria === 'Cables' ?
                            <ComprarTodo
                              key={data?.id}
                              data={data}
                            />
                            :
                            null

                        ))
                      }
                    </div>
                    :
                    headerLink === "Calculadoras" ?
                      <div className='container_categorias'>
                        {
                          data && data.map(data => (
                            data.categoria === 'Calculadoras' ?
                              <ComprarTodo
                                key={data?.id}
                                data={data}
                              />
                              :
                              null

                          ))
                        }
                      </div>
                      :
                      headerLink === "Tomacorrientes_Estabilizadoresrtas" ?
                        <div className='container_categorias'>
                          {
                            data && data.map(data => (
                              data.categoria === 'Tomacorrientes_Estabilizadoresrtas' ?
                                <ComprarTodo
                                  key={data?.id}
                                  data={data}
                                />
                                :
                                null

                            ))
                          }
                        </div>
                        :
                        headerLink === "Bombillas" ?
                          <div className='container_categorias'>
                            {
                              data && data.map(data => (
                                data.categoria === 'Bombillas' ?
                                  <ComprarTodo
                                    key={data?.id}
                                    data={data}
                                  />
                                  :
                                  null

                              ))
                            }
                          </div>
                          :
                          headerLink === "mouse" ?
                            <div className='container_categorias'>
                              {
                                data && data.map(data => (
                                  data.categoria === 'mouse' ?
                                    <ComprarTodo
                                      key={data?.id}
                                      data={data}
                                    />
                                    :
                                    null

                                ))
                              }
                            </div>
                            :
                            headerLink === "Microfono" ?
                              <div className='container_categorias'>
                                {
                                  data && data.map(data => (
                                    data.categoria === 'Microfono' ?
                                      <ComprarTodo
                                        key={data?.id}
                                        data={data}
                                      />
                                      :
                                      null

                                  ))
                                }
                              </div>
                              :

                              ''
        }
      </div>



    </div>
  )
}

export default Home