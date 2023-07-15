import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import Venta from './venta'
import ElementoVacio from './elemento-vacio'
import axios from 'axios'
import { useAppContext } from '../context/state'
import AgregarVenta from './agregar-venta'
import DetallesVenta from './detalles-venta'
import EliminarVenta from './eliminar-venta'
import GenerarReporte from './generar-reporte'
import { searchFilterId } from '../utils/utils'

const ListaVentas = (props) => {
  const [ventas, setVentas] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const {showVentas, addVentas, eliminarVenta, showReporte} = useAppContext();
  const [showAddVentas, setShowAddVentas] = addVentas;
  const [showVenta, setShowVenta] = showVentas;
  const [showEliminarVenta, setShowEliminarVenta] = eliminarVenta;
  const [showGenerarReporte, setShowGenerarReporte] = showReporte;

  const fetchVentas = () => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas`;
    axios.get(url)
    .then(res => {
        if (res.data.length != 0) {
          setVentas(res.data);
          setFiltrado(res.data);
        }
    })
    .catch(error => {
        console.log(error);
    })
  }

  useEffect(()=>{
    fetchVentas();
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    const aux = e.target.value;
    setFiltrado(searchFilterId(ventas, aux.toLowerCase()))
  }

  const updateAdd = (id) =>{
    fetchVentas();
  }

  const updateDelete = (id) =>{
    const indiceElem = ventas.findIndex(elem => {
      return elem.id === id;
    });
    ventas.splice(indiceElem,1);
    setFiltrado(ventas);
  }

  return (
    <>
      <div className={`lista-ventas-container ${props.rootClassName} `}>
        <div className="lista-ventas-container1">
          <div className="lista-ventas-container2 pop-up-list-row">
            <div className="lista-ventas-container3">
              <span className="lista-ventas-label label">
                <span>VENTAS</span>
                <br></br>
              </span>
              <button 
                className="lista-ventas-btn-delete btnRounded"
                onClick={()=>{setShowAddVentas(true)}}
              >
                <img
                  alt="image"
                  src="/mas-1500h.png"
                  className="lista-ventas-image"
                />
              </button>
            </div>
            <div className="lista-ventas-container4">
              <button type="button" className="lista-ventas-button button"
                onClick={()=>{setShowGenerarReporte(true)}}
              >
                {props.button}
              </button>
            </div>
            <div className="lista-ventas-container5">
              <input
                type="text"
                placeholder="Buscar ID"
                className="lista-ventas-textinput input"
                onChange={handleChange}
              />
              <img
                alt="image"
                src="/buscar-grey-1500w.png"
                className="lista-ventas-image1"
              />
            </div>
          </div>
          <div className="lista-ventas-encabezado">
            <div className="lista-ventas-container6">
              <span className="lista-ventas-text2">ID</span>
              <span className="lista-ventas-text3">Cliente</span>
              <span className="lista-ventas-text4">Importe</span>
              <span className="lista-ventas-text5">{props.text41}</span>
            </div>
          </div>
          <div className="lista-ventas-container7">
            { //Muestra cada producto de la lista.
              (filtrado.length)?
                filtrado.map((elemento) => {
                  return <Venta key={elemento.id} id={elemento.id} cliente={elemento.cliente} fecha={elemento.fecha} importe={elemento.importe}></Venta>
                })
                : //Si la lista no tiene elementos, se muestra una fila que indica que la lista esta vacia.
                <ElementoVacio></ElementoVacio>
            }
            { //Si esta habilitado el popup para mostrar un producto, se lo muestra para el id del producto que lo haya habilitado
              showVenta!=-1 ? <DetallesVenta id={showVenta} cliente={filtrado.filter(elem => {return elem.id === showVenta})[0].cliente} fecha={filtrado.filter(elem => {return elem.id === showVenta})[0].fecha}></DetallesVenta>: null
            }
            {
              showEliminarVenta!=-1 ? <EliminarVenta id={showEliminarVenta} update={updateDelete}></EliminarVenta>: null
            }
            {
              showAddVentas? <AgregarVenta update={updateAdd}></AgregarVenta>: null
            }
            {
              showGenerarReporte? <GenerarReporte></GenerarReporte>: null
            }
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .lista-ventas-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: 2rem;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .lista-ventas-container1 {
            width: 100%;
            height: auto;
            display: flex;
            max-width: 1300px;
            flex-direction: column;
          }
          .lista-ventas-container2 {
            align-self: stretch;
            align-items: center;
            padding-left: 2rem;
            margin-bottom: 1rem;
            padding-right: 2rem;
            justify-content: space-between;
          }
          .lista-ventas-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .lista-ventas-label {
            color: var(--dl-color-gray-black);
            margin: 0px;
            font-size: 2.2rem;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .lista-ventas-btn-delete {
            width: 3rem;
            height: 3rem;
            align-self: center;
            box-shadow: 5px 5px 10px 0px rgba(212, 212, 212, 0);
            transition: 0.3s;
            align-items: center;
            margin-left: 1rem;
            margin-right: 0rem;
            border-radius: 2rem;
            background-color: var(--dl-color-color-naranja);
          }
          .lista-ventas-btn-delete:hover {
            transform: scale(1.05);
          }
          .lista-ventas-image {
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
          }
          .lista-ventas-container4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .lista-ventas-button {
            color: var(--dl-color-gray-white);
            font-size: 1.2rem;
            align-self: stretch;
            font-style: normal;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            margin-left: 6rem;
            padding-top: 0.5rem;
            margin-right: 2rem;
            padding-left: 1rem;
            border-radius: 3rem;
            padding-right: 1rem;
            padding-bottom: 0.5rem;
            background-color: var(--dl-color-color-naranja);
          }
          .lista-ventas-button:hover {
            transform: scale(1.05);
          }
          .lista-ventas-container5 {
            flex: 0 0 auto;
            width: 20rem;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            border-radius: 3rem;
            justify-content: space-between;
          }
          .lista-ventas-textinput {
            width: 261px;
            height: auto;
            margin: 0rem;
            font-size: 1.2rem;
            align-self: center;
            font-family: Poppins;
            border-color: rgba(217, 217, 217, 0);
            border-width: 0px;
            background-color: transparent;
          }
          .lista-ventas-image1 {
            width: 1.5rem;
            height: auto;
            align-self: center;
            object-fit: cover;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-ventas-encabezado {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            align-self: flex-start;
            align-items: center;
            padding-top: 0rem;
            flex-direction: row;
            padding-bottom: 0rem;
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .lista-ventas-container6 {
            flex: 0 0 auto;
            width: 90%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .lista-ventas-text2 {
            color: var(--dl-color-gray-white);
            width: 8rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-ventas-text3 {
            color: var(--dl-color-gray-white);
            width: 15rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-ventas-text4 {
            color: var(--dl-color-gray-white);
            width: 5rem;
            font-size: 1.2rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-ventas-text5 {
            color: var(--dl-color-color-blanco);
            width: 10rem;
            height: auto;
            font-size: 1.2rem;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            margin-left: 1rem;
            margin-right: 1rem;
          }
          .lista-ventas-container7 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            border-radius: 2rem;
            margin-bottom: 0rem;
            flex-direction: column;
            background-color: var(--dl-color-color-negro);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }

          @media (max-width: 1200px) {
            .lista-ventas-container2 {
              align-self: stretch;
            }
            .lista-ventas-container4 {
              justify-content: center;
            }
            .lista-ventas-button {
              margin: 0rem;
            }
            .lista-ventas-textinput {
              align-self: stretch;
            }
            .lista-ventas-text2 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-ventas-text3 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-ventas-text4 {
              font-style: normal;
              font-weight: 600;
            }
            .lista-ventas-text5 {
              font-style: normal;
              font-weight: 600;
            }
          }
          @media (max-width: 991px) {
            .lista-ventas-button {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
            }
            .lista-ventas-textinput {
              width: 10rem;
            }
            .lista-ventas-text2 {
              font-size: 1rem;
            }
            .lista-ventas-text3 {
              font-size: 1rem;
            }
            .lista-ventas-text4 {
              font-size: 1rem;
            }
            .lista-ventas-text5 {
              font-size: 1rem;
            }
          }
          @media (max-width: 767px) {
            .lista-ventas-container2 {
              padding: 0;
            }
            .lista-ventas-label {
              font-size: 1.5rem;
            }
            .lista-ventas-btn-delete {
              width: 1.8rem;
              height: 1.8rem;
              margin-left: 0;
            }
            .lista-ventas-image {
              width: 1.2rem;
              height: 1.2rem;
            }
            .lista-ventas-button {
              height: auto;
              font-size: 1rem;
              text-align: center;
              padding-top: 0.2rem;
              padding-bottom: 0.2rem;
            }
            .lista-ventas-textinput {
              width: 6rem;
              font-size: 0.8rem;
              padding-top: 0.2rem;
              padding-bottom: 0.2rem;
            }
            .lista-ventas-encabezado {
              height: 2rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-ventas-text2 {
              font-size: 0.8rem;
            }
            .lista-ventas-text3 {
              width: 10rem;
              font-size: 0.8rem;
            }
            .lista-ventas-text4 {
              font-size: 0.8rem;
            }
            .lista-ventas-text5 {
              font-size: 0.8rem;
            }
            .lista-ventas-container7 {
              border-radius: 0rem;
              border-bottom-left-radius: 1rem;
            }
          }
          @media (max-width: 530px) {
            .lista-ventas-container {
              padding: 1rem;
            }
            .lista-ventas-container2 {
              padding-left: 0rem;
              padding-right: 0rem;
            }
            .lista-ventas-label {
              font-size: 1.5rem;
            }
            .lista-ventas-btn-delete {
              width: 1.5rem;
              height: 1.5rem;
              margin-left: 0.5rem;
            }
            .lista-ventas-image {
              width: 1rem;
              height: 1rem;
            }
            .lista-ventas-button {
              font-size: 0.85rem;
              margin-left: 0rem;
              padding-top: 0.2rem;
              margin-right: 0rem;
              padding-left: var(--dl-space-space-halfunit);
              padding-right: 0.5rem;
              padding-bottom: 0.2rem;
            }
            .lista-ventas-container5 {
              justify-content: space-between;
              align-items: center;
            }
            .lista-ventas-textinput {
              width: 4rem;
              font-size: 0.6rem;
              padding-top: 0.2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              padding-bottom: 0.2rem;
            }
            .lista-ventas-image1 {
              width: 1rem;
              margin-left: 0.7rem;
              margin-right: 0.7rem;
            }
            .lista-ventas-encabezado {
              padding-left: 1rem;
              padding-right: 1rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-ventas-container6 {
              width: 90%;
            }
            .lista-ventas-text2 {
              width: 2rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .lista-ventas-text3 {
              width: 5rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-ventas-text4 {
              width: 4rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-ventas-text5 {
              width: 3rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 0rem;
            }
            .lista-ventas-container7 {
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

ListaVentas.defaultProps = {
  image_src: '37daf830-ca16-432d-adfd-ebaf68c00970',
  rootClassName: '',
  button: 'Generar reporte',
  text4111: '01/01/2001',
  text1115: 'Id',
  text1: 'ID',
  image_src42: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_alt1: 'image',
  text211: '$0,00',
  text1114: 'Id',
  text22: 'Precio',
  image_alt3: 'image',
  image_src1: '37daf830-ca16-432d-adfd-ebaf68c00970',
  text3: 'Nombre',
  image_alt41: 'image',
  text21: 'Precio',
  text212: '$0,00',
  text31: 'Cantidad',
  image_alt311: 'image',
  text7: '0',
  image_src4: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text412: '01/01/2001',
  image_alt42: 'image',
  image_src11: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text11111: 'Id',
  text41: 'Fecha',
  text2: 'Registro',
  image_alt11: 'image',
  text11: 'Id',
  text5: 'Stock',
  text1113: 'Id',
  button1: 'Generar reporte',
  text11151: 'Id',
  image_alt31: 'image',
  image_src2: '37daf830-ca16-432d-adfd-ebaf68c00970',
  text71: '0',
  image_src21: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text1112: 'Id',
  text72: '0',
  image_alt4: 'image',
  image_alt2: 'image',
  image_src311: 'fb64d2e8-10a2-4ce8-9ef8-5da8c5d4ddc3',
  text4: 'Text',
  image_alt21: 'image',
  image_src31: '406a57f7-7d1f-4f70-b819-b5b44a73e97b',
  image_src3: '37daf830-ca16-432d-adfd-ebaf68c00970',
  text111: 'Id',
  text2111: '$0,00',
  image_src41: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text: 'Text',
  image_alt: 'image',
}

ListaVentas.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text4111: PropTypes.string,
  text1115: PropTypes.string,
  text1: PropTypes.string,
  image_src42: PropTypes.string,
  image_alt1: PropTypes.string,
  text211: PropTypes.string,
  text1114: PropTypes.string,
  text22: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src1: PropTypes.string,
  text3: PropTypes.string,
  image_alt41: PropTypes.string,
  text21: PropTypes.string,
  text212: PropTypes.string,
  text31: PropTypes.string,
  image_alt311: PropTypes.string,
  text7: PropTypes.string,
  image_src4: PropTypes.string,
  text412: PropTypes.string,
  image_alt42: PropTypes.string,
  image_src11: PropTypes.string,
  text11111: PropTypes.string,
  text41: PropTypes.string,
  text2: PropTypes.string,
  image_alt11: PropTypes.string,
  text11: PropTypes.string,
  text5: PropTypes.string,
  text1113: PropTypes.string,
  button1: PropTypes.string,
  text11151: PropTypes.string,
  image_alt31: PropTypes.string,
  image_src2: PropTypes.string,
  text71: PropTypes.string,
  image_src21: PropTypes.string,
  text1112: PropTypes.string,
  text72: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src311: PropTypes.string,
  text4: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src31: PropTypes.string,
  image_src3: PropTypes.string,
  text111: PropTypes.string,
  text2111: PropTypes.string,
  image_src41: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ListaVentas
