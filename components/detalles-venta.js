import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import LineaVenta from './linea-venta'
import { useAppContext } from '../context/state'
import { parseFechaFront } from '../utils/utils'

const DetallesVenta = (props) => {
  const {showVentas} = useAppContext();
  const [showVenta, setShowVenta] = showVentas;
  const [venta, setVenta] = useState({});
  const [lineas, setLineas] = useState([]);
  let total = 0;

  useEffect(()=>{
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/${props.id}`;
    axios.get(url)
    .then(res => {
      setVenta(res.data);
    })
    .catch(error => {
      console.log(error);
    })

    url = `${apiHost}/api/ventas/${props.id}/lineas`;
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
      <div className="detalles-venta-container">
        <div className="detalles-venta-container1">
          <div className="popup-header">
            <span className="popup-header-title">DETALLES</span>
            <button type="button" className="detalles-venta-button button">
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="detalles-venta-image"
                onClick={()=>{setShowVenta(-1)}}
              />
            </button>
          </div>
          <div className="detalles-venta-container3">
            <div className="detalles-venta-container4">
              <div className="detalles-venta-container5">
                <span className="detalles-venta-text01">
                  <span className="detalles-venta-text02">ID:</span>
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
                  className="detalles-venta-text05"
                >
                  <span>{props.id}</span>
                  <br></br>
                </span>
                <span className="detalles-venta-text08">
                  <span className="detalles-venta-text09">CLIENTE:</span>
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
                  id="textoNombreDetallesVenta"
                  className="detalles-venta-text12"
                >
                  <span>{props.cliente}</span>
                  <br></br>
                </span>
                <span className="detalles-venta-text15">
                  <span className="detalles-venta-text16">FECHA:</span>
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
                  className="detalles-venta-text19"
                >
                  <span>{parseFechaFront(props.fecha)}</span>
                  <br></br>
                </span>
              </div>
              {/* <button
                id="botonEditarVenta"
                className="detalles-venta-btn-delete btnRounded"
              >
                <img
                  alt={props.image_alt81}
                  src="/editar-white-1500h.png"
                  className="detalles-venta-image1"
                />
              </button> */}
            </div>
            <div className="detalles-venta-lista">
              <div className="detalles-venta-encabezado popup-list-header">
                <div className="detalles-venta-container6">
                  <span className="detalles-venta-text23 list-header-col-productos">
                    {props.text11}
                  </span>
                  <span className="detalles-venta-text24 list-header-col-cantidad">
                    {props.text31}
                  </span>
                  <span className="detalles-venta-text25 list-header-col-precio">
                    {props.text21}
                  </span>
                </div>
                <span className="detalles-venta-text26 list-header-col-subtotal">
                  Sub Total
                </span>
              </div>
              <div className="popup-list-row">
                {lineas.map((linea) =>{
                  const subtotal = linea.precio_unitario * linea.cantidad;
                  total = total+subtotal;
                  return <LineaVenta linea={linea.linea} idProducto={linea.id_producto} cantidad={linea.cantidad} precioUnitario={linea.precio_unitario} nombre={linea.nombre} subtotal={subtotal}></LineaVenta>
                })}
              </div>
            </div>
            <div className="detalles-venta-container8 popup-total">
              <span className="detalles-venta-text27">
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
                className="detalles-venta-text30"
              >
                <span className="detalles-venta-text31">${total}</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .detalles-venta-container {
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
          .detalles-venta-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            max-width: 1300px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .detalles-venta-button {
            width: auto;
            height: auto;
            display: flex;
            transition: 0.3s;
            flex-direction: row;
          }
          .detalles-venta-button:hover {
            transform: scale(1.1);
          }
          .detalles-venta-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .detalles-venta-container3 {
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
          .detalles-venta-container4 {
            display: flex;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .detalles-venta-container5 {
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
          .detalles-venta-text01 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .detalles-venta-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-venta-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .detalles-venta-text08 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          .detalles-venta-text09 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-venta-text12 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 2rem;
          }
          .detalles-venta-text15 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .detalles-venta-text16 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-venta-text19 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 0rem;
          }
          .detalles-venta-btn-delete {
            width: 3rem;
            height: 3rem;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 0px;
            border-radius: 2rem;
            justify-content: flex-end;
            background-color: var(--dl-color-color-naranja);
          }
          .detalles-venta-btn-delete:hover {
            transform: scale(1.05);
          }
          .detalles-venta-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .detalles-venta-lista {
            display: flex;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .detalles-venta-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 1rem;
          }
          .detalles-venta-container6 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .detalles-venta-text23 {
            font-style: normal;
            font-weight: 600;
            margin-left: 0rem;
          }
          .detalles-venta-text24 {
            font-style: normal;
            font-weight: 600;
          }
          .detalles-venta-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .detalles-venta-text26 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .detalles-venta-container8 {
            height: auto;
            align-self: flex-end;
            padding-top: 1rem;
            margin-right: 1rem;
            padding-bottom: 1rem;
          }
          .detalles-venta-text27 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .detalles-venta-text30 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .detalles-venta-text31 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .detalles-venta-text01 {
              font-size: 1rem;
            }
            .detalles-venta-text05 {
              font-size: 1rem;
            }
            .detalles-venta-text08 {
              font-size: 1rem;
            }
            .detalles-venta-text12 {
              font-size: 1rem;
            }
            .detalles-venta-text15 {
              font-size: 1rem;
            }
            .detalles-venta-text19 {
              font-size: 1rem;
            }
            .detalles-venta-text27 {
              font-size: 1.2rem;
            }
            .detalles-venta-text30 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .detalles-venta-container5 {
              height: 2rem;
            }
            .detalles-venta-text01 {
              font-size: 0.8rem;
            }
            .detalles-venta-text05 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .detalles-venta-text08 {
              font-size: 0.8rem;
            }
            .detalles-venta-text12 {
              font-size: 0.8rem;
              margin-right: 0.5rem;
            }
            .detalles-venta-text15 {
              font-size: 0.8rem;
            }
            .detalles-venta-text19 {
              font-size: 0.8rem;
            }
            .detalles-venta-btn-delete {
              width: 2rem;
              height: 2rem;
            }
            .detalles-venta-image1 {
              width: 1rem;
              height: 1rem;
            }
            .detalles-venta-container8 {
              width: 121px;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .detalles-venta-text27 {
              font-size: 0.8rem;
            }
            .detalles-venta-text30 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .detalles-venta-container3 {
              padding: 1rem;
              border-bottom-left-radius: 2rem;
              border-bottom-right-radius: 2rem;
            }
            .detalles-venta-container4 {
              align-items: center;
              flex-direction: row;
            }
            .detalles-venta-container5 {
              width: auto;
              height: 2rem;
              padding: 0.5rem;
              margin-top: 0rem;
              align-items: center;
              margin-left: 0rem;
              margin-right: 0rem;
              border-radius: 2rem;
              margin-bottom: 0rem;
              justify-content: center;
            }
            .detalles-venta-text01 {
              font-size: 0.7rem;
            }
            .detalles-venta-text05 {
              font-size: 0.7rem;
            }
            .detalles-venta-text08 {
              font-size: 0.7rem;
            }
            .detalles-venta-text12 {
              font-size: 0.7rem;
            }
            .detalles-venta-text15 {
              font-size: 0.7rem;
            }
            .detalles-venta-text19 {
              font-size: 0.7rem;
            }
            .detalles-venta-btn-delete {
              margin-top: 0rem;
            }
            .detalles-venta-lista {
              margin-bottom: 1rem;
            }
            .detalles-venta-encabezado {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .detalles-venta-text23 {
              width: 7rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .detalles-venta-text24 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .detalles-venta-text26 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-right: 1rem;
            }
            .detalles-venta-container8 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .detalles-venta-text27 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-family: Poppins;
            }
            .detalles-venta-text30 {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  )
}

DetallesVenta.defaultProps = {
  image_src3: '/eliminar-white-1500w.png',
  text121: 'Cantidad',
  image_alt81: '',
  text21: 'Precio',
  image_src8: '6b40143d-c549-478e-9bf8-f69c18fbf2f4',
  text31: 'Cantidad',
  text11: 'Productos',
  text101: 'Nombre producto',
  text122: 'Cantidad',
  image_src81: '8bc19ae3-cdcf-445e-8519-963715cf9723',
  text102: 'Nombre producto',
  image_alt8: 'image',
  image_alt3: 'image',
}

DetallesVenta.propTypes = {
  image_src3: PropTypes.string,
  text121: PropTypes.string,
  image_alt81: PropTypes.string,
  text21: PropTypes.string,
  image_src8: PropTypes.string,
  text31: PropTypes.string,
  text11: PropTypes.string,
  text101: PropTypes.string,
  text122: PropTypes.string,
  image_src81: PropTypes.string,
  text102: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt3: PropTypes.string,
}

export default DetallesVenta
