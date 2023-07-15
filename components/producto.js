import React from 'react'
import PropTypes from 'prop-types'
import { useAppContext } from '../context/state'

const Producto = (props) => {
  const {showProductos, eliminarProducto} = useAppContext();
  const [showProducto, setShowProducto] = showProductos;
  const [showEliminarProducto, setShowEliminarProducto] = eliminarProducto;

  return (
    <> {/*Al hacer click en el elemento, se habilita mostrar el popup, con el id del producto que se quiere mostrar*/}
      <div className="producto-container list-item fila-tabla fila-grow" 
        onClick={()=>{
          setShowEliminarProducto(-1);
          setShowProducto(props.id);
        }}> 
        <div className="producto-container1">
          <span id="textoIdListaProducto" className="producto-text">
            {props.id}
          </span>
          <span id="textoNombreListaProducto" className="producto-text1">
            {props.nombre}
          </span>
          <span id="textoStockListaProducto" className="producto-text2">
            {props.stock}
          </span>
          <span id="textoPrecioListaProducto" className="producto-text3">
            {props.precioVenta}
          </span>
        </div>
        <button
          id="botonEliminarProducto"
          type="button"
          className="producto-button button"
          onClick={(e)=>{
            e.stopPropagation();
            setShowEliminarProducto(props.id);
          }}
        >
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="producto-image"
          />
        </button>
      </div>
      <style jsx>
        {`
          .producto-container {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            padding: 0;
            position: relative;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
            align-items: flex-start;
            border-radius: 0px;
            margin-bottom: 0px;
            justify-content: space-between;
            text-decoration: none;
            background-color: transparent;
            transition: 0.3s;
          }

          .producto-container1 {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .producto-text {
            color: var(--dl-color-gray-white);
            width: 8rem;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 2rem;
            margin-right: 1rem;
          }
          .producto-text1 {
            color: var(--dl-color-gray-white);
            width: 15rem;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .producto-text2 {
            color: var(--dl-color-color-blanco);
            width: 8rem;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .producto-text3 {
            color: var(--dl-color-color-blanco);
            width: 10rem;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .producto-button {
            width: auto;
            height: auto;
            display: flex;
            padding: 1rem;
            align-self: center;
            transition: 0.3s;
            border-color: rgba(0, 0, 0, 0);
            margin-right: 2rem;
            flex-direction: row;
            background-color: transparent;
          }
          .producto-button:hover {
            transform: scale(1.1);
          }
          .producto-image {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .producto-text {
              margin-left: 1rem;
            }
            .producto-text2 {
              width: 5rem;
            }
            .producto-button {
              padding: 1rem;
            }
          }
          @media (max-width: 991px) {
            .producto-text {
              font-size: 0.8rem;
            }
            .producto-text1 {
              font-size: 0.8rem;
            }
            .producto-text2 {
              font-size: 0.8rem;
            }
            .producto-text3 {
              font-size: 0.8rem;
            }
            .producto-image {
              width: 12px;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .producto-container {
              height: 2rem;
            }
            .producto-text {
              font-size: 0.8rem;
            }
            .producto-text1 {
              font-size: 0.8rem;
            }
            .producto-text2 {
              font-size: 0.8rem;
            }
            .producto-text3 {
              font-size: 0.8rem;
            }
            .producto-image {
              width: 8px;
            }
          }
          @media (max-width: 530px) {
            .producto-container {
              padding-top: 0rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0rem;
            }
            .producto-text {
              width: 2rem;
              font-size: 0.6rem;
              margin-left: 1rem;
            }
            .producto-text1 {
              width: 5rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .producto-text2 {
              width: 4rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .producto-text3 {
              width: 3rem;
              font-size: 0.6rem;
            }
            .producto-button {
              align-self: center;
              margin-right: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

Producto.defaultProps = {
  id: '00',
  nombre: 'Nombre',
  precioVenta: '0,00',
  stock: '00',
  text21: '$0,00',
  image_alt: 'image',
  image_src: '/eliminar-white-200h.png',
  text111: 'Id',
  text7: '0',
}

Producto.propTypes = {
  text21: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text111: PropTypes.string,
  text7: PropTypes.string,
}

export default Producto
