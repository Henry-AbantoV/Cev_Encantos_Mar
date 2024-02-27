import React, { useEffect, useState } from 'react'
import usePost from '../../../../Hooks/usePost';
//import libreria form
import { useForm } from 'react-hook-form';
import usePut from '../../../../Hooks/usePut';

import fotoProduct from '../../../../image/addProduct.png'
import './FormProduct.css'
import useSubirImage from '../../../../Hooks/useSubirImage';



const FormProduct = ({ isOpenModal, setIsOpenModal, getData, obtenerData, setObtenerData }) => {
    const URL = "https://65c2e3fdf7e6ea59682bc40a.mockapi.io/Producto"
    const { image, btnSubir } = useSubirImage('dp3njcqhi', 'empleados')
    const { register, handleSubmit, reset } = useForm(); //recibimos los valores del formulario y las funciones para manejarlos
    const { uploadData, createData } = usePost(URL)
    const [producto, setProducto] = useState();
    const { updateData } = usePut(URL);
    //create data en la db
    const submit = data => {
        console.log(obtenerData);
        console.log(image);
        if (obtenerData) {

            if (!obtenerData.imagen) {
                data.imagen = image
            } else if (obtenerData?.imagen !== image && obtenerData?.imagen && !image) {
                data.imagen = obtenerData?.imagen
                getData()
            } else {
                if (obtenerData?.imagen !== image) {
                    data.imagen = image
                    getData()
                } else {
                    data.imagen = obtenerData?.imagen
                    getData()
                }

            }

            updateData(data, obtenerData?.id)
            setIsOpenModal(false)
            getData()
            setObtenerData(false)
        } else {
            data.imagen = image
            setProducto(data)

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
        <form onSubmit={handleSubmit(submit)} className='form__container'>
            <div className='form'>
                <div className='form__tile'>
                    <div className='form__title-title'><h3>{obtenerData ? 'Modificar' : 'Agregar'} Producto</h3></div>
                    <div className='form__title-x'><h1 onClick={() => setIsOpenModal(!isOpenModal)} style={{ fontFamily: 'arial' }}> x </h1></div>
                </div>
                <div className='form__datos'>

                    <div className='form__datos-foto'>
                        <p>Añadir imagen producto</p>

                        {
                            image ?

                                <img src={image} alt="Añadir foto de producto" />
                                :
                                obtenerData ?
                                    <img src={obtenerData.imagen ? obtenerData?.imagen : fotoProduct} alt="Añadir foto " />
                                    :
                                    <img src={fotoProduct} alt="Añadir foto de producto" />
                        }



                        <h6 onClick={btnSubir}>Subir imagen</h6>
                    </div>

                    <div className='form__datos-datos'>

                        <div className='container__datos-datos'>
                            <li className='form__item'>
                                <label htmlFor="nombre">Nombre de producto:</label>
                                <input {...register('nombre')} type="text" id='nombre' placeholder=' Ingresar nombre' required />
                            </li>

                            <li className='form__item'>
                                <label htmlFor="precio">Ingrese precio:</label>
                                <input
                                    {...register('precio')}
                                    type="number"
                                    name="precio"
                                    id='precio'
                                    placeholder=' Ingresar precio producto'

                                    required

                                />

                            </li>
                            <li className='form__item'>
                                <label htmlFor="descuento">Ingrese precio con descuento:</label>
                                <input {...register('descuento')} type="number" id='descuento' placeholder=' Ingresar precio con dscto' required />
                            </li>

                            <li className='form__item'>
                                <label htmlFor="descripcion">Descripcion producto:</label>
                                <input {...register('descripcion')} type="text" id='descripcion' placeholder=' Ingresar descripcion del producto' required />
                            </li>

                            <li className='form__item'>
                                <button
                                    style={{
                                        background: 'rgb(85, 85, 238)',
                                        width: '100px',
                                        borderRadius: '1em',
                                        margin: 'auto',
                                        marginTop: '10px',
                                    }}
                                >{obtenerData ? 'Modificar' : 'Registrar'}  </button>
                            </li>

                            <li className='form__item'>
                                <label>Ingrese categoria:</label>
                            </li>
                            <li

                                className='form__item'>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Sin_categoria" />
                                    Sin/categoria
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Adaptadores" />
                                    Adaptadores
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Audifonos_inalambricos" />
                                    Audifonos/inalambricos
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Cables" />
                                    Cables
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Calculadoras" />
                                    Calculadoras
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Tomacorrientes_Estabilizadoresrtas" />
                                    Tomacorrientes/Estabilizadores
                                </label>
                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Bombillas" />
                                    Bombillas
                                </label>

                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="mouse" />
                                    Mouse
                                </label>

                                <label>
                                    <input type="radio" {...register('categoria', { required: true })} value="Microfono" />
                                    Microfono
                                </label>

                            </li>

                        </div>


                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormProduct

