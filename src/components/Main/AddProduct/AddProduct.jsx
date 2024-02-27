import React, { useEffect, useState } from 'react'
import FormProduct from './FormProduct/FormProduct'
import useModal from '../../../Hooks/useModal'
import useGet from '../../../Hooks/useGet'
import DetailsProduct from './DetailsProduct/DetailsProduct'
import './AddProduct.css'

const AddProduct = () => {
  const { isOpenModal, setIsOpenModal } = useModal()
  const [obtenerData, setObtenerData] = useState()


  const { data, getData } = useGet('https://65dcf122e7edadead7ed26d9.mockapi.io/Product')

  useEffect(() => {
    getData()
  }, [isOpenModal])


useEffect(() => {
  getData()
},[obtenerData])
  return (
    <div className='main__container'>

    <div className='btn__agregar'>
      <button onClick={() => {
        setIsOpenModal(!isOpenModal)
        setObtenerData(false)
      }}
      >
        + Agregar
      </button>
    </div>

    <div>
      {
        isOpenModal ?
          <div>
            <FormProduct
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
              getData={getData}
              obtenerData={obtenerData}
              setObtenerData={setObtenerData}
            />

          </div>
          :
          <div>

          </div>
      }

    </div>
    <div className='container__empleado-general'>
      {
        data && data?.map(data => (
          <DetailsProduct
            key={data.id}
            data={data}
            setIsOpenModal={setIsOpenModal}
            setObtenerData={setObtenerData}
            getData={getData}
          />
        ))
      }
    </div>



  </div>
  )
}

export default AddProduct