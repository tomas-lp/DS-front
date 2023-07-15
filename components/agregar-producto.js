import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useAppContext } from "../context/state";
import { categoriasProductos } from "../utils/utils";

const AgregarProducto = (props) => {
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState("");
  const { addProductos } = useAppContext();
  const [showAddProductos, setShowAddProductos] = addProductos;
  const maxLengthCant = 2;

  const addProducto = () => {
    let apiHost =
      process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos`;

    axios
      .post(url, {
        nombre: nombre,
        stock: stock,
        precioVenta: precio,
        categoria: categoria,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleKeyDown = (event) => {
    const maxLength = 3; // Establece la longitud máxima permitida

    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };
  const handleKeyDown2 = (event) => {
    const maxLength = 5; // Establece la longitud máxima permitida

    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };
  return (
    <>
      <div className="agregar-producto-container">
        <div className="agregar-producto-container01">
          <div className="agregar-producto-container02">
            <div className="agregar-producto-container03">
              <button
                id="btnVolver"
                className="agregar-producto-btn-delete btnRounded"
                onClick={() => {
                  setShowAddProductos(false);
                }}
              >
                <img
                  src="/back-white-1500h.png"
                  className="agregar-producto-image"
                />
              </button>
            </div>
          </div>
          <div className="agregar-producto-container06">
            <div className="agregar-producto-encabezado">
              <div className="agregar-producto-container07">
                <span className="agregar-producto-text01">{props.text1}</span>
              </div>
            </div>
            <div className="agregar-producto-container08">
              <div className="agregar-producto-container09">
                <div className="agregar-producto-container10">
                  <span className="agregar-producto-text02 menuSubtitle">
                    <span>
                      <span>Nombre:</span>
                    </span>
                    <br></br>
                  </span>
                  <input
                    type="text"
                    placeholder="Nombre producto"
                    className="agregar-producto-textinput input"
                    //Según la base datos
                    maxLength={20}
                    defaultValue={props.nombre}
                    onChange={(e) => {
                      setNombre(e.target.value);
                    }}
                  />
                </div>
                <div className="agregar-producto-container11">
                  <span className="agregar-producto-text07 menuSubtitle">
                    Categoría:
                  </span>
                  <select
                    className="agregar-producto-textinput1 input"
                    onChange={(e) => {
                      setCategoria(e.target.value);
                    }}
                  >
                    <option value="default">Seleccione</option>
                    {categoriasProductos.map((elem, index) => {
                      return (
                        <option key={index} value={elem}>
                          {elem}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="agregar-producto-container12"></div>
                <div className="agregar-producto-container13">
                  <div className="agregar-producto-container14">
                    <span className="agregar-producto-text11 menuSubtitle">
                      <span>Cantidad:</span>
                      <br></br>
                    </span>
                    <input
                      type="number"
                      min="0"
                      placeholder="0"
                      className="agregar-producto-textinput2 input"
                      onKeyDown={handleKeyDown}
                      defaultValue={props.cantidad}
                      onChange={(e) => {
                        setStock(e.target.value);
                      }}
                    />
                  </div>
                  <div className="agregar-producto-container15">
                    <span className="agregar-producto-text14 menuSubtitle">
                      <span>Precio:</span>
                      <br></br>
                    </span>
                    <input
                      type="number"
                      min="0"
                      onKeyDown={handleKeyDown2}
                      //max="99"
                      placeholder="$0.00"
                      className="agregar-producto-textinput3 input"
                      defaultValue={props.precio}
                      onChange={(e) => {
                        setPrecio(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="agregar-producto-container16">
            <button
              id="btnCancelar"
              className="agregar-producto-button button"
              onClick={() => {
                setShowAddProductos(false);
              }}
            >
              <img
                src="/cerrar-white-1500h.png"
                alt="image"
                className="agregar-producto-image2"
              />
            </button>
            <button
              id="btnAgregar"
              className="agregar-producto-button1 button"
              onClick={() => {
                addProducto();
                setShowAddProductos(false);
                props.update();
              }}
            >
              <img
                src="/tick-1500h.png"
                alt="image"
                className="agregar-producto-image3"
              />
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .agregar-producto-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(43, 43, 40, 0.5);
          }
          .agregar-producto-container01 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            position: relative;
            max-width: 1000px;
            border-radius: 3rem;
            flex-direction: column;
            background-color: var(--dl-color-color-blanco);
          }
          .agregar-producto-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 1rem;
            align-items: stretch;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-container03 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: space-between;
          }
          .agregar-producto-btn-delete {
            width: 3rem;
            height: 3rem;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 0rem;
            margin-right: 0rem;
            border-radius: 2rem;
            justify-content: flex-end;
            background-color: var(--dl-color-color-naranja);
          }
          .agregar-producto-btn-delete:hover {
            transform: scale(1.05);
          }
          .agregar-producto-image {
            width: 2rem;
            height: 2rem;
            object-fit: cover;
          }
          .agregar-producto-container04 {
            flex: 0 0 auto;
            width: 150px;
            height: 49px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .agregar-producto-text {
            color: var(--dl-color-gray-white);
            padding: 1rem;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 2rem;
            margin-right: 0px;
            padding-left: 1rem;
            border-radius: 2rem;
            margin-bottom: 0rem;
            padding-right: 1rem;
            justify-content: flex-start;
            background-color: var(--dl-color-color-naranja);
          }
          .agregar-producto-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: space-between;
          }
          .agregar-producto-btn-delete1 {
            width: 3rem;
            height: 3rem;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 2rem;
            margin-right: 0rem;
            border-radius: 2rem;
            justify-content: flex-end;
            background-color: var(--dl-color-color-naranja);
          }
          .agregar-producto-btn-delete1:hover {
            transform: scale(1.05);
          }
          .agregar-producto-image1 {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .agregar-producto-container06 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .agregar-producto-encabezado {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0rem;
            padding-left: 2rem;
            padding-right: 2rem;
            flex-direction: row;
            padding-bottom: 0rem;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .agregar-producto-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1200px;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .agregar-producto-text01 {
            color: var(--dl-color-gray-white);
            width: 14rem;
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .agregar-producto-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            border-radius: 1rem;
            margin-bottom: 2rem;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-color-negro2);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
          }
          .agregar-producto-container09 {
            width: 100%;
            display: flex;
            max-width: 700px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .agregar-producto-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 1rem;
            align-items: flex-start;
            margin-right: 0rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-text02 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 0px;
          }
          .agregar-producto-textinput {
            color: var(--dl-color-gray-500);
            width: 20rem;
            height: auto;
            margin: 0px;
            font-size: 1rem;
            font-family: Poppins;
            border-color: var(--dl-color-gray-900);
            border-width: 0.125rem;
            background-color: var(--dl-color-gray-white);
          }
          .agregar-producto-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 1rem;
            align-items: flex-start;
            margin-right: 0rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-text07 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 0px;
          }
          .agregar-producto-textinput1 {
            color: var(--dl-color-gray-500);
            width: 20rem;
            height: auto;
            margin: 0px;
            font-size: 1rem;
            font-family: Poppins;
            border-color: var(--dl-color-gray-900);
            border-width: 0.125rem;
            background-color: var(--dl-color-gray-white);
          }
          .agregar-producto-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 1rem;
            align-items: flex-start;
            margin-right: 0rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-text08 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 0px;
          }
          .agregar-producto-textarea {
            color: var(--dl-color-gray-500);
            width: 20rem;
            height: 5rem;
            font-size: 1rem;
            align-self: flex-start;
            font-family: Poppins;
            padding-top: 0.5rem;
            border-color: var(--dl-color-gray-900);
            border-width: 2px;
            padding-left: 1rem;
            border-radius: 12px;
            padding-right: 1rem;
            padding-bottom: 0.5rem;
            background-color: var(--dl-color-gray-white);
          }
          .agregar-producto-container13 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 1rem;
            align-items: flex-start;
            justify-content: space-between;
          }
          .agregar-producto-container14 {
            flex: 0 0 auto;
            width: 46%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-text11 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 0px;
          }
          .agregar-producto-textinput2 {
            color: var(--dl-color-gray-500);
            width: 5rem;
            height: auto;
            margin: 0rem;
            font-size: 1rem;
            text-align: center;
            font-family: Poppins;
            border-radius: 0.75rem;
            background-color: var(--dl-color-gray-white);
          }
          .agregar-producto-container15 {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-right: 0rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .agregar-producto-text14 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
            margin-bottom: 0px;
          }
          .agregar-producto-textinput3 {
            color: var(--dl-color-gray-500);
            width: 6rem;
            height: auto;
            margin: 0rem;
            font-size: 1rem;
            text-align: center;
            font-family: Poppins;
            border-radius: 0.75rem;
            background-color: var(--dl-color-gray-white);
          }
          .agregar-producto-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            margin-left: 2rem;
            margin-right: 2rem;
            justify-content: center;
          }
          .agregar-producto-button {
            color: var(--dl-color-gray-white);
            width: 3rem;
            height: 3rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            padding-top: 1rem;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            margin-right: 2rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            padding-bottom: 1rem;
            background-color: var(--dl-color-color-naranja);
          }
          .agregar-producto-button:hover {
            transform: scale(1.05);
          }
          .agregar-producto-image2 {
            width: 2rem;
            object-fit: cover;
          }
          .agregar-producto-button1 {
            color: var(--dl-color-gray-white);
            width: 3rem;
            height: 3rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            margin-left: 2rem;
            padding-top: 1rem;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            margin-right: 0rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            padding-bottom: 1rem;
            background-color: var(--dl-color-color-naranja);
          }
          .agregar-producto-button1:hover {
            transform: scale(1.05);
          }
          .agregar-producto-image3 {
            width: 2rem;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .agregar-producto-text01 {
              font-size: 1.5rem;
            }
            .agregar-producto-text02 {
              font-size: 0.8rem;
            }
            .agregar-producto-textinput {
              width: 14rem;
              font-size: 0.8rem;
            }
            .agregar-producto-text07 {
              font-size: 0.8rem;
            }
            .agregar-producto-textinput1 {
              width: 14rem;
              font-size: 0.8rem;
            }
            .agregar-producto-text08 {
              font-size: 0.8rem;
            }
            .agregar-producto-textarea {
              width: 14rem;
              font-size: 0.8rem;
            }
            .agregar-producto-text11 {
              font-size: 0.8rem;
            }
            .agregar-producto-textinput2 {
              font-size: 0.8rem;
            }
            .agregar-producto-text14 {
              font-size: 0.8rem;
            }
            .agregar-producto-textinput3 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .agregar-producto-container04 {
              justify-content: center;
            }
            .agregar-producto-text {
              margin-left: 0rem;
            }
            .agregar-producto-btn-delete1 {
              margin-left: 0rem;
            }
            .agregar-producto-container10 {
              align-items: center;
            }
            .agregar-producto-text02 {
              font-size: 0.8rem;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .agregar-producto-textinput {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
            }
            .agregar-producto-container11 {
              align-items: center;
            }
            .agregar-producto-text07 {
              color: var(--dl-color-color-blanco);
              width: auto;
              font-size: 0.8rem;
              align-self: center;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .agregar-producto-textinput1 {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
              align-self: center;
            }
            .agregar-producto-text08 {
              color: var(--dl-color-color-blanco);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .agregar-producto-textarea {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
              align-self: center;
              text-align: left;
            }
            .agregar-producto-container13 {
              width: auto;
              height: auto;
              align-items: flex-start;
              flex-direction: column;
            }
            .agregar-producto-container14 {
              width: 100%;
              margin-right: 0rem;
              margin-bottom: 0.5rem;
            }
            .agregar-producto-text11 {
              font-size: 0.8rem;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .agregar-producto-textinput2 {
              width: 3rem;
              font-size: 0.8rem;
              align-self: center;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .agregar-producto-container15 {
              width: 100%;
              margin-left: 0rem;
            }
            .agregar-producto-text14 {
              color: var(--dl-color-color-blanco);
              font-size: 0.8rem;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 500;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .agregar-producto-textinput3 {
              width: 5rem;
              font-size: 0.8rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

AgregarProducto.defaultProps = {
  image_alt81: "",
  text1: "Información:",
  image_alt8: "",
  image_alt: "image",
  text: "0",
  image_src: "6c65c6ce-576d-4c0e-b73f-1f7c6c64d26c",
};

AgregarProducto.propTypes = {
  image_alt81: PropTypes.string,
  text1: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
};

export default AgregarProducto;
