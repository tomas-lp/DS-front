import React, { useState } from "react";

import PropTypes from "prop-types";
import SelectorProductos from "./selector-productos";
import axios from "axios";

const LineaVentaEditable = (props) => {
  const [showListaProductos, setShowListaProductos] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const getProductoById = (id) => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos/${id}`;
    axios
      .get(url)
      .then((res) => {
        setProducto(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const update = (id, nombre) => {
    setBusqueda(nombre);
    setShowListaProductos(false);
    getProductoById(id);
  };
  const handleKeyDown = (event) => {
    const maxLength = 3; // Establece la longitud máxima permitida

    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };
  return (
    <>
      <div className="linea-venta-editable-container list-item fila-tabla">
        <div className="linea-venta-editable-container1">
          <input
            type="text"
            placeholder="Nombre"
            maxLength={20}
            className="linea-venta-editable-textinput input"
            value={busqueda}
            onFocus={() => {
              setShowListaProductos(true);
            }}
            autoComplete="off"
            onChange={(e) => {
              setBusqueda(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Cantidad"
            maxLength={3}
            onKeyDown={handleKeyDown}
            className="linea-venta-editable-textinput1 input"
            onBlur={(e) => {
              setCantidad(e.target.value);
              setTotal(e.target.value * producto.precioVenta);
              props.returnLinea(
                props.id,
                producto.id,
                e.target.value,
                producto.precioVenta
              );
            }}
          />
          <span className="linea-venta-editable-text campo-tabla">
            ${producto.precioVenta}
          </span>
        </div>
        <div className="linea-venta-editable-container2">
          <div className="linea-venta-editable-container3">
            <span className="linea-venta-editable-text1 list-header-col-subtotal">
              ${total}
            </span>
            {/* <button
              type="button"
              className="linea-venta-editable-button button"
            >
              <img
                alt={props.image_alt141}
                src={props.image_src141}
                className="linea-venta-editable-image"
              />
            </button> */}
            {showListaProductos ? (
              <SelectorProductos
                key={props.id}
                input={busqueda}
                update={update}
              ></SelectorProductos>
            ) : null}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .linea-venta-editable-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
            align-items: center;
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
          .linea-venta-editable-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .linea-venta-editable-textinput {
            color: var(--dl-color-color-blanco);
            width: 14rem;
            height: auto;
            padding: 0px;
            font-size: 1.2rem;
            text-align: center;
            font-family: Poppins;
            margin-left: 0rem;
            border-color: rgba(0, 0, 0, 0);
            margin-right: 1rem;
            background-color: transparent;
          }
          .linea-venta-editable-textinput1 {
            color: var(--dl-color-color-blanco);
            width: 6rem;
            height: auto;
            padding: 0px;
            font-size: 1.2rem;
            text-align: center;
            font-family: Poppins;
            margin-left: 1rem;
            border-color: rgba(0, 0, 0, 0);
            margin-right: 1rem;
            background-color: transparent;
          }
          .linea-venta-editable-text {
            color: var(--dl-color-color-blanco);
            width: 8rem;
            font-size: 1.2rem;
            min-width: auto;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .linea-venta-editable-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .linea-venta-editable-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .linea-venta-editable-text1 {
            margin-right: 2rem;
          }
          .linea-venta-editable-button {
            width: auto;
            display: flex;
            padding: 0px;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(0, 0, 0, 0);
            flex-direction: row;
            justify-content: center;
            background-color: transparent;
          }
          .linea-venta-editable-button:hover {
            transform: scale(1.1);
          }
          .linea-venta-editable-image {
            width: 1rem;
            height: 1rem;
            align-self: center;
            object-fit: cover;
          }
          @media (max-width: 1200px) {
            .linea-venta-editable-container {
              height: 4rem;
              align-items: center;
            }
            .linea-venta-editable-textinput {
              margin-right: 1rem;
            }
            .linea-venta-editable-textinput1 {
              margin-left: 1rem;
              margin-right: 1rem;
            }
          }
          @media (max-width: 991px) {
            .linea-venta-editable-textinput {
              width: 12rem;
              font-size: 0.8rem;
            }
            .linea-venta-editable-textinput1 {
              width: 5rem;
              font-size: 0.8rem;
            }
            .linea-venta-editable-text {
              width: 5rem;
              font-size: 0.8rem;
            }
          }
          @media (max-width: 767px) {
            .linea-venta-editable-container {
              height: 2rem;
              padding-top: 0.5rem;
              border-radius: 0px;
              padding-bottom: 0.5rem;
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
            .linea-venta-editable-textinput {
              width: 8rem;
              font-size: 0.6rem;
            }
            .linea-venta-editable-textinput1 {
              width: 4rem;
              font-size: 0.6rem;
            }
            .linea-venta-editable-text {
              display: none;
            }
            .linea-venta-editable-image {
              width: 0.8rem;
              height: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .linea-venta-editable-container {
              height: 2rem;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .linea-venta-editable-textinput {
              margin-right: 0rem;
            }
            .linea-venta-editable-textinput1 {
              margin-left: 1rem;
              margin-right: 0rem;
            }
            .linea-venta-editable-text1 {
              font-size: 0.6rem;
              margin-right: 1rem;
            }
            .linea-venta-editable-image {
              width: 0.6rem;
              height: auto;
            }
          }
        `}
      </style>
    </>
  );
};

LineaVentaEditable.defaultProps = {
  image_src141: "/eliminar-white-1500h.png",
  image_alt141: "image",
};

LineaVentaEditable.propTypes = {
  image_src141: PropTypes.string,
  image_alt141: PropTypes.string,
};

export default LineaVentaEditable;
