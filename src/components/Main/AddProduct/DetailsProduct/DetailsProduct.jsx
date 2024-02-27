import React from 'react'
import fotoProduct from '../../../../image/addProduct.png'
import useDelete from '../../../../Hooks/useDelete'
import './DetailsProduct.css'

const DetailsProduct = ({ data, setIsOpenModal, setObtenerData, getData }) => {
    const URL = 'https://65c2e3fdf7e6ea59682bc40a.mockapi.io/Producto'

    const modificarProducto = () => {
        setIsOpenModal(true)
        setObtenerData(data)
    }
    const { deleteData } = useDelete(URL)

    const eliminarData = () => {

        var resultado = window.confirm(`Estas seguro de eliminar a ${data.nombre}`);
        if (resultado === true) {

            deleteData(data?.id)
            getData()
            getData()

            window.alert(` ${data.nombre} se a eliminado`);
            getData()
            getData()

        } else {
            window.alert(`${data.nombre} no fue eliminado`);
        }
    }

    return (
        <article className='producto'>
            <div className="producto__tilte">
                <h3>{data.nombre}</h3>
            </div>

            <div className='container_producto-info'>
                <div className='producto__img'>
                    {
                        data.imagen ?
                            <img src={data.imagen} alt={data.nombre} />
                            :
                            <img src={fotoProduct} alt={data.nombre} />
                    }
                </div>

                <div className='producto__info'>
                    <div className="producto__info-datos">
                        <b>Nombre: </b>
                        <p>{data.nombre} </p>
                    </div>

                    <div className="producto__info-datos">
                        <b>Precio: </b>
                        <p>{data.precio} </p>
                    </div>

                    <div className="producto__info-datos">
                        <b>Precio con descuento: </b>
                        <p>{data.descuento} </p>
                    </div>


                    <div className="producto__info-datos">
                        <b>Descripcion del producto: </b>
                        <p>{data.descripcion} </p>
                    </div>

                </div>
            </div>

            <div className="btn_producto">
                <button onClick={modificarProducto}>Modificar</button>
                <button onClick={eliminarData}>Eliminar</button>
            </div>

        </article>
    )
}

export default DetailsProduct