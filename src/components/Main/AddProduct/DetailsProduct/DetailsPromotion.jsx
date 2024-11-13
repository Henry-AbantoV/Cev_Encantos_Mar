import React from 'react';
import fotoProduct from '../../../../image/addProduct.png';
import useDelete from '../../../../Hooks/useDelete';
import './DetailsProduct.css';

const DetailsPromotion = ({ data, setIsOpenModal, setObtenerData, getData }) => {
  const URL = 'https://65dcf122e7edadead7ed26d9.mockapi.io/promocion';
  const { deleteData } = useDelete(URL);

  const modificarProducto = () => {
    setIsOpenModal(true);
    setObtenerData(data);
  };

  const eliminarData = () => {
    if (window.confirm(`Estas seguro de eliminar a ${data.nombre}`)) {
      deleteData(data?.id);
      getData();
      window.alert(`${data.nombre} se ha eliminado`);
    } else {
      window.alert(`${data.nombre} no fue eliminado`);
    }
  };

  return (
    <article className='producto'>
      <div className="producto__tilte">
        <h3>{data.nombre}</h3>
      </div>
      <div className='container_producto-info'>
        <div className='producto__img'>
          {data.imagen ? (
            <img src={data.imagen} alt={data.nombre} />
          ) : data.video ? (
            <video controls>
              <source src={data.video} type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          ) : (
            <img src={fotoProduct} alt={data.nombre} />
          )}
        </div>
      </div>
      <div className="btn_producto">
        <button onClick={modificarProducto}>Modificar</button>
        <button onClick={eliminarData}>Eliminar</button>
      </div>
    </article>
  );
};

export default DetailsPromotion;
