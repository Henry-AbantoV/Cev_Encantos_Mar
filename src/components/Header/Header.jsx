import React, { useState } from 'react'
import './Header.css'
import logo from '../../image/logo.png'
import userDefault from '../../image/user_img.avif'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = ({ isOpen, setIsOpen }) => {

    const { loginWithRedirect, isAuthenticated, isLoading, logout, user } = useAuth0();

    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={logo} alt="" />
                <p>Kasiques Technology</p>

                <div className={`nav_toogle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className={`nav__links ${isOpen && "open__menu mt-5"} `} onClick={() => setIsOpen(false)} >
                <li> <Link to='/'>Inicio</Link> </li>
                <li> <Link to='/sobre-nosotros'>Acerca de</Link> </li>
                <li> <Link to='/contacto'>Contacto</Link> </li>     
                <li> <Link to='/add-product'>Add product</Link> </li>
            </div>



            <div className='nav__user'>
                <div className='nav__user-datos ocultar'>

                    {
                        isLoading ?
                            <p>Cargando...</p>
                            :
                            isAuthenticated ?
                                <p> {user.email} </p>
                                :
                                <p>Sin usuario</p>
                    }


                    {
                        isAuthenticated ?
                            <button onClick={() => logout()}>
                                salir
                            </button>
                            :

                            <button className='btn_inicioSecion' onClick={() => loginWithRedirect()}>
                                Registrate
                            </button>

                    }

                </div>

                {
                    isLoading ?
                        <p>cargando...</p>
                        :

                        isAuthenticated ?
                            <img className='ocultar' src={user?.picture} alt={user.name} />
                            :
                            <img className='ocultar' src={userDefault} alt="" />

                }

            </div>
        </nav>
    )
}

export default Header;




