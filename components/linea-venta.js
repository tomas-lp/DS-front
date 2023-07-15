import React from 'react'

import PropTypes from 'prop-types'

const LineaVenta = (props) => {
  return (
    <>
      <div className="linea-venta-container list-item fila-tabla">
        <div className="linea-venta-container1">
          <span
            id="textoProductoDetallesVenta"
            className="linea-venta-text list-header-col-productos"
          >
            {props.nombre}
          </span>
          <span className="list-header-col-cantidad linea-venta-text1">
            {props.cantidad}
          </span>
          <span className="list-header-col-precio linea-venta-text2">
            ${props.precioUnitario}
          </span>
        </div>
        <div className="linea-venta-container2">
          <span className="linea-venta-text3 list-header-col-subtotal">
            ${props.subtotal}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .linea-venta-container {
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
          .linea-venta-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .linea-venta-text {
            margin-left: 0rem;
          }
          .linea-venta-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .linea-venta-text3 {
            margin-left: 0px;
            margin-right: 3rem;
          }
          @media (max-width: 1200px) {
            .linea-venta-container {
              height: 4rem;
              align-items: center;
            }
            .linea-venta-text {
              font-size: 1rem;
            }
            .linea-venta-text1 {
              font-size: 1rem;
            }
            .linea-venta-text2 {
              font-size: 1rem;
            }
            .linea-venta-text3 {
              font-size: 1rem;
            }
          }
          @media (max-width: 530px) {
            .linea-venta-container {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .linea-venta-text {
              width: 7rem;
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .linea-venta-text1 {
              font-size: 0.6rem;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .linea-venta-text3 {
              font-size: 0.6rem;
              margin-right: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

LineaVenta.defaultProps = {
  text10: 'Nombre',
  text12: 'Cantidad',
}

LineaVenta.propTypes = {
  text10: PropTypes.string,
  text12: PropTypes.string,
}

export default LineaVenta
