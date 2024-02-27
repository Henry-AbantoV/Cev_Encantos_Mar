

import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import './Contacto.css';


const FormContacto = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {

    const { register, handleSubmit, reset } = useForm();

    const URL = 'https://64ae40a1c85640541d4cae10.mockapi.io/Empleado';


    const [btncloseContact, setBtncloseContact] = useState('')

    const closeBtn = () => {
        setBtncloseContact('none')
    }

    const submit = data => {
        console.log(obtenerData);
        console.log(image);
        if (obtenerData) {

            updateData(data, obtenerData?.id_empleado)
            setIsOpenModal(false)
            getData()
            setObtenerData(false)
        } else {
            setCliente(data)

            createData(data)
            console.log(uploadData);

            console.log(data);
            setIsOpenModal(false)
            getData()
        }
    }

    useEffect(() => {
        if (obtenerData) {
            reset(obtenerData)
        }
    }, [obtenerData])

   

    return (
    <form onSubmit={handleSubmit(submit)} className={`form__container`} style={{display:`${btncloseContact=== 'none' ? 'none': ''}`}}>
            <div className='form'>
                <div className='form__tile'>
                    <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'}  el contacto de su información </h3></div>
                

                    <div className="form__title-x">
                        <h1 onClick={closeBtn} style={{ fontFamily: "arial" }}> x </h1>
                    </div>
                </div>
                <div className='form__datos'>

                    <div className='form__datos-datos'>

                        <div className='container__datos-datos'>
                            <li className='form__item'>
                                <label htmlFor="name">Ingrese su nombre:</label>
                                <input {...register('name')} type="text" id='name' placeholder=' Ingresar nombre' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="email">Ingrese su correo:</label>
                                <input {...register('email')} type="email" id='email' placeholder=' Ingresar correo' required />
                            </li>
                            <li className='form__item'>
                                <label htmlFor="dni">Ingrese DNI:</label>
                                <input
                                    {...register('dni')}
                                    type="number"
                                    name="dni"
                                    id='dni'
                                    placeholder=' Ingresar numero de DNI'
                                    minLength={8}
                                    required

                                />

                            </li>
                            <li className='form__item'>
                                <label htmlFor="phone">Ingrese Telefono:</label>
                                <input {...register('phone')} type="number" id='phone' placeholder=' Ingresar número de telefono' required />
                            </li>

                            <li className='form__item'>
                                <label htmlFor="address">Dirección:</label>
                                <input {...register('address')} type="text" id='address' placeholder=' Ingresar direción' required />
                            </li>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormContacto