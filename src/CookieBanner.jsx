import React, { useState, useEffect } from 'react';

function CookieBanner() {
  const [cookiesAceptadas, setCookiesAceptadas] = useState(false);

  useEffect(() => {
    // Verificar si las cookies ya han sido aceptadas
    const cookiesAceptadas = document.cookie.indexOf('cookies_aceptadas=true') !== -1;
    setCookiesAceptadas(cookiesAceptadas);
  }, []);

  const aceptarCookies = () => {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = "cookies_aceptadas=true;" + expires + ";path=/";
    setCookiesAceptadas(true);
  }

  if (cookiesAceptadas) {
    return null; // Si las cookies ya han sido aceptadas, no mostrar el banner
  }

  return (
    <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '14px'
    }}>
        Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, usted acepta nuestro uso de cookies.
        <button onClick={aceptarCookies} style={{
            backgroundColor: '#fff',
            color: '#333',
            border: 'none',
            padding: '5px 10px',
            marginLeft: '10px',
            cursor: 'pointer'
        }}>
            Aceptar
        </button>
    </div>
  );
}

export default CookieBanner;