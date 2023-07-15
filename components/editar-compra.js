import React from 'react'

import PropTypes from 'prop-types'

import LineaCompraEditable from './linea-compra-editable'

const EditarCompra = (props) => {
  return (
    <>
      <div className="editar-compra-container">
        <div className="editar-compra-container01">
          <div className="popup-header">
            <span className="popup-header-title editar-compra-text">
              EDITAR
            </span>
            <button type="button" className="editar-compra-button button">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="editar-compra-image"
              />
            </button>
          </div>
          <div className="editar-compra-container03">
            <div className="editar-compra-container04">
              <div className="editar-compra-container05">
                <span className="editar-compra-text01">
                  <span className="editar-compra-text02">ID:</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span className="editar-compra-text05">
                  <span>0000</span>
                  <br></br>
                </span>
                <span className="editar-compra-text08">
                  <span className="editar-compra-text09">PROVEEDOR: </span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="editar-compra-textinput input"
                />
                <span className="editar-compra-text11">
                  <span className="editar-compra-text12">FECHA: </span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="dd/mm/aaaa"
                  className="editar-compra-textinput1 input"
                />
              </div>
              <button className="editar-compra-btn-delete btnRounded">
                <img
                  alt="image"
                  src="/editar-white-1500h.png"
                  className="editar-compra-image1"
                />
              </button>
            </div>
            <div className="editar-compra-lista">
              <div className="editar-compra-encabezado popup-list-header">
                <div className="editar-compra-container06">
                  <span className="editar-compra-text14 list-header-col-productos">
                    {props.text111}
                  </span>
                  <span className="editar-compra-text15 list-header-col-cantidad">
                    {props.text311}
                  </span>
                  <span className="editar-compra-text16 list-header-col-precio">
                    {props.text211}
                  </span>
                </div>
                <span className="editar-compra-text17 list-header-col-subtotal">
                  Sub Total
                </span>
              </div>
              <div className="popup-list-row editar-compra-container07">
                <LineaCompraEditable rootClassName="linea-compra-editable-root-class-name"></LineaCompraEditable>
              </div>
            </div>
            <div className="editar-compra-container08">
              <button className="editar-compra-button1 button">
                <span className="editar-compra-text18">GUARDAR</span>
              </button>
              <div className="popup-total editar-compra-container09">
                <span className="editar-compra-text19">
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
                  className="editar-compra-text22"
                >
                  <span className="editar-compra-text23">$0,00</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .editar-compra-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(43, 43, 40, 0.5);
          }
          .editar-compra-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .editar-compra-button {
            width: auto;
            height: auto;
            display: flex;
            transition: 0.3s;
            flex-direction: row;
          }
          .editar-compra-button:hover {
            transform: scale(1.1);
          }
          .editar-compra-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .editar-compra-container03 {
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
          .editar-compra-container04 {
            display: flex;
            padding-left: 1rem;
            margin-bottom: 1rem;
            padding-right: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .editar-compra-container05 {
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
          .editar-compra-text01 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .editar-compra-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-compra-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .editar-compra-text08 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .editar-compra-text09 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-compra-textinput {
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
          .editar-compra-text11 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .editar-compra-text12 {
            font-style: normal;
            font-weight: 700;
          }
          .editar-compra-textinput1 {
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
          .editar-compra-btn-delete {
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
          .editar-compra-btn-delete:hover {
            transform: scale(1.05);
          }
          .editar-compra-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .editar-compra-lista {
            width: 100%;
            display: flex;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .editar-compra-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .editar-compra-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .editar-compra-text14 {
            font-style: normal;
            font-weight: 600;
          }
          .editar-compra-text15 {
            font-style: normal;
            font-weight: 600;
          }
          .editar-compra-text16 {
            font-style: normal;
            font-weight: 600;
          }
          .editar-compra-text17 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .editar-compra-container08 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            justify-content: space-between;
          }
          .editar-compra-button1 {
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
          .editar-compra-button1:hover {
            transform: scale(1.05);
          }
          .editar-compra-text18 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .editar-compra-text19 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0em;
          }
          .editar-compra-text22 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .editar-compra-text23 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .editar-compra-text08 {
              color: var(--dl-color-gray-white);
              font-size: 1.2rem;
              font-family: Poppins;
            }
            .editar-compra-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-compra-text11 {
              color: var(--dl-color-gray-white);
            }
            .editar-compra-text12 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-compra-lista {
              margin-bottom: 2rem;
            }
          }
          @media (max-width: 991px) {
            .editar-compra-text01 {
              font-size: 1rem;
            }
            .editar-compra-text05 {
              font-size: 1rem;
            }
            .editar-compra-text08 {
              color: var(--dl-color-gray-white);
              font-size: 1rem;
              font-family: Poppins;
            }
            .editar-compra-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-compra-textinput {
              width: 6rem;
              font-size: 1rem;
            }
            .editar-compra-text11 {
              font-size: 1rem;
            }
            .editar-compra-textinput1 {
              width: 8rem;
              font-size: 1rem;
            }
            .editar-compra-button1 {
              width: 8rem;
              height: 3rem;
            }
            .editar-compra-text18 {
              font-size: 1.2rem;
            }
            .editar-compra-text19 {
              font-size: 1.2rem;
            }
            .editar-compra-text22 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .editar-compra-container05 {
              height: 2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .editar-compra-text01 {
              font-size: 0.8rem;
            }
            .editar-compra-text05 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .editar-compra-text08 {
              font-size: 0.8rem;
            }
            .editar-compra-textinput {
              width: 4rem;
              font-size: 0.8rem;
            }
            .editar-compra-text11 {
              font-size: 0.8rem;
            }
            .editar-compra-textinput1 {
              width: 6rem;
              font-size: 0.8rem;
            }
            .editar-compra-btn-delete {
              width: 2rem;
              height: 2rem;
            }
            .editar-compra-image1 {
              width: 1rem;
              height: 1rem;
            }
            .editar-compra-button1 {
              width: 6rem;
            }
            .editar-compra-text18 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
            }
            .editar-compra-text19 {
              font-size: 0.8rem;
            }
            .editar-compra-text22 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .editar-compra-text {
              margin-left: 0rem;
            }
            .editar-compra-image {
              width: 1rem;
              margin-right: 0m;
            }
            .editar-compra-container03 {
              padding: 1rem;
              border-bottom-left-radius: 2rem;
              border-bottom-right-radius: 2rem;
            }
            .editar-compra-container04 {
              align-items: flex-end;
              flex-direction: row;
            }
            .editar-compra-container05 {
              height: auto;
              padding: 0;
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
            .editar-compra-text01 {
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
            }
            .editar-compra-text05 {
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
            }
            .editar-compra-text08 {
              color: var(--dl-color-gray-white);
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              font-family: Poppins;
            }
            .editar-compra-text09 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-compra-textinput {
              width: 4rem;
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              margin-left: 0rem;
              margin-right: 0.5rem;
            }
            .editar-compra-text11 {
              color: var(--dl-color-gray-white);
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              font-family: Poppins;
            }
            .editar-compra-text12 {
              font-style: normal;
              font-weight: 700;
            }
            .editar-compra-textinput1 {
              width: 4.5rem;
              padding: 0px;
              font-size: 0.7rem;
              margin-top: 0px;
              margin-left: 0rem;
              margin-right: 0rem;
            }
            .editar-compra-btn-delete {
              width: 2rem;
              height: 2rem;
              align-self: center;
              margin-top: 0rem;
            }
            .editar-compra-lista {
              margin-bottom: 1rem;
            }
            .editar-compra-encabezado {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-compra-text14 {
              width: 8rem;
              font-size: 0.8rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .editar-compra-text15 {
              font-size: 0.8rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0rem;
              margin-right: 0rem;
            }
            .editar-compra-text17 {
              font-size: 0.8rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1.5rem;
              margin-right: 1.5rem;
            }
            .editar-compra-container07 {
              height: auto;
            }
            .editar-compra-button1 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-compra-text18 {
              width: auto;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }
            .editar-compra-container09 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .editar-compra-text19 {
              color: var(--dl-color-gray-white);
              width: auto;
              font-size: 0.8rem;
              margin-top: 0px;
              font-family: Poppins;
              margin-left: 0px;
              margin-right: 0px;
            }
            .editar-compra-text22 {
              width: auto;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

EditarCompra.defaultProps = {
  image_alt1411: 'image',
  text11: 'Productos',
  text21: 'Precio',
  image_src3: '/eliminar-white-1500h.png',
  text111: 'Productos',
  text31: 'Cantidad',
  image_src1411: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text311: 'Cantidad',
  image_alt141: 'image',
  image_alt3: 'image',
  image_src141: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text211: 'Precio',
}

EditarCompra.propTypes = {
  image_alt1411: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  image_src3: PropTypes.string,
  text111: PropTypes.string,
  text31: PropTypes.string,
  image_src1411: PropTypes.string,
  text311: PropTypes.string,
  image_alt141: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src141: PropTypes.string,
  text211: PropTypes.string,
}

export default EditarCompra
