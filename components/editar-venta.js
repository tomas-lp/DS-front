import React from 'react'

import PropTypes from 'prop-types'

import LineaVentaEditable from './linea-venta-editable'

const EditarVenta = (props) => {
  return (
    <>
      <div className="editar-venta-container">
        <div className="editar-venta-container01">
          <div className="popup-header">
            <span className="popup-header-title">EDITAR</span>
            <button type="button" className="editar-venta-button button">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="editar-venta-image"
              />
            </button>
          </div>
          <div className="editar-venta-container03">
            <div className="editar-venta-container04">
              <div className="editar-venta-container05">
                <span className="editar-venta-text01">
                  <span className="editar-venta-text02">ID:</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="editar-venta-text05">
                  <span>0000</span>
                  <br></br>
                </span>
                <span className="editar-venta-text08">
                  <span className="editar-venta-text09">CLIENTE: </span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="editar-venta-textinput input"
                />
                <span className="editar-venta-text11">
                  <span className="editar-venta-text12">FECHA: </span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="editar-venta-textinput1 input"
                />
              </div>
              <button className="editar-venta-btn-delete btnRounded">
                <img
                  alt="image"
                  src="/editar-white-1500h.png"
                  className="editar-venta-image1"
                />
              </button>
            </div>
            <div className="editar-venta-lista">
              <div className="editar-venta-encabezado popup-list-header">
                <div className="editar-venta-container06">
                  <span className="editar-venta-text14 list-header-col-productos">
                    {props.text11}
                  </span>
                  <span className="editar-venta-text15 list-header-col-cantidad">
                    {props.text31}
                  </span>
                  <span className="editar-venta-text16 list-header-col-precio">
                    {props.text21}
                  </span>
                </div>
                <div className="editar-venta-container07">
                  <span className="editar-venta-text17 list-header-col-subtotal">
                    Sub Total
                  </span>
                </div>
              </div>
              <div className="popup-list-row editar-venta-container08">
                <LineaVentaEditable></LineaVentaEditable>
              </div>
            </div>
            <div className="editar-venta-container09">
              <button className="editar-venta-button1 button">
                <span className="editar-venta-text18">GUARDAR</span>
              </button>
              <div className="editar-venta-container10 popup-total">
                <span className="editar-venta-text19">
                  <span>
                    TOTAL: 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span
                  id="textoTotalAgregarVenta"
                  className="editar-venta-text22"
                >
                  <span className="editar-venta-text23">$0,00</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .editar-venta-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(43, 43, 40, 0.5);
          }
          .editar-venta-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .editar-venta-button {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: row;
          }
          .editar-venta-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .editar-venta-container03 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            align-self: center;
            border-radius: 3rem;
            flex-direction: column;
            background-color: var(--dl-color-color-blanco);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .editar-venta-container04 {
            display: flex;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .editar-venta-container05 {
            flex: 0 0 auto;
            width: auto;
            height: 3rem;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            margin-left: 0rem;
            padding-top: 1rem;
            margin-right: 0rem;
            padding-left: 2rem;
            border-radius: 2rem;
            padding-right: 2rem;
            padding-bottom: 1rem;
            justify-content: flex-start;
            background-color: var(--dl-color-color-naranja);
          }
          .editar-venta-text01 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .editar-venta-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-venta-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .editar-venta-text08 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .editar-venta-text09 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-venta-textinput {
            color: var(--dl-color-color-blanco);
            width: 8rem;
            padding: 0;
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            margin-left: 0rem;
            border-width: 0px;
            margin-right: 1rem;
            border-radius: 0px;
            background-color: rgba(217, 217, 217, 0);
          }
          .editar-venta-text11 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .editar-venta-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-venta-textinput1 {
            color: var(--dl-color-color-blanco);
            width: 10rem;
            padding: 0;
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            border-width: 0px;
            border-radius: 0px;
            background-color: rgba(217, 217, 217, 0);
          }
          .editar-venta-btn-delete {
            width: 3rem;
            height: 3rem;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 0rem;
            margin-right: 0rem;
            border-radius: 2rem;
            justify-content: flex-end;
            background-color: var(--dl-color-color-naranja);
          }
          .editar-venta-btn-delete:hover {
            transform: scale(1.05);
          }
          .editar-venta-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .editar-venta-lista {
            width: 100%;
            display: flex;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .editar-venta-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .editar-venta-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .editar-venta-text14 {
            font-style: normal;
            font-weight: 600;
            margin-left: 0rem;
          }
          .editar-venta-text15 {
            font-style: normal;
            font-weight: 600;
            margin-left: 1rem;
          }
          .editar-venta-text16 {
            font-style: normal;
            font-weight: 600;
            margin-left: 1rem;
          }
          .editar-venta-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .editar-venta-text17 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .editar-venta-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            justify-content: space-between;
          }
          .editar-venta-button1 {
            color: var(--dl-color-gray-white);
            width: 10rem;
            height: 4rem;
            align-self: center;
            font-style: normal;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            border-radius: 2rem;
            flex-direction: row;
            background-color: var(--dl-color-color-naranja);
          }
          .editar-venta-button1:hover {
            transform: scale(1.05);
          }
          .editar-venta-text18 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .editar-venta-container10 {
            height: auto;
          }
          .editar-venta-text19 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            padding-top: 1rem;
            margin-right: 0em;
            padding-bottom: 1rem;
          }
          .editar-venta-text22 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .editar-venta-text23 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .editar-venta-text08 {
              color: var(--dl-color-gray-white);
              font-size: 1.2rem;
              font-family: Poppins;
            }
            .editar-venta-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-venta-text11 {
              color: var(--dl-color-gray-white);
            }
            .editar-venta-text12 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-venta-lista {
              margin-bottom: 2rem;
            }
          }
          @media (max-width: 991px) {
            .editar-venta-text01 {
              font-size: 1rem;
            }
            .editar-venta-text05 {
              font-size: 1rem;
            }
            .editar-venta-text08 {
              color: var(--dl-color-gray-white);
              font-size: 1rem;
              font-family: Poppins;
            }
            .editar-venta-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-venta-textinput {
              width: 6rem;
              font-size: 1rem;
            }
            .editar-venta-text11 {
              font-size: 1rem;
            }
            .editar-venta-textinput1 {
              width: 8rem;
              font-size: 1rem;
            }
            .editar-venta-button1 {
              width: 8rem;
              height: 3rem;
            }
            .editar-venta-text18 {
              font-size: 1.2rem;
            }
            .editar-venta-text19 {
              font-size: 1.2rem;
            }
            .editar-venta-text22 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .editar-venta-container05 {
              height: 2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .editar-venta-text01 {
              font-size: 0.8rem;
            }
            .editar-venta-text05 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .editar-venta-text08 {
              font-size: 0.8rem;
            }
            .editar-venta-textinput {
              width: 4rem;
              font-size: 0.8rem;
            }
            .editar-venta-text11 {
              font-size: 0.8rem;
            }
            .editar-venta-textinput1 {
              width: 6rem;
              font-size: 0.8rem;
            }
            .editar-venta-btn-delete {
              width: 2rem;
              height: 2rem;
            }
            .editar-venta-image1 {
              width: 1rem;
              height: 1rem;
            }
            .editar-venta-encabezado {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .editar-venta-container08 {
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
            .editar-venta-button1 {
              width: 6rem;
              height: 2rem;
            }
            .editar-venta-text18 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
            }
            .editar-venta-container10 {
              height: 2rem;
            }
            .editar-venta-text19 {
              font-size: 0.8rem;
            }
            .editar-venta-text22 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .editar-venta-image {
              width: 1rem;
            }
            .editar-venta-container03 {
              padding: 1rem;
              border-bottom-left-radius: 2rem;
              border-bottom-right-radius: 2rem;
            }
            .editar-venta-container04 {
              align-items: flex-end;
              flex-direction: row;
            }
            .editar-venta-container05 {
              height: auto;
              margin-top: 0rem;
              align-items: center;
              margin-left: 0rem;
              padding-top: 0.5rem;
              margin-right: 0rem;
              padding-left: 0.5rem;
              border-radius: 2rem;
              margin-bottom: 0rem;
              padding-right: 0.5rem;
              padding-bottom: 0.5rem;
              justify-content: center;
            }
            .editar-venta-text01 {
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
            }
            .editar-venta-text05 {
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
            }
            .editar-venta-text08 {
              color: var(--dl-color-gray-white);
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              font-family: Poppins;
            }
            .editar-venta-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-venta-textinput {
              width: 4rem;
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              margin-left: 0rem;
              margin-right: 0.5rem;
            }
            .editar-venta-text11 {
              color: var(--dl-color-gray-white);
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              font-family: Poppins;
            }
            .editar-venta-text12 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-venta-textinput1 {
              width: 4.5rem;
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              margin-left: 0rem;
              margin-right: 0rem;
            }
            .editar-venta-btn-delete {
              width: 2rem;
              height: 2rem;
              align-self: center;
              margin-top: 0rem;
            }
            .editar-venta-lista {
              margin-bottom: 1rem;
            }
            .editar-venta-encabezado {
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-venta-text17 {
              margin-right: 1.5rem;
            }
            .editar-venta-button1 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-venta-text18 {
              width: auto;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .editar-venta-container10 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-venta-text19 {
              color: var(--dl-color-gray-white);
              width: auto;
              font-size: 0.8rem;
              margin-top: 0px;
              font-family: Poppins;
              margin-left: 0px;
              padding-top: 0rem;
              margin-right: 0px;
              padding-bottom: 0rem;
            }
            .editar-venta-text22 {
              width: auto;
              margin-top: 0px;
              margin-left: 0px;
              padding-top: 0rem;
              margin-right: 0px;
              padding-bottom: 0rem;
            }
          }
        `}
      </style>
    </>
  )
}

EditarVenta.defaultProps = {
  image_src3: '/eliminar-white-1500h.png',
  text21: 'Precio',
  text11: 'Productos',
  text31: 'Cantidad',
  image_alt3: 'image',
}

EditarVenta.propTypes = {
  image_src3: PropTypes.string,
  text21: PropTypes.string,
  text11: PropTypes.string,
  text31: PropTypes.string,
  image_alt3: PropTypes.string,
}

export default EditarVenta
