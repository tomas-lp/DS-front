import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import LineaCompra from './linea-compra'
import { useAppContext } from '../context/state'
import { parseFechaFront } from '../utils/utils'

const DetallesCompra = (props) => {
  const {showCompras} = useAppContext();
  const [showCompra, setShowCompra] = showCompras;
  const [compra, setCompra] = useState({});
  const [lineas, setLineas] = useState([]);
  let total = 0;

  useEffect(()=>{
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/compras/${props.id}`;
    axios.get(url)
    .then(res => {
      setCompra(res.data);
    })
    .catch(error => {
      console.log(error);
    })

    url = `${apiHost}/api/compras/${props.id}/lineas`;
    axios.get(url)
    .then(res => {
      setLineas(res.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <div className="detalles-compra-container">
        <div className="detalles-compra-container01">
          <div className="popup-header">
            <span className="popup-header-title">DETALLES</span>
            <button type="button" className="detalles-compra-button button">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="detalles-compra-image"
                onClick={()=>{setShowCompra(-1)}}
              />
            </button>
          </div>
          <div className="detalles-compra-container03">
            <div className="detalles-compra-container04">
              <div className="detalles-compra-container05">
                <span className="detalles-compra-text01">
                  <span className="detalles-compra-text02">ID:</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span
                  id="textoIdDetallesVenta"
                  className="detalles-compra-text05"
                >
                  <span>{props.id}</span>
                  <br></br>
                </span>
                <span className="detalles-compra-text08">
                  <span className="detalles-compra-text09">PROVEEDOR:</span>
                  <br></br>
                </span>
                <span
                  id="textoNombreDetallesVenta"
                  className="detalles-compra-text11"
                >
                  <span>{props.proveedor}</span>
                  <br></br>
                </span>
                <span className="detalles-compra-text14">
                  <span className="detalles-compra-text15">FECHA:</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span
                  id="textoFechaDetallesVenta"
                  className="detalles-compra-text18"
                >
                  <span>{parseFechaFront(props.fecha)}</span>
                  <br></br>
                </span>
              </div>
              {/* <button
                id="botonEditarVenta"
                className="detalles-compra-btn-delete btnRounded"
              >
                <img
                  alt={props.image_alt81}
                  src={props.image_src81}
                  className="detalles-compra-image1"
                />
              </button> */}
            </div>
            <div className="detalles-compra-lista">
              <div className="detalles-compra-encabezado popup-list-header">
                <div className="detalles-compra-container06">
                  <span className="detalles-compra-text22 list-header-col-productos">
                    {props.text11}
                  </span>
                  <span className="detalles-compra-text23 list-header-col-cantidad">
                    {props.text31}
                  </span>
                  <span className="detalles-compra-text24 list-header-col-precio">
                    {props.text21}
                  </span>
                </div>
                <div className="detalles-compra-container07">
                  <span className="detalles-compra-text25 list-header-col-subtotal">
                    Sub Total
                  </span>
                </div>
              </div>
              <div className="popup-list-row">
                {lineas.map((linea) =>{
                  const subtotal = linea.precio_unitario * linea.cantidad;
                  total = total+subtotal;
                  return <LineaCompra linea={linea.linea} idProducto={linea.id_producto} cantidad={linea.cantidad} precioUnitario={linea.precio_unitario} nombre={linea.nombre} subtotal={subtotal}></LineaCompra>
                })}
              </div>
            </div>
            <div className="detalles-compra-container09 popup-total">
              <span className="detalles-compra-text26">
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
                className="detalles-compra-text29"
              >
                <span className="detalles-compra-text30">${total}</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .detalles-compra-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            position: fixed;
            top:0;
            left:0;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(43, 43, 40, 0.5);
          }
          .detalles-compra-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .detalles-compra-button {
            width: auto;
            height: auto;
            display: flex;
            transition: 0.3s;
            flex-direction: row;
          }
          .detalles-compra-button:hover {
            transform: scale(1.1);
          }
          .detalles-compra-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .detalles-compra-container03 {
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
          .detalles-compra-container04 {
            display: flex;
            padding-left: 1rem;
            margin-bottom: 1rem;
            padding-right: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .detalles-compra-container05 {
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
          .detalles-compra-text01 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .detalles-compra-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-compra-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .detalles-compra-text08 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .detalles-compra-text09 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-compra-text11 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .detalles-compra-text14 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .detalles-compra-text15 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-compra-text18 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 0rem;
          }
          .detalles-compra-btn-delete {
            width: 3rem;
            height: 3rem;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 0px;
            border-radius: 2rem;
            justify-content: center;
            background-color: var(--dl-color-color-naranja);
          }
          .detalles-compra-btn-delete:hover {
            transform: scale(1.05);
          }
          .detalles-compra-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .detalles-compra-lista {
            display: flex;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .detalles-compra-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .detalles-compra-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .detalles-compra-text22 {
            font-style: normal;
            font-weight: 600;
          }
          .detalles-compra-text23 {
            font-style: normal;
            font-weight: 600;
          }
          .detalles-compra-text24 {
            font-style: normal;
            font-weight: 600;
          }
          .detalles-compra-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .detalles-compra-text25 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .detalles-compra-container09 {
            height: auto;
            align-self: flex-end;
            padding-top: 1rem;
            margin-right: 1rem;
            padding-bottom: 1rem;
          }
          .detalles-compra-text26 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .detalles-compra-text29 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .detalles-compra-text30 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .detalles-compra-container05 {
              align-items: center;
            }
            .detalles-compra-text08 {
              color: var(--dl-color-gray-white);
              font-size: 1.2rem;
              font-family: Poppins;
            }
            .detalles-compra-text09 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .detalles-compra-text01 {
              font-size: 1rem;
            }
            .detalles-compra-text05 {
              font-size: 1rem;
            }
            .detalles-compra-text11 {
              font-size: 1rem;
            }
            .detalles-compra-text14 {
              font-size: 1rem;
            }
            .detalles-compra-text18 {
              font-size: 1rem;
            }
            .detalles-compra-text26 {
              font-size: 1.2rem;
            }
            .detalles-compra-text29 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .detalles-compra-container05 {
              height: 2rem;
            }
            .detalles-compra-text01 {
              font-size: 0.8rem;
            }
            .detalles-compra-text05 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .detalles-compra-text11 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .detalles-compra-text14 {
              font-size: 0.8rem;
            }
            .detalles-compra-text18 {
              font-size: 0.8rem;
            }
            .detalles-compra-btn-delete {
              width: 2rem;
              height: 2rem;
            }
            .detalles-compra-image1 {
              width: 1rem;
              height: 1rem;
            }
            .detalles-compra-container09 {
              width: 121px;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .detalles-compra-text26 {
              font-size: 0.8rem;
            }
            .detalles-compra-text29 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .detalles-compra-image {
              width: 1rem;
            }
            .detalles-compra-container03 {
              padding: 1rem;
              border-bottom-left-radius: 2rem;
              border-bottom-right-radius: 2rem;
            }
            .detalles-compra-container04 {
              align-items: center;
              flex-direction: row;
            }
            .detalles-compra-container05 {
              width: auto;
              height: auto;
              padding: 0.5rem;
              margin-top: 0rem;
              align-items: center;
              margin-left: 0rem;
              margin-right: 0rem;
              border-radius: 2rem;
              margin-bottom: 0rem;
              justify-content: center;
            }
            .detalles-compra-text01 {
              font-size: 0.7rem;
            }
            .detalles-compra-text05 {
              font-size: 0.7rem;
            }
            .detalles-compra-text08 {
              font-size: 0.7rem;
            }
            .detalles-compra-text11 {
              font-size: 0.7rem;
            }
            .detalles-compra-text14 {
              font-size: 0.7rem;
            }
            .detalles-compra-text18 {
              font-size: 0.7rem;
            }
            .detalles-compra-btn-delete {
              margin-top: 0rem;
            }
            .detalles-compra-lista {
              margin-bottom: 1rem;
            }
            .detalles-compra-encabezado {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .detalles-compra-text22 {
              width: 7rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .detalles-compra-text23 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .detalles-compra-text25 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-right: 1rem;
            }
            .detalles-compra-container09 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .detalles-compra-text26 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-family: Poppins;
            }
            .detalles-compra-text29 {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  )
}

DetallesCompra.defaultProps = {
  image_src3: '/eliminar-white-1500w.png',
  text11: 'Productos',
  image_src81: '/editar-white-1500h.png',
  image_alt3: 'image',
  text21: 'Precio',
  image_alt81: '',
  text31: 'Cantidad',
}

DetallesCompra.propTypes = {
  image_src3: PropTypes.string,
  text11: PropTypes.string,
  image_src81: PropTypes.string,
  image_alt3: PropTypes.string,
  text21: PropTypes.string,
  image_alt81: PropTypes.string,
  text31: PropTypes.string,
}

export default DetallesCompra
