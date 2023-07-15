import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useAppContext } from "../context/state";
import LineaVentaEditable from "./linea-venta-editable";

const AgregarVenta = (props) => {
  const porcGanancia = 20;

  const [cliente, setCliente] = useState("cli1");
  const [lineas, setLineas] = useState([]);
  const [idVenta, setIdVenta] = useState(0);
  const [total, setTotal] = useState(0);
  const [cantLineas, setCantLineas] = useState(
    Array.apply(null, Array(30)).map(function () {})
  );
  const { addVentas } = useAppContext();
  const [showAddVentas, setShowAddVentas] = addVentas;

  const addVenta = () => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas`;

    axios
      .post(url, {
        cliente: cliente,
      })
      .then((res) => {
        setIdVenta(res.data);
        lineas.forEach((linea, index) => {
          linea ? addLinea(res.data, index + 1, linea) : null;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addLinea = (idVenta, idLinea, linea) => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/${idVenta}/${idLinea}`;

    axios
      .post(url, {
        id_producto: linea.idProducto,
        cantidad: linea.cantidad,
        precio_unitario: (linea.precioUnitario * (porcGanancia + 100)) / 100,
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

  return (
    <>
      <div className="agregar-venta-container">
        <div className="agregarVenta-main">
          <div className="popup-header">
            <span className="popup-header-title">AGREGAR VENTA</span>
            <button
              type="button"
              className="popup-close-button button"
              onClick={() => {
                setShowAddVentas(false);
              }}
            >
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="popup-close-button-img"
              />
            </button>
          </div>
          <div className="agregarVenta-content">
            <div className="agregarVenta-content-header">
              <div className="agregarVenta-searchBar">
                <span className="label popup-searchbar-label">
                  <span>Cliente:</span>
                  <br></br>
                </span>
                <input
                  type="text"
                  maxLength={50}
                  placeholder="Nombre (opcional)"
                  className="popup-searchbar-input input agregar-venta-textinput"
                  onChange={(e) => {
                    setCliente(e.target.value);
                  }}
                />
                {/* <span className="label popup-searchbar-label">
                  <span>Ganancia:</span>
                  <br></br>
                </span>
                <input
                  type="text"
                  placeholder="20%"
                  className="popup-searchbar-input input agregar-venta-textinput"
                  onChange={(e)=> {setGanancia(Number(e.target.value))}}
                /> */}
              </div>
              {/* <button
                id="botonAgregarLineaVenta"
                className="agregar-venta-btn-delete popup-addbutton btnRounded"
              >
                <img
                  alt="image"
                  src="/editar-white-1500h.png"
                  className="popup-addbutton-img"
                />
              </button> */}
            </div>
            <div className="popup-list">
              <div className="agregar-venta-encabezado popup-list-header">
                <div className="popup-list-header-columns">
                  <span className="agregar-venta-text03 list-header-col-productos">
                    {props.text1}
                  </span>
                  <span className="agregar-venta-text04 list-header-col-cantidad">
                    {props.text3}
                  </span>
                  <span className="agregar-venta-text05 list-header-col-precio">
                    {props.text2}
                  </span>
                </div>
                <span className="agregar-venta-text06 list-header-col-subtotal">
                  Sub Total
                </span>
              </div>
              <div className="popup-list-row agregar-venta-lineas">
                {cantLineas.map((linea, index) => {
                  return (
                    <LineaVentaEditable
                      key={index + 1}
                      id={index}
                      returnLinea={returnLinea}
                    ></LineaVentaEditable>
                  );
                })}
              </div>
            </div>
            <div className="popup-footer">
              <button
                className="agregar-venta-button1 button"
                onClick={() => {
                  addVenta();
                  setShowAddVentas(false);
                  props.update();
                }}
              >
                <span className="agregar-venta-text07">GUARDAR</span>
              </button>
              <div className="popup-total agregar-venta-container09">
                <span className="agregar-venta-text08">
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
                  className="agregar-venta-text11"
                >
                  <span className="agregar-venta-text12">${total}</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .agregar-venta-container {
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
          .agregar-venta-btn-delete {
            transition: 0.3s;
          }
          .agregar-venta-btn-delete:hover {
            transform: scale(1.05);
          }
          .agregar-venta-lineas {
            padding-top: 6rem;
            max-height: 40vh;
            overflow-y: scroll;
          }
          .agregar-venta-encabezado {
            height: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .agregar-venta-text03 {
            font-style: normal;
            font-weight: 600;
            margin-left: 0rem;
          }
          .agregar-venta-text04 {
            font-style: normal;
            font-weight: 600;
          }
          .agregar-venta-text05 {
            font-style: normal;
            font-weight: 600;
            margin-right: 0px;
          }
          .agregar-venta-text06 {
            font-style: normal;
            font-weight: 600;
            margin-right: 3rem;
          }
          .agregar-venta-button1 {
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
          .agregar-venta-button1:hover {
            transform: scale(1.05);
          }
          .agregar-venta-text07 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
          }
          .agregar-venta-text08 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            margin-top: 0rem;
            font-family: Poppins;
            margin-left: 0px;
            margin-right: 0em;
          }
          .agregar-venta-text11 {
            color: var(--dl-color-gray-white);
            width: auto;
            font-size: 1.5rem;
            align-self: center;
            font-family: Poppins;
          }
          .agregar-venta-text12 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .agregar-venta-button1 {
              width: 8rem;
              height: 3rem;
            }
            .agregar-venta-text07 {
              font-size: 1.2rem;
            }
            .agregar-venta-text08 {
              font-size: 1.2rem;
            }
            .agregar-venta-text11 {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 767px) {
            .agregar-venta-button1 {
              width: 6rem;
            }
            .agregar-venta-text07 {
              color: var(--dl-color-gray-white);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
            }
            .agregar-venta-text08 {
              font-size: 0.8rem;
            }
            .agregar-venta-text11 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .agregar-venta-textinput {
              width: auto;
              padding: 0.5rem;
              font-size: 0.7rem;
            }
            .agregar-venta-encabezado {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .agregar-venta-text03 {
              width: 5rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .agregar-venta-text04 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .agregar-venta-text06 {
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-right: 2.5rem;
            }
            .agregar-venta-button1 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .agregar-venta-container09 {
              width: auto;
              height: auto;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .agregar-venta-text08 {
              color: var(--dl-color-gray-white);
              font-family: Poppins;
            }
          }
        `}
      </style>
    </>
  );
};

AgregarVenta.defaultProps = {
  text1: "Productos",
  image_src11: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  image_alt3: "image",
  image_src14: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  text102: "Nombre producto",
  image_alt14: "image",
  text22: "Precio",
  image_src1411: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  text3: "Cantidad",
  image_src12: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  image_src3: "/eliminar-white-1500w.png",
  image_alt12: "image",
  text12: "Cantidad",
  image_alt1411: "image",
  text10: "Nombre producto",
  text21: "Precio",
  image_alt141: "image",
  text32: "Cantidad",
  image_alt31: "image",
  text121: "Cantidad",
  text11: "Productos",
  image_src31: "fb64d2e8-10a2-4ce8-9ef8-5da8c5d4ddc3",
  image_src1: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  text2: "Precio",
  image_alt1: "image",
  text13: "Productos",
  image_src141: "1d5f9af0-b111-48de-9013-6ee131d9957b",
  image_alt11: "image",
  text31: "Cantidad",
  image_src: "fb64d2e8-10a2-4ce8-9ef8-5da8c5d4ddc3",
  text101: "Nombre producto",
  image_alt: "image",
  text122: "Cantidad",
};

AgregarVenta.propTypes = {
  text1: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src14: PropTypes.string,
  text102: PropTypes.string,
  image_alt14: PropTypes.string,
  text22: PropTypes.string,
  image_src1411: PropTypes.string,
  text3: PropTypes.string,
  image_src12: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt12: PropTypes.string,
  text12: PropTypes.string,
  image_alt1411: PropTypes.string,
  text10: PropTypes.string,
  text21: PropTypes.string,
  image_alt141: PropTypes.string,
  text32: PropTypes.string,
  image_alt31: PropTypes.string,
  text121: PropTypes.string,
  text11: PropTypes.string,
  image_src31: PropTypes.string,
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  image_alt1: PropTypes.string,
  text13: PropTypes.string,
  image_src141: PropTypes.string,
  image_alt11: PropTypes.string,
  text31: PropTypes.string,
  image_src: PropTypes.string,
  text101: PropTypes.string,
  image_alt: PropTypes.string,
  text122: PropTypes.string,
};

export default AgregarVenta;
