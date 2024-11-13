// useSubirVideo.js
import { useState } from 'react';

const useSubirVideo = (cloudName, folder) => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const btnSubir = async () => {
    // Crea un elemento de tipo input para seleccionar archivos
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*'; // Solo acepta archivos de video

    input.onchange = async (event) => {
      const file = event.target.files[0];
      if (file) {
        setLoading(true);

        // Configura tu URL de carga. Aquí se asume que usas Cloudinary
        const uploadUrl = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;

        // Configura el formulario de datos
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', folder); // Necesitarás un preset de subida

        try {
          const response = await fetch(uploadUrl, {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          setVideo(data.secure_url); // Guarda la URL segura del video
          setLoading(false);
        } catch (err) {
          setError('Error al subir el video. Inténtalo de nuevo.');
          setLoading(false);
        }
      }
    };

    input.click(); // Simula el clic para abrir el diálogo de selección de archivos
  };

  return { video, btnSubir, loading, error };
};

export default useSubirVideo;
