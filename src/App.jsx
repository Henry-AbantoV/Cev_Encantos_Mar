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
import Aniversario from "./components/Aniversario/Aniversario";
import { useAuth0 } from "@auth0/auth0-react";

import CookieBanner from './CookieBanner';



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const {  user } = useAuth0();

  console.log(user);
  return (
    <>
    {/* Pegar codigo del txt */}
    <p>Pagina en mantenimiento</p>
    </>
  )
}

export default App
