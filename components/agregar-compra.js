import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useAppContext } from "../context/state";
import LineaCompraEditable from "./linea-compra-editable";

const AgregarCompra = (props) => {
  const [proveedor, setProveedor] = useState("prov1");
  const [lineas, setLineas] = useState([]);
  const [idCompra, setIdCompra] = useState(0);
  const [total, setTotal] = useState(0);
  const [cantLineas, setCantLineas] = useState(
    Array.apply(null, Array(30)).map(function () {})
  );
  const { addCompras } = useAppContext();
  const [showAddCompras, setShowAddCompras] = addCompras;

  const addCompra = () => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/compras`;

    axios
      .post(url, {
        proveedor: proveedor,
      })
      .then((res) => {
        setIdCompra(res.data);
        lineas.forEach((linea, index) => {
          linea ? addLinea(res.data, index + 1, linea) : null;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addLinea = (idCompra, idLinea, linea) => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/compras/${idCompra}/${idLinea}`;

    axios
      .post(url, {
        id_producto: linea.idProducto,
        cantidad: linea.cantidad,
        precio_unitario: linea.precioUnitario,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const returnLinea = (id, idProducto, cantidad, precioUnitario) => {
    const nuevasLineas = lineas;
    nuevasLineas[id] = { idProducto, cantidad, precioUnitario };
    setLineas(nuevasLineas);
    setTotal(total + cantidad * precioUnitario);
  };

  const handleKeyDown = (event) => {
    const maxLength = 20; // Establece la longitud máxima permitida

    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };

  return (
    <>
      <div className="agregar-compra-container">
        <div className="agregar-compra-container01">
          <div className="popup-header">
            <span className="popup-header-title">AGREGAR COMPRA</span>
            <button type="button" className="agregar-compra-button button" onClick={()=>{setShowAddCompras(false)}}>
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="agregar-compra-image"
              />
            </button>
          </div>
          <div className="agregar-compra-container03">
            <div className="agregar-compra-container04">
              <div className="agregar-compra-container05">
                <span className="label popup-searchbar-label">
                  <span>Proveedor:</span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="Nombre (opcional)"
                  className="popup-searchbar-input input agregar-compra-textinput"
                  //Segun la base de datos el proveedor tiene longitud de varchar(50)
                  maxLength={50}
                  onChange={(e) => {
                    setProveedor(e.target.value);
                  }}
                />
              </div>
              {/* <button
                id="botonAgregarLineaVenta"
                className="agregar-compra-btn-delete popup-addbutton btnRounded"
                onClick={()=>{
                  const newLineas = cantLineas;
                  newLineas.push(0);
                  setCantLineas(newLineas);
                  console.log(cantLineas);
                }}
              >
                <img
                  alt="image"
                  src="/mas-1500h.png"
                  className="popup-addbutton-img"
                />
              </button> */}
            </div>
            <div className="agregar-compra-lista">
              <div className="agregar-compra-encabezado popup-list-header">
                <div className="agregar-compra-container06">
                  <span className="agregar-compra-text03 list-header-col-productos">
                    {props.text1}
                  </span>
                  <span className="agregar-compra-text04 list-header-col-cantidad">
                    {props.text3}
                  </span>
                  <span className="agregar-compra-text05 list-header-col-precio">
                    {props.text2}
                  </span>
                </div>
                <div className="agregar-compra-container07">
                  <span className="agregar-compra-text06 list-header-col-subtotal">
                    Sub Total
                  </span>
                </div>
              </div>
              <div className="popup-list-row agregar-compra-lineas">
                {cantLineas.map((linea, index) => {
                  return (
                    <LineaCompraEditable
                      key={index + 1}
                      id={index}
                      returnLinea={returnLinea}
                    ></LineaCompraEditable>
                  );
                })}
              </div>
            </div>
            <div className="agregar-compra-container09">
              <button
                className="agregar-compra-button1 button"
                onClick={() => {
                  addCompra();
                  setShowAddCompras(false);
                  props.update();
                }}
              >
                <span className="agregar-compra-text07">GUARDAR</span>
              </button>
              <div className="popup-total agregar-compra-container10">
                <span className="agregar-compra-text08">
                  <span>
                    TOTAL:
                    <span
                      dangerouslySetInnerHTML={{
                        __html: " ",
                      }}
                    />
                  </span>
                  <br></br>
                </span>
                <span
                  id="textoTotalAgregarVenta"
                  className="agregar-compra-text11"
                >
                  <span className="agregar-compra-text12">${total}</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .agregar-compra-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(43, 43, 40, 0.5);
          }
          .agregar-compra-container01 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            max-width: 1300px;
            max-height: 80vh;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .agregar-compra-button {
            width: auto;
            height: auto;
            display: flex;
            transition: 0.3s;
            flex-direction: row;
          }
          .agregar-compra-button:hover {
            transform: scale(1.1);
          }
          .agregar-compra-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .agregar-compra-container03 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            border-radius: 3rem;
            flex-direction: column;
            background-color: var(--dl-color-color-blanco);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .agregar-compra-container04 {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-bottom: 1rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-compra-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .agregar-compra-btn-delete {
            transition: 0.3s;
            justify-content: center;
          }
          .agregar-compra-btn-delete:hover {
            transform: scale(1.05);
          }
          .agregar-compra-lista {
            width: 100%;
            display: flex;
            margin-bottom: 2rem;
            flex-direction: column;
          }
          .agregar-compra-lineas {
            padding-top: 6rem;
            max-height: 40vh;
            overflow-y: scroll;
          }
          .agregar-compra-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
            padding-bottom: 1rem;
          }
          .agregar-compra-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .agregar-compra-text03 {
            font-style: normal;
            font-weight: 600;
          }
          .agregar-compra-text04 {
            font-style: normal;
            font-weight: 600;
          }
          .agregar-compra-text05 {
            font-style: normal;
            font-weight: 600;
          }
          .agregar-compra-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .agregar-compra-text06 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .agregar-compra-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-right: 1rem;
            justify-content: space-between;
          }
          .agregar-compra-button1 {
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
          .agregar-compra-button1:hover {
            transform: scale(1.05);
          }
          .agregar-compra-text07 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .agregar-compra-text08 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0em;
          }
          .agregar-compra-text11 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .agregar-compra-text12 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 1200px) {
            .agregar-compra-container05 {
              align-items: center;
            }
          }
          @media (max-width: 991px) {
            .agregar-compra-button1 {
              width: 8rem;
              height: 3rem;
            }
            .agregar-compra-text07 {
              font-size: 1.2rem;
            }
            .agregar-compra-text08 {
              font-size: 1.2rem;
            }
            .agregar-compra-text11 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .agregar-compra-image {
              width: 1rem;
            }
            .agregar-compra-container05 {
              width: 80%;
            }
            .agregar-compra-button1 {
              width: 6rem;
            }
            .agregar-compra-text07 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
            }
            .agregar-compra-text08 {
              font-size: 0.8rem;
            }
            .agregar-compra-text11 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .agregar-compra-container03 {
              padding: 1rem;
              border-bottom-left-radius: 2rem;
              border-bottom-right-radius: 2rem;
            }
            .agregar-compra-container04 {
              margin-top: 0rem;
            }
            .agregar-compra-textinput {
              width: auto;
              padding: 0.5rem;
              font-size: 0.7rem;
            }
            .agregar-compra-encabezado {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .agregar-compra-text03 {
              width: 5rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .agregar-compra-text04 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .agregar-compra-text06 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-right: 2.5rem;
            }
            .agregar-compra-button1 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .agregar-compra-container10 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .agregar-compra-text08 {
              color: var(--dl-color-gray-white);
              font-family: Poppins;
            }
          }
        `}
      </style>
    </>
  );
};

AgregarCompra.defaultProps = {
  text3: "Cantidad",
  text1: "Productos",
  text2: "Precio",
  image_src3: "/eliminar-white-1500w.png",
  image_alt3: "image",
};

AgregarCompra.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt3: PropTypes.string,
};

export default AgregarCompra;
