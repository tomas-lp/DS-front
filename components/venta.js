import React from 'react'

import PropTypes from 'prop-types'
import { useAppContext } from '../context/state';
import { parseFechaFront } from '../utils/utils';

const Venta = (props) => {
  const {showVentas, eliminarVenta} = useAppContext();
  const [showVenta, setShowVenta] = showVentas;
  const [showEliminarVenta, setShowEliminarVenta] = eliminarVenta;

  return (
    <>
      <div className="venta-container list-item fila-tabla fila-grow"
        onClick={()=>{
          setShowEliminarVenta(-1);
          setShowVenta(props.id);
        }}
      >
        <div className="venta-container1">
          <span className="venta-text">{props.id}</span>
          <span className="venta-text1">{props.cliente}</span>
          <span className="venta-text2">${props.importe}</span>
          <span className="venta-text3">{parseFechaFront(props.fecha)}</span>
        </div>
        <button type="button" className="venta-button button"
          onClick={(e)=>{
            e.stopPropagation();
            setShowEliminarVenta(props.id);
          }}
        >
          <img
            alt={props.image_alt5}
            src={props.image_src5}
            className="venta-image"
          />
        </button>
      </div>
      <style jsx>
        {`
          .venta-container {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            padding: 0;
            position: relative;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
            align-items: center;
            border-radius: 0px;
            margin-bottom: 0px;
            justify-content: space-between;
            text-decoration: none;
            background-color: transparent;
            transition: 0.3s;
          }
          .venta-container1 {
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
          .venta-text {
            color: var(--dl-color-gray-white);
            width: 8rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .venta-text1 {
            color: var(--dl-color-gray-white);
            width: 15rem;
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .venta-text2 {
            color: var(--dl-color-gray-white);
            width: 5rem;
            font-size: 1rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .venta-text3 {
            color: var(--dl-color-color-blanco);
            width: 10rem;
            height: auto;
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .venta-button {
            width: auto;
            height: auto;
            display: flex;
            padding: 1rem;
            transition: 0.3s;
            border-color: rgba(0, 0, 0, 0);
            margin-right: 2rem;
            flex-direction: row;
            background-color: transparent;
          }
          .venta-button:hover {
            transform: scale(1.1);
          }
          .venta-image {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .venta-button {
              padding: 0rem;
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .venta-text {
              font-size: 0.8rem;
            }
            .venta-text1 {
              font-size: 0.8rem;
            }
            .venta-text2 {
              font-size: 0.8rem;
            }
            .venta-text3 {
              font-size: 0.8rem;
            }
            .venta-image {
              width: 12px;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .venta-container {
              height: 2rem;
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
            .venta-text {
              width: 8rem;
              font-size: 0.8rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .venta-text1 {
              width: 10rem;
              font-size: 0.8rem;
            }
            .venta-text2 {
              font-size: 0.8rem;
            }
            .venta-text3 {
              font-size: 0.8rem;
            }
            .venta-image {
              width: 8px;
            }
          }
          @media (max-width: 530px) {
            .venta-container {
              padding-left: 1rem;
              padding-right: 1rem;
              border-bottom-left-radius: 1.5rem;
              border-bottom-right-radius: 1.5rem;
            }
            .venta-container1 {
              width: 90%;
            }
            .venta-text {
              width: 2rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .venta-text1 {
              width: 5rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .venta-text2 {
              width: 4rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .venta-text3 {
              width: 3rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 0rem;
            }
            .venta-button {
              width: auto;
              padding: 0px;
              align-self: center;
              margin-right: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

Venta.defaultProps = {
  text411: '01/01/2001',
  image_alt5: 'image',
  text1111: 'Id',
  image_src5: '/eliminar-white-200h.png',
}

Venta.propTypes = {
  text411: PropTypes.string,
  image_alt5: PropTypes.string,
  text1111: PropTypes.string,
  image_src5: PropTypes.string,
}

export default Venta
