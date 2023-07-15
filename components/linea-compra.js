import React from 'react'

import PropTypes from 'prop-types'

const LineaCompra = (props) => {
  return (
    <>
      <div className="linea-compra-container list-item fila-tabla">
        <div className="linea-compra-container1">
          <span
            id="textoProductoDetallesVenta"
            className="list-header-col-productos linea-compra-text"
          >
            {props.nombre}
          </span>
          <span className="list-header-col-cantidad linea-compra-text1">
            {props.cantidad}
          </span>
          <span className="list-header-col-precio linea-compra-text2">
            ${props.precioUnitario}
          </span>
        </div>
        <span className="linea-compra-text3 list-header-col-subtotal">
          ${props.subtotal}
        </span>
      </div>
      <style jsx>
        {`
          .linea-compra-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
            align-items: flex-start;
            padding-top: 1rem;
            padding-left: 2rem;
            border-radius: 0px;
            margin-bottom: 0px;
            padding-right: 2rem;
            padding-bottom: 1rem;
            justify-content: space-between;
            text-decoration: none;
            background-color: transparent;
          }
          .linea-compra-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .linea-compra-text3 {
            margin-right: 3rem;
          }
          @media (max-width: 1200px) {
            .linea-compra-container {
              height: 4rem;
              align-items: center;
            }
            .linea-compra-text {
              font-size: 1rem;
            }
            .linea-compra-text1 {
              font-size: 1rem;
            }
            .linea-compra-text2 {
              font-size: 1rem;
            }
            .linea-compra-text3 {
              font-size: 1rem;
            }
          }
          @media (max-width: 530px) {
            .linea-compra-container {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .linea-compra-container1 {
              align-items: center;
            }
            .linea-compra-text {
              width: 7rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .linea-compra-text1 {
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .linea-compra-text3 {
              font-size: 0.6rem;
              margin-right: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

LineaCompra.defaultProps = {
  text12: 'Cantidad',
  text10: 'Nombre',
}

LineaCompra.propTypes = {
  text12: PropTypes.string,
  text10: PropTypes.string,
}

export default LineaCompra
