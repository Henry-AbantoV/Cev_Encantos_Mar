// AddProduct.jsx
import React, { useEffect, useState } from 'react';
import useModal from '../../../Hooks/useModal';
import useGet from '../../../Hooks/useGet';
import usePost from '../../../Hooks/usePost';
import './AddProduct.css';
import DetailsPromotion from './DetailsProduct/DetailsPromotion';
import FormPromotion from './FormProduct/FormPromotion';

const AddProduct = () => {
  const { isOpenModal, setIsOpenModal } = useModal();
  const [obtenerData, setObtenerData] = useState();

  const { data, getData } = useGet('https://65dcf122e7edadead7ed26d9.mockapi.io/promocion');
  const { createData } = usePost('https://65dcf122e7edadead7ed26d9.mockapi.io/promocion');

  useEffect(() => {
    getData();
  }, [isOpenModal, obtenerData]);

  const handleAddPromotion = (promotionData) => {
    createData(promotionData);
    getData();
    setIsOpenModal(false);
  };

  return (
    <div className='main__container'>
      <div className='btn__agregar'>
        <button onClick={() => {
          setIsOpenModal(!isOpenModal);
          setObtenerData(false);
        }}>
          Agregar promoción
        </button>
      </div>

      {isOpenModal && (
        <FormPromotion
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          getData={getData}
          obtenerData={obtenerData}
          setObtenerData={setObtenerData}
          handleAddPromotion={handleAddPromotion}
        />
      )}

      <div className='container__empleado-general'>
        {data && data.map((data) => (
          <DetailsPromotion
            key={data.id}
            data={data}
            setIsOpenModal={setIsOpenModal}
            setObtenerData={setObtenerData}
            getData={getData}
          />
        ))}
      </div>
    </div>
  );
};

export default AddProduct;
