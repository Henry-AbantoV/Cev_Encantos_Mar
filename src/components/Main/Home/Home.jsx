import React, { useEffect } from 'react'
import './Home.css'
import ComprarTodo from './pages/ComprarTodo/ComprarTodo'
import { useState } from 'react'
import { Whatsapp } from 'react-bootstrap-icons';



import useGet from '../../../Hooks/useGet'



const Home = () => {

  const [headerLink, setHeaderLink] = useState('Sin_categoria');

  const { data, getData } = useGet('https://65dcf122e7edadead7ed26d9.mockapi.io/Product')

  useEffect(() => {
    getData()
  }, [])

  const [lapis, setLapis] = useState()

  const Sin_categoria = () => {
    setHeaderLink('Sin_categoria')
  }

  const Ceviches = () => {
    setHeaderLink('Ceviches')
  }

  const Jaleas = () => {
    setHeaderLink('Jaleas')
  }

  const Sudados = () => {
    setHeaderLink('Sudados')
  }

  const Parihuelas = () => {
    setHeaderLink('Parihuelas')
  }

  const Marisqueria = () => {
    setHeaderLink('Marisqueria')
  }


  const [inputValue, setInputValue] = useState('');


  // Controlador de eventos para manejar los cambios en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado con el valor del input
  };


  return (
    <div className='home'>

      <b>
        <a href="https://api.whatsapp.com/send?phone=51924282218&text=https://encantosdelmar.netlify.app//%0AHola,%20estoy%20interesado%20deseo%20obtener%20más%20información%20" target="_blank" rel="noopener noreferrer">
          <div className='contactanos_flotante'><Whatsapp color="rgb(86, 253, 108)" size={24} />Contactanos</div> </a>
      </b>

      <div className='nav_header_home'>
        <ul className='ul_header_home'>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Sin_categoria' ? 'blue' : 'black'}` }} onClick={Sin_categoria} className='li_header_home'>Sin categoria</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Ceviches' ? 'blue' : 'black'}` }} onClick={Ceviches} className='li_header_home'>Ceviches</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Jaleas' ? 'blue' : 'black'}` }} onClick={Jaleas} className='li_header_home'>Jaleas</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Sudados' ? 'blue' : 'black'}` }} onClick={Sudados} className='li_header_home'>Sudados</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Parihuelas' ? 'blue' : 'black'}` }} onClick={Parihuelas} className='li_header_home'>Parihuelas</li>
          <li style={{ fontFamily: 'Roboto', fontWeight: 600, color: `${headerLink === 'Marisquería' ? 'blue' : 'black'}` }} onClick={Marisqueria} className='li_header_home'>Marisquería</li>
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
              headerLink === "Ceviches" ?
                <div className='container_categorias'>
                  {
                    data && data.map(data => (
                      data.categoria === 'Ceviches' ?
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
                headerLink === "Jaleas" ?
                  <div className='container_categorias'>
                    {
                      data && data.map(data => (
                        data.categoria === 'Jaleas' ?
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
                  headerLink === "Sudados" ?
                    <div className='container_categorias'>
                      {
                        data && data.map(data => (
                          data.categoria === 'Sudados' ?
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
                    headerLink === "Parihuelas" ?
                      <div className='container_categorias'>
                        {
                          data && data.map(data => (
                            data.categoria === 'Parihuelas' ?
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
                      headerLink === "Marisqueria" ?
                        <div className='container_categorias'>
                          {
                            data && data.map(data => (
                              data.categoria === 'Marisqueria' ?
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