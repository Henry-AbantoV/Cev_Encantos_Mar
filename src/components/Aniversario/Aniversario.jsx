import React, { useEffect, useState } from 'react';
import useGet from '../../Hooks/useGet';
import './Aniversario.css';

const Aniversario = () => {
  const { data, getData } = useGet('https://65dcf122e7edadead7ed26d9.mockapi.io/promocion');

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="aniversario__container">
      <h2>Promociones de Aniversario</h2>
      <div className="grid__container">
        {data && data
          .slice(0) // Clonar array para no modificar el original
          .reverse() // Invertir el orden para mostrar el más reciente primero
          .map((promotion) => (
            <div key={promotion.id} className="grid__card">
              {promotion.video ? (
                <video controls className="grid__media">
                  <source src={promotion.video} type="video/mp4" />
                  Tu navegador no soporta el video.
                </video>
              ) : (
                <img src={promotion.imagen} alt={promotion.nombre} className="grid__media" />
              )}
              <h3>{promotion.nombre}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Aniversario;
