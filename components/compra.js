import React from 'react'

import PropTypes from 'prop-types'
import { useAppContext } from '../context/state';
import { parseFechaFront } from '../utils/utils';

const Compra = (props) => {
  const {showCompras, eliminarCompra} = useAppContext();
  const [showCompra, setShowCompra] = showCompras;
  const [showEliminarCompra, setShowEliminarCompra] = eliminarCompra;
  return (
    <>
      <div className="compra-container list-item fila-tabla fila-grow"
        onClick={()=>{
          setShowEliminarCompra(-1);
          setShowCompra(props.id);
        }}> 
        <div className="compra-container1">
          <span className="compra-text">
            {props.id}
          </span>
          <span className="compra-text1">
            {props.proveedor}
          </span>
          <span className="compra-text2">
            ${props.importe}
          </span>
          <span className="compra-text3">
            {parseFechaFront(props.fecha)}  
          </span>
        </div>
        <button 
          type="button" 
          className="compra-button button"
          onClick={(e)=>{
            e.stopPropagation();
            setShowEliminarCompra(props.id);
          }}
        >
          <img
            alt={props.image_alt51}
            src={props.image_src51}
            className="compra-image"
          />
        </button>
      </div>
      <style jsx>
        {`
          .compra-container {
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
          .compra-container1 {
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
          .compra-text {
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
          .compra-text1 {
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
          .compra-text2 {
            color: var(--dl-color-gray-white);
            width: 5rem;
            font-size: 1.2rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .compra-text3 {
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
          .compra-button {
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
          .compra-button:hover {
            transform: scale(1.1);
          }
          .compra-image {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .compra-button {
              padding: 0rem;
              align-self: center;
              padding-top: 2rem;
              padding-left: 2rem;
              padding-right: 2rem;
              padding-bottom: 2rem;
            }
          }
          @media (max-width: 991px) {
            .compra-text {
              font-size: 0.8rem;
            }
            .compra-text1 {
              font-size: 0.8rem;
            }
            .compra-text2 {
              font-size: 0.8rem;
            }
            .compra-text3 {
              font-size: 0.8rem;
            }
            .compra-image {
              width: 12px;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .compra-container {
              height: 2rem;
              border-radius: 0rem;
              border-top-left-radius: 0;
              border-top-right-radius: 0;
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
            .compra-text {
              font-size: 0.8rem;
            }
            .compra-text1 {
              font-size: 0.8rem;
            }
            .compra-text2 {
              font-size: 0.8rem;
            }
            .compra-text3 {
              font-size: 0.8rem;
            }
            .compra-image {
              width: 8px;
            }
          }
          @media (max-width: 530px) {
            .compra-container {
              padding-left: 1rem;
              padding-right: 1rem;
              border-bottom-left-radius: 1.5rem;
              border-bottom-right-radius: 1.5rem;
            }
            .compra-container1 {
              width: 90%;
            }
            .compra-text {
              width: 2rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .compra-text1 {
              width: 5rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .compra-text2 {
              width: 4rem;
              font-size: 0.6rem;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .compra-text3 {
              width: 3rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .compra-button {
              width: auto;
              padding: 0px;
              align-self: center;
              align-items: center;
              margin-right: 1rem;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Compra.defaultProps = {
  image_src51: '/eliminar-white-200h.png',
  text4112: '01/01/2001',
  text11112: 'Id',
  image_alt51: 'image',
}

Compra.propTypes = {
  image_src51: PropTypes.string,
  text4112: PropTypes.string,
  text11112: PropTypes.string,
  image_alt51: PropTypes.string,
}

export default Compra
