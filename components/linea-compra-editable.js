import React, { useState } from "react";

import PropTypes from "prop-types";
import SelectorProductos from "./selector-productos";
import axios from "axios";

const LineaCompraEditable = (props) => {
  const [showListaProductos, setShowListaProductos] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleKeyDown = (event) => {
    const maxLength = 3; // Establece la longitud máxima permitida

    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };

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

  return (
    <>
      <div
        className={`linea-compra-editable-container list-item fila-tabla ${props.rootClassName} `}
      >
        <div className="linea-compra-editable-container1">
          <input
            type="text"
            id="InputNombreAgregarVenta"
            placeholder="Nombre"
            maxLength={20}
            value={busqueda}
            className="linea-compra-editable-textinput input"
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
            maxLength={3}
            id="InputCantidadAgregarVenta"
            placeholder="Cantidad"
            onKeyDown={handleKeyDown}
            className="linea-compra-editable-textinput1 input"
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
          <span
            id="textoPrecioAgregarVenta"
            className="linea-compra-editable-text campo-tabla"
          >
            ${producto.precioVenta}
          </span>
        </div>
        <div className="linea-compra-editable-container2">
          <span
            id="textoSubtotalAgregarVenta"
            className="linea-compra-editable-text1 campo-tabla"
          >
            {total}
          </span>
          {/* <button
            id="botonEliminarLineaAgregarVenta"
            type="button"
            className="linea-compra-editable-button button"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="linea-compra-editable-image"
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
      <style jsx>
        {`
          .linea-compra-editable-container {
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
          .linea-compra-editable-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
          }
          .linea-compra-editable-textinput {
            color: var(--dl-color-color-blanco);
            width: 14rem;
            height: auto;
            padding: 0px;
            font-size: 1.2rem;
            text-align: center;
            font-family: Poppins;
            border-color: rgba(0, 0, 0, 0);
            margin-right: 1rem;
            background-color: transparent;
          }
          .linea-compra-editable-textinput1 {
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
          .linea-compra-editable-text {
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
          .linea-compra-editable-container2 {
            flex: 0 0 auto;
            width: auto;
            height: 100%;
            display: flex;
            align-items: center;
          }
          .linea-compra-editable-text1 {
            color: var(--dl-color-color-blanco);
            width: 6rem;
            font-size: 1.2rem;
            min-width: auto;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 0rem;
            margin-right: 2rem;
          }
          .linea-compra-editable-button {
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
          .linea-compra-editable-button:hover {
            transform: scale(1.1);
          }
          .linea-compra-editable-image {
            width: 1rem;
            height: auto;
            align-self: center;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .linea-compra-editable-container {
              height: 3rem;
            }
            .linea-compra-editable-textinput {
              width: 12rem;
              font-size: 0.8rem;
            }
            .linea-compra-editable-textinput1 {
              width: 5rem;
              font-size: 0.8rem;
            }
            .linea-compra-editable-text {
              width: 5rem;
              font-size: 0.8rem;
            }
            .linea-compra-editable-text1 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 767px) {
            .linea-compra-editable-container {
              height: 2rem;
            }
            .linea-compra-editable-textinput {
              width: 8rem;
              font-size: 0.6rem;
              margin-left: 0;
            }
            .linea-compra-editable-textinput1 {
              width: 4rem;
              font-size: 0.6rem;
            }
            .linea-compra-editable-text {
              width: 4rem;
              display: none;
              font-size: 0.6rem;
            }
            .linea-compra-editable-text1 {
              width: 4rem;
              font-size: 0.6rem;
            }
            .linea-compra-editable-image {
              width: 0.8rem;
              height: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .linea-compra-editable-container {
              height: auto;
              padding-top: 0.5rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0.5rem;
            }
            .linea-compra-editable-textinput {
              width: 5rem;
              margin-top: 0;
              margin-left: 1rem;
              margin-right: 1rem;
              margin-bottom: 0;
            }
            .linea-compra-editable-textinput1 {
              margin-top: 0rem;
              margin-left: 1rem;
              margin-right: 1rem;
              margin-bottom: 0rem;
            }
            .linea-compra-editable-text {
              margin: 0;
            }
            .linea-compra-editable-text1 {
              margin-right: 1rem;
            }
            .linea-compra-editable-button {
              margin-right: 1rem;
            }
            .linea-compra-editable-image {
              width: 0.6rem;
              height: auto;
            }
          }
        `}
      </style>
    </>
  );
};

LineaCompraEditable.defaultProps = {
  image_src1: "/eliminar-white-1500w.png",
  image_alt1: "image",
  rootClassName: "",
};

LineaCompraEditable.propTypes = {
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default LineaCompraEditable;
