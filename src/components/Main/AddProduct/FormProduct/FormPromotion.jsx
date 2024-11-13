import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import usePost from '../../../../Hooks/usePost';
import usePut from '../../../../Hooks/usePut';
import useSubirImage from '../../../../Hooks/useSubirImage';
import useSubirVideo from '../../../../Hooks/useSubirVideo';
import fotoProduct from '../../../../image/addProduct.png';
import './FormProduct.css';

const FormPromotion = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {
  const URL = "https://65dcf122e7edadead7ed26d9.mockapi.io/promocion";
  
  const { image, btnSubir: btnSubirImagen } = useSubirImage('dp3njcqhi', 'empleados');
  const { video, btnSubir: btnSubirVideo } = useSubirVideo('dp3njcqhi', 'empleados');
  
  const { register, handleSubmit, reset } = useForm();
  const { createData } = usePost(URL);
  const { updateData } = usePut(URL);

  // Función para manejar el envío del formulario
  const submit = (data) => {
    data.imagen = image || obtenerData?.imagen || '';
    data.video = video || obtenerData?.video || '';  // Asignar la URL del video

    if (obtenerData) {
      updateData(data, obtenerData?.id).then(() => {
        setIsOpenModal(false);
        getData();
        setObtenerData(false);
      });
    } else {
      createData(data).then(() => {
        setIsOpenModal(false);
        getData();
      });
    }
  };

  useEffect(() => {
    if (obtenerData) {
      reset(obtenerData);
    }
  }, [obtenerData, reset]);

  return (
    <form onSubmit={handleSubmit(submit)} className='form__container'>
      <div className='form'>
        <div className='form__tile'>
          <div className='form__title-title'>
            <h3>{obtenerData ? 'Modificar' : 'Agregar'} Promoción</h3>
          </div>
          <div className='form__title-x'>
            <h1 onClick={() => setIsOpenModal(!isOpenModal)} style={{ fontFamily: 'arial' }}> x </h1>
          </div>
        </div>
        <div className='form__datos'>
          <div className='form__datos-foto'>
            <p>Añadir imagen o video promocional</p>

            {/* Mostrar imagen o video seleccionado */}
            {image ? (
              <img src={image} alt="Imagen de promoción" />
            ) : video ? (
              <video controls>
                <source src={video} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
              </video>
            ) : obtenerData ? (
              obtenerData.video ? (
                <video controls>
                  <source src={obtenerData.video} type="video/mp4" />
                  Tu navegador no soporta la etiqueta de video.
                </video>
              ) : (
                <img src={obtenerData.imagen || fotoProduct} alt="Añadir foto" />
              )
            ) : (
              <img src={fotoProduct} alt="Añadir foto de producto" />
            )}

            {/* Botones para subir imagen y video */}
            <h6 onClick={btnSubirImagen}>Subir imagen</h6>
            <h6 onClick={btnSubirVideo}>Subir video</h6>
          </div>
        </div>

        {/* Botón para guardar los datos */}
        <div className='form__actions'>
          <button type="submit" className="btn-promotion">Guardar</button>
        </div>
      </div>
    </form>
  );
};

export default FormPromotion;
