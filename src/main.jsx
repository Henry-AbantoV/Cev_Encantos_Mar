import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import { HashRouter } from 'react-router-dom'


const domain = "dev-slumlylgdxl2xofb.us.auth0.com"
const clientId = "mWRnuz6eZo0TbGg6ounEsR6sztPvsykU"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}

      >
        <App />
      </Auth0Provider>
    </HashRouter>
  </React.StrictMode>,
)



