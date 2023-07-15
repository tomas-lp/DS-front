import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { useAppContext } from '../context/state'
import axios from 'axios'
import { parseFechaFront } from '../utils/utils'

const DetallesProducto = (props) => {
  const {showProductos} = useAppContext();
  const [showProducto, setShowProducto] = showProductos;
  const [producto, setProducto] = useState({});

  useEffect(()=>{
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos/${props.id}`;
    axios.get(url)
    .then(res => {
        setProducto(res.data);
    })
    .catch(error => {
        console.log(error);
    })
  }, [])

  return (
    <>
      <div className="detalles-producto-container">
        <div className="detalles-producto-container01">
          <div className="popup-header">
            <span className="detalles-producto-text">DETALLES</span>
            <button
              id="botonCerrarDetallesProducto"
              type="button"
              className="detalles-producto-button button"
            >
              <img
                id="botonCerrarPopUp"
                alt={props.image_alt3}
                src={props.image_src3}
                className="detalles-producto-image"
                onClick={()=>{setShowProducto(-1)}} //Al hacer click en el boton cerrar, ya no se muestra el producto
              />
            </button>
          </div>
          <div className="detalles-producto-container03">
            <div className="detalles-producto-container04">
              <div className="detalles-producto-container05">
                <span className="detalles-producto-text01">
                  <span className="detalles-producto-text02">ID:</span>
                  <br></br>
                </span>
                <span
                  id="textoIdDetallesProducto"
                  className="detalles-producto-text05"
                >
                  {producto.id}
                  <br></br>
                </span>
              </div>
              {/* <button
                id="botonEditarProducto"
                className="detalles-producto-btn-delete btnRounded"
              >
                <img
                  alt={props.image_alt81}
                  src={props.image_src81}
                  className="detalles-producto-image1"
                />
              </button> */}
            </div>
            <div className="detalles-producto-container06">
              <div className="detalles-producto-container07">
                <div className="detalles-producto-container08">
                  <span className="detalles-producto-text08">
                    <span className="detalles-producto-text09">Nombre:</span>
                    <br></br>
                  </span>
                  <span className="detalles-producto-text11">
                    <span className="detalles-producto-text12">{producto.nombre}</span>
                    <br></br>
                  </span>
                </div>
                <div className="detalles-producto-container09">
                  <span className="detalles-producto-text14">
                    <span className="detalles-producto-text15">Categoria:</span>
                    <br></br>
                  </span>
                  <span className="detalles-producto-text17">
                    <span className="detalles-producto-text18">{producto.categoria}</span>
                    <br></br>
                  </span>
                </div>
                <div className="detalles-producto-container10">
                  <span className="detalles-producto-text20">
                    <span>
                      Último ingreso:
                    </span>
                    <br></br>
                  </span>
                  <span className="detalles-producto-text24">
                    <span className="detalles-producto-text25">{parseFechaFront(producto.fecha_actualizacion)}</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="detalles-producto-container11">
                <div className="detalles-producto-container12">
                  <span className="detalles-producto-text27">
                    <span className="detalles-producto-text28">Precio:</span>
                    <br></br>
                  </span>
                  <span className="detalles-producto-text30">
                    <span>{producto.precioVenta}</span>
                    <br></br>
                  </span>
                </div>
                <div className="detalles-producto-container13">
                  <span className="detalles-producto-text33">
                    <span className="detalles-producto-text34">Cantidad:</span>
                    <br></br>
                  </span>
                  <span className="detalles-producto-text36">
                    <span>{producto.stock}</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .detalles-producto-container {
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
          .detalles-producto-container01 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            max-width: 600px;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .detalles-producto-text {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 2rem;
          }
          .detalles-producto-button {
            width: auto;
            height: auto;
            display: flex;
            transition: 0.3s;
            padding-top: 0.5rem;
            padding-left: 0.5rem;
            padding-right: 0rem;
            flex-direction: row;
            padding-bottom: 0.5rem;
          }
          .detalles-producto-button:hover {
            transform: scale(1.1);
          }
          .detalles-producto-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .detalles-producto-container03 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            align-self: center;
            border-radius: 3rem;
            flex-direction: column;
            padding-bottom: 2rem;
            background-color: var(--dl-color-color-blanco);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .detalles-producto-container04 {
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            margin-bottom: 2rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .detalles-producto-container05 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: 0rem;
            padding-top: 1rem;
            margin-right: 0rem;
            padding-left: 2rem;
            border-radius: 2rem;
            padding-right: 2rem;
            flex-direction: row;
            padding-bottom: 1rem;
            justify-content: flex-start;
            background-color: var(--dl-color-color-naranja);
          }
          .detalles-producto-text01 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0rem;
          }
          .detalles-producto-text02 {
            font-style: normal;
            font-weight: 700;
          }
          .detalles-producto-text05 {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0.5rem;
            margin-right: 0rem;
          }
          .detalles-producto-btn-delete {
            width: 3rem;
            height: 3rem;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 0px;
            border-radius: 2rem;
            justify-content: center;
            background-color: var(--dl-color-color-naranja);
          }
          .detalles-producto-btn-delete:hover {
            transform: scale(1.05);
          }
          .detalles-producto-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .detalles-producto-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: space-between;
          }
          .detalles-producto-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: 1rem;
            flex-direction: column;
          }
          .detalles-producto-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 2rem;
            justify-content: space-between;
          }
          .detalles-producto-text08 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            margin-right: 1rem;
          }
          .detalles-producto-text09 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-text11 {
            color: var(--dl-color-gray-500);
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            margin-left: 0rem;
          }
          .detalles-producto-container09 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 2rem;
            justify-content: space-between;
          }
          .detalles-producto-text14 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            margin-right: 1rem;
          }
          .detalles-producto-text15 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-text17 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            margin-left: 0rem;
          }
          .detalles-producto-text18 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-container10 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 1rem;
            justify-content: space-between;
          }
          .detalles-producto-text20 {
            color: var(--dl-color-gray-500);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            margin-right: 1rem;
          }
          .detalles-producto-text24 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            margin-left: 0rem;
          }
          .detalles-producto-text25 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-left: 1rem;
            flex-direction: column;
          }
          .detalles-producto-container12 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 2rem;
            justify-content: space-between;
          }
          .detalles-producto-text27 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            margin-right: 1rem;
          }
          .detalles-producto-text28 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-text30 {
            color: var(--dl-color-gray-500);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            text-align: center;
            font-family: Poppins;
            margin-left: 0rem;
          }
          .detalles-producto-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-bottom: 2rem;
            justify-content: space-between;
          }
          .detalles-producto-text33 {
            color: var(--dl-color-color-negro);
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            font-family: Poppins;
            font-weight: 700;
            margin-right: 1rem;
          }
          .detalles-producto-text34 {
            color: var(--dl-color-gray-500);
          }
          .detalles-producto-text36 {
            color: var(--dl-color-gray-500);
            width: auto;
            font-size: 1.2rem;
            align-self: center;
            text-align: center;
            font-family: Poppins;
            margin-left: 0rem;
          }
          @media (max-width: 991px) {
            .detalles-producto-container06 {
              width: auto;
            }
            .detalles-producto-container07 {
              margin-right: 1rem;
            }
            .detalles-producto-container08 {
              width: auto;
              justify-content: flex-start;
            }
            .detalles-producto-text08 {
              margin-right: 0.5rem;
            }
            .detalles-producto-text11 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .detalles-producto-container09 {
              width: auto;
              justify-content: flex-start;
            }
            .detalles-producto-text14 {
              margin-right: 0.5rem;
            }
            .detalles-producto-text17 {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .detalles-producto-container10 {
              justify-content: flex-start;
            }
            .detalles-producto-text20 {
              margin-right: 0.5rem;
            }
            .detalles-producto-text24 {
              width: auto;
            }
            .detalles-producto-container11 {
              margin-left: 0rem;
            }
            .detalles-producto-container12 {
              justify-content: flex-start;
            }
            .detalles-producto-text27 {
              margin-right: 0.5rem;
            }
            .detalles-producto-text30 {
              margin-left: 0.5rem;
            }
            .detalles-producto-container13 {
              justify-content: flex-start;
            }
            .detalles-producto-text33 {
              margin-right: 0.5rem;
            }
            .detalles-producto-text36 {
              margin-left: 0.5rem;
            }
          }
          @media (max-width: 767px) {
            .detalles-producto-container05 {
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .detalles-producto-btn-delete {
              width: 2.5rem;
              height: 2.5rem;
            }
            .detalles-producto-container06 {
              width: 347px;
            }
            .detalles-producto-container07 {
              margin-right: 0.5rem;
              justify-content: center;
            }
            .detalles-producto-text08 {
              font-size: 1rem;
            }
            .detalles-producto-text11 {
              font-size: 1rem;
              margin-left: 0.5rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .detalles-producto-text14 {
              font-size: 1rem;
            }
            .detalles-producto-text17 {
              font-size: 1rem;
              margin-left: 0.5rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .detalles-producto-container10 {
              width: auto;
            }
            .detalles-producto-text20 {
              color: var(--dl-color-gray-500);
              font-size: 1rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 700;
              margin-right: 0rem;
            }
            .detalles-producto-text24 {
              font-size: 1rem;
              margin-left: 0.5rem;
            }
            .detalles-producto-text27 {
              font-size: 1rem;
            }
            .detalles-producto-text30 {
              font-size: 1rem;
            }
            .detalles-producto-text33 {
              font-size: 1rem;
            }
            .detalles-producto-text36 {
              font-size: 1rem;
            }
          }
          @media (max-width: 530px) {
            .detalles-producto-text {
              font-size: 1.2rem;
              margin-right: 0rem;
            }
            .detalles-producto-image {
              width: 1rem;
            }
            .detalles-producto-container05 {
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .detalles-producto-text01 {
              font-size: 1.2rem;
            }
            .detalles-producto-text05 {
              font-size: 1.2rem;
              margin-left: 0.5rem;
            }
            .detalles-producto-container06 {
              width: 326px;
              flex-direction: column;
            }
            .detalles-producto-container07 {
              width: 100%;
              padding: 1rem;
              margin-right: 0rem;
              padding-right: 1rem;
            }
            .detalles-producto-text08 {
              font-size: 1.2rem;
            }
            .detalles-producto-text11 {
              color: var(--dl-color-color-negro);
              font-size: 1.2rem;
              font-family: Poppins;
              margin-left: 0.5rem;
            }
            .detalles-producto-text12 {
              color: var(--dl-color-gray-500);
            }
            .detalles-producto-text14 {
              font-size: 1.2rem;
            }
            .detalles-producto-text17 {
              font-size: 1.2rem;
              margin-left: 0.5rem;
            }
            .detalles-producto-container10 {
              margin-bottom: 0rem;
            }
            .detalles-producto-text20 {
              font-size: 1.2rem;
            }
            .detalles-producto-text24 {
              font-size: 1.2rem;
              margin-left: 0.5rem;
            }
            .detalles-producto-container11 {
              width: 100%;
              padding: 1rem;
              margin-left: 0rem;
              margin-bottom: 0rem;
              flex-direction: column;
              justify-content: space-between;
            }
            .detalles-producto-container12 {
              width: auto;
              margin-bottom: 2rem;
            }
            .detalles-producto-text27 {
              font-size: 1.2rem;
            }
            .detalles-producto-text30 {
              color: var(--dl-color-gray-500);
              font-size: 1.2rem;
              font-family: Poppins;
              margin-left: 0.5rem;
            }
            .detalles-producto-container13 {
              width: auto;
              margin-bottom: 0rem;
            }
            .detalles-producto-text33 {
              font-size: 1.2rem;
            }
            .detalles-producto-text36 {
              font-size: 1.2rem;
              margin-left: 0.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

DetallesProducto.defaultProps = {
  image_alt81: '',
  image_src3: '/eliminar-white-1500w.png',
  image_alt3: 'image',
  image_src81: '/editar-white-1500h.png',
}

DetallesProducto.propTypes = {
  image_alt81: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src81: PropTypes.string,
}

export default DetallesProducto
