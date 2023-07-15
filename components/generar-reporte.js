import React, { useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { useAppContext } from "../context/state";

const GenerarReporte = (props) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const { showReporte, anios, meses, semanas, dias } = useAppContext();
  const [showGenerarReporte, setShowGenerarReporte] = showReporte;
  const [anio, setAnio] = anios;
  const [mes, setMes] = meses;
  const [semana, setSemana] = semanas;
  const [dia, setDia] = dias;

  const handleTipoReporteChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };
  const handleKeyDown = (event) => {
    const maxLength = 2; // Establece la longitud máxima permitida
    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };
  const handleKeyDown2 = (event) => {
    const maxLength = 4; // Establece la longitud máxima permitida
    if (event.target.value.length >= maxLength) {
      event.preventDefault(); // Previene la entrada de más dígitos
    }
  };

  const renderInputsFecha = () => {
    switch (opcionSeleccionada) {
      case "Diario":
        return (
          <>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              id="inputDiaReporte"
              placeholder="dd"
              maxLength={2}
              className="generar-reporte-textinput input input-fecha"
              onChange={(e) => {
                setDia(e.target.value);
                console.log(e.target.value);
              }}
            />
            <input
              type="number"
              onKeyDown={handleKeyDown}
              id="inputMesReporte"
              placeholder="mm"
              maxLength={2}
              className="generar-reporte-textinput1 input input-fecha"
              onChange={(e) => {
                setMes(e.target.value);
              }}
            />
            <input
              type="number"
              onKeyDown={handleKeyDown2}
              id="inputAnioReporte"
              maxLength={4}
              placeholder="aaaa"
              className="generar-reporte-textinput2 input input-fecha"
              onChange={(e) => {
                setAnio(e.target.value);
              }}
            />
          </>
        );
      case "Semanal":
        return (
          <>
            <input
              type="text"
              id="inputNumSemana"
              placeholder="Num Semana"
              maxLength={1}
              className="generar-reporte-textinput input input-fecha"
              onChange={(e) => {
                setSemana(e.target.value);
              }}
            />
            <input
              type="number"
              onKeyDown={handleKeyDown}
              id="inputMesReporte"
              placeholder="mm"
              maxLength={2}
              className="generar-reporte-textinput1 input input-fecha"
              onChange={(e) => {
                setMes(e.target.value);
              }}
            />
            <input
              type="number"
              onKeyDown={handleKeyDown2}
              id="inputAnioReporte"
              placeholder="aaaa"
              maxLength={4}
              className="generar-reporte-textinput2 input input-fecha"
              onChange={(e) => {
                setAnio(e.target.value);
              }}
            />
          </>
        );
      case "Mensual":
        return (
          <>
            <input
              type="number"
              onKeyDown={handleKeyDown}
              id="inputMesReporte"
              placeholder="mm"
              maxLength={2}
              className="generar-reporte-textinput1 input input-fecha"
              onChange={(e) => {
                setMes(e.target.value);
              }}
            />
            <input
              type="number"
              onKeyDown={handleKeyDown2}
              id="inputAnioReporte"
              placeholder="aaaa"
              maxLength={4}
              className="generar-reporte-textinput2 input input-fecha"
              onChange={(e) => {
                setAnio(e.target.value);
              }}
            />
          </>
        );
      case "Anual":
        return (
          <input
            type="number"
            onKeyDown={handleKeyDown2}
            id="inputAnioReporte"
            maxLength={4}
            placeholder="aaaa"
            className="generar-reporte-textinput2 input input-fecha"
            onChange={(e) => {
              setAnio(e.target.value);
            }}
          />
        );
      default:
        return null;
    }
  };

  const generar_reporte = () => {
    let propAnio = "";
    let propMes = "";
    let propDia = "";
    let propNumSemana = "";

    if (opcionSeleccionada === "Anual") {
      // const inputAnio = document.getElementById('inputAnioReporte');
      // propAnio = inputAnio.value;
      // setAnio(propAnio);
      Router.push(
        {
          pathname: "/reporte-ventas-a",
          query: { anio: anio },
        },
        "/reporte-ventas-a"
      );
      // window.location.href = `/reporte-ventas-a`;
    } else if (opcionSeleccionada === "Mensual") {
      Router.push(
        {
          pathname: "/reporte-ventas-mes",
          query: { mes: dia, anio: anio },
        },
        "/reporte-ventas-mes"
      );
      // window.location.href = `/reporte-ventas-mes`;
    } else if (opcionSeleccionada === "Diario") {
      // const inputDia = document.getElementById('inputDiaReporte');
      // const inputMes = document.getElementById('inputMesReporte');
      // const inputAnio = document.getElementById('inputAnioReporte');
      // propDia = inputDia.value;
      // propMes = inputMes.value;
      // propAnio = inputAnio.value;
      // setAnio(propAnio);
      // setMes(propMes);
      // setDia(propDia);
      Router.push(
        {
          pathname: "/reporte-ventas-dia",
          query: { dia: dia, mes: dia, anio: anio },
        },
        "/reporte-ventas-dia"
      );
      // window.location.href = `/reporte-ventas-dia`;
    } else if (opcionSeleccionada === "Semanal") {
      // const inputNumSemana = document.getElementById('inputNumSemana');
      // const inputMes = document.getElementById('inputMesReporte');
      // const inputAnio = document.getElementById('inputAnioReporte');
      // propNumSemana = inputNumSemana.value;
      // propMes = inputMes.value;
      // propAnio = inputAnio.value;
      // setAnio(propAnio);
      // setMes(propMes);
      // setSemana(propSemana);
      Router.push(
        {
          pathname: "/reporte-ventas-sem",
          query: { semana: semana, mes: dia, anio: anio },
        },
        "/reporte-ventas-sem"
      );
      // window.location.href = `/reporte-ventas-sem`;
    }
  };
  return (
    <>
      <div className={`generar-reporte-container ${props.rootClassName}`}>
        <div className="generar-reporte-container1">
          <div className="popup-header">
            <span className="generar-reporte-text">{props.text}</span>
            <button
              type="button"
              className="generar-reporte-button button"
              onClick={() => {
                setShowGenerarReporte(false);
              }}
            >
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="generar-reporte-image"
              />
            </button>
          </div>
          <div className="generar-reporte-container3 botonReporte">
            <div className="generar-reporte-container4">
              <label className="generar-reporte-text1">{props.text1}</label>
              <select
                id="inputTipoReporte"
                className="generar-reporte-select botonReporte"
                onChange={handleTipoReporteChange}
              >
                <option value="" selected>
                  Seleccionar
                </option>
                <option value="Diario">Diario</option>
                <option value="Semanal">Semanal</option>
                <option value="Mensual">Mensual</option>
                <option value="Anual">Anual</option>
              </select>
            </div>
            <div className="generar-reporte-container5">
              <label className="generar-reporte-text2">{props.text2}</label>
              {renderInputsFecha()}
            </div>
            <button
              id="botonGenerarReporte"
              className="generar-reporte-button1 button"
              onClick={generar_reporte}
            >
              <span className="generar-reporte-text3">GENERAR</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .generar-reporte-container {
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
          .generar-reporte-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .generar-reporte-text {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 2rem;
          }
          .generar-reporte-button {
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
          .generar-reporte-button:hover {
            transform: scale(1.1);
          }
          .generar-reporte-image {
            width: 1.2rem;
            object-fit: cover;
          }
          .generar-reporte-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            align-self: center;
            align-items: center;
            margin-left: 0px;
            margin-right: 0px;
            border-radius: 0px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-color-blanco);
            border-bottom-left-radius: 3rem;
            border-bottom-right-radius: 3rem;
          }
          .generar-reporte-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: 0rem;
            align-items: center;
            justify-content: space-between;
          }
          .generar-reporte-text1 {
            color: var(--dl-color-color-negro);
            width: auto;
            height: auto;
            font-size: 1.5rem;
            text-align: left;
            font-family: Poppins;
            margin-right: 1.5rem;
          }
          .generar-reporte-select {
            width: 15.5rem;
            align-self: stretch;
            margin-left: 0px;
            padding-top: 0.5rem;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            margin-right: 0px;
            padding-left: 1rem;
            border-radius: 2rem;
            padding-right: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .generar-reporte-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: flex-start;
            margin-top: 2rem;
            align-items: center;
            justify-content: flex-start;
          }
          .generar-reporte-text2 {
            color: var(--dl-color-color-negro);
            font-size: 1.5rem;
            font-family: Poppins;
            margin-right: 1.5rem;
          }
          .generar-reporte-textinput {
            max-width: 5rem;
            height: auto;
            padding: 0.5rem;
            font-size: 1.2rem;
            align-self: stretch;
            text-align: center;
            font-family: Poppins;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 2rem;
          }
          .generar-reporte-textinput1 {
            height: auto;
            padding: 0.5rem;
            font-size: 1.2rem;
            align-self: stretch;
            text-align: center;
            font-family: Poppins;
            margin-left: 0.75rem;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            margin-right: 0.75rem;
            border-radius: 2rem;
          }
          .generar-reporte-textinput2 {
            height: auto;
            padding: 0.5rem;
            font-size: 1.2rem;
            align-self: stretch;
            text-align: center;
            font-family: Poppins;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            border-radius: 2rem;
          }
          .generar-reporte-button1 {
            color: var(--dl-color-gray-white);
            width: auto;
            height: auto;
            font-style: normal;
            margin-top: 2rem;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            padding-top: 1rem;
            border-width: 0px;
            padding-left: 1.2rem;
            border-radius: 2rem;
            padding-right: 1.2rem;
            flex-direction: row;
            padding-bottom: 1rem;
            background-color: var(--dl-color-color-naranja);
          }
          .generar-reporte-button1:hover {
            transform: scale(1.05);
          }
          .generar-reporte-text3 {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 0rem;
          }
          @media (max-width: 1200px) {
            .generar-reporte-container1 {
              transform: scale(0.9);
            }
          }
          @media (max-width: 991px) {
            .generar-reporte-container1 {
              transform: scale(0.8);
            }
          }
          @media (max-width: 767px) {
            .generar-reporte-container1 {
              transform: scale(0.6);
            }
          }
          @media (max-width: 530px) {
            .generar-reporte-text {
              font-size: 1.2rem;
              margin-right: 0rem;
            }
            .generar-reporte-image {
              width: 1rem;
            }
            .generar-reporte-text3 {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

GenerarReporte.defaultProps = {
  button: "Button",
  image_src31: "fb64d2e8-10a2-4ce8-9ef8-5da8c5d4ddc3",
  text2: "Fecha:",
  image_src3: "/eliminar-white-1500w.png",
  textinput_placeholder: "placeholder",
  text: "GENERAR REPORTE",
  image_alt3: "image",
  rootClassName: "",
  text21: "Tipo:",
  text1: "Tipo de reporte:",
  image_alt31: "image",
};

GenerarReporte.propTypes = {
  button: PropTypes.string,
  image_src31: PropTypes.string,
  text2: PropTypes.string,
  image_src3: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  image_alt3: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  image_alt31: PropTypes.string,
};

export default GenerarReporte;
