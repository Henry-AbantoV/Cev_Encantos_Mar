import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Sobre_nosotros from './components/Main/SobreNosotros/Sobre_nosotros'
import Error404 from './components/Error404'
import AddProduct from "./components/Main/AddProduct/AddProduct";
import Contacto from "./components/Main/Contacto/Contacto";
import { useAuth0 } from "@auth0/auth0-react";



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const {  user } = useAuth0();

  return (
    <>
      <div className='container__app'>

        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        <main onClick={() => setIsOpen(false)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nosotros' element={<Sobre_nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
         
            {
                  user?.email === 'havilav20_2@unc.edu.pe'
              ||  user?.email === 'earribasplatap19_2@unc.edu.pe'
              ||  user?.email === 'eabantov20_1@unc.edu.pe'
              ||  user?.email === 'adarcec18_2@unc.edu.pe'
              ||  user?.email === 'barcea16_1@unc.edu.pe'
              ||  user?.email === 'ebecerram20_1@unc.edu.pe'
              ?
              <Route path='/add-product' element={<AddProduct />} />
              :
              <Route path='/*' element={<Error404 />} />
            }

            <Route path='/*' element={<Error404 />} />
          </Routes>
      
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}

export default App
