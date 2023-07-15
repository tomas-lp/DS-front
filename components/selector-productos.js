import React, { useEffect, useState } from 'react'

import PropTypes, { element } from 'prop-types'

import Producto from './producto'
import ElementoVacio from './elemento-vacio'
import axios from 'axios'
import { getPageFiles } from 'next/dist/server/get-page-files'
import { useAppContext } from '../context/state'
import AgregarProducto from './agregar-producto'
import DetallesProducto from './detalles-producto'
import EliminarProducto from './eliminar-producto'
import { searchFilterNombre } from '../utils/utils'

const ListaProductos = (props) => {
  const [productos, setProductos] = useState([]);
  const [filtrado, setFiltrado] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const {showProductos, addProductos, eliminarProducto} = useAppContext();
  const [showAddProductos, setShowAddProductos] = addProductos;
  const [showProducto, setShowProducto] = showProductos;
  const [showEliminarProducto, setShowEliminarProducto] = eliminarProducto;

  const fetchProductos = () => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos`;
    axios.get(url)
    .then(res => {
        if (res.data.length != 0) {
          setProductos(res.data);
          setFiltrado(res.data);
        }
    })
    .catch(error => {
        console.log(error);
    })
  }

  useEffect(()=>{
    fetchProductos();
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    const aux = e.target.value;
    setFiltrado(searchFilterNombre(productos, aux.toLowerCase()))
  }

  const updateAdd = (id) =>{
    fetchProductos();
  }

  const updateDelete = (id) =>{
    const indiceElem = productos.findIndex(elem => {
      return elem.id === id;
    });
    productos.splice(indiceElem,1);
    setFiltrado(productos);
  }

  return (
    <>
      <div className="container">             
          { //Muestra cada producto de la lista.
            (filtrado.length)?
              filtrado.map((elemento) => {
                return <span className='row' onClick={()=>{props.update(elemento.id, elemento.nombre)}}><p>{elemento.nombre}</p></span>
              })
              : //Si la lista no tiene elementos, se muestra una fila que indica que la lista esta vacia.
              <div>Vacio</div>
          }
      </div>
      <style jsx>
        {`
          .container{
            width:10rem;
            background-color: #444444;
            position: absolute;
            top:4rem;
            left:6rem;
            z-index:2;
            border-radius: 1rem;
            max-height: 20rem;
            overflow-y:auto;

            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .row{
            transition: 0.3s;
            margin: 0.3rem 0;
            color: white;
          }
          .row:hover{
            cursor: pointer;
            transform: scale(1.05);
          }
          .row:hover *{
            color: var(--dl-color-color-naranja);
            transition: 0.3s;
          }

          @media (max-width: 991px) {
            .lista-productos-label {
              font-size: 1.8rem;
            }
            .lista-productos-btn-delete {
              width: 2rem;
              height: 2rem;
            }
            .lista-productos-image {
              width: 1rem;
              height: 1rem;
            }
            .lista-productos-textinput {
              font-size: 1rem;
            }
            .lista-productos-text2 {
              font-size: 1rem;
            }
            .lista-productos-text3 {
              font-size: 1rem;
            }
            .lista-productos-text4 {
              font-size: 1rem;
            }
            .lista-productos-text5 {
              font-size: 1rem;
            }
          }
          @media (max-width: 767px) {
            .lista-productos-container {
              padding: 1rem;
            }
            .lista-productos-container2 {
              align-items: flex-start;
              flex-direction: row;
              justify-content: space-between;
            }
            .lista-productos-label {
              font-size: 1.5rem;
            }
            .lista-productos-btn-delete {
              width: 1.5rem;
              height: 1.5rem;
            }
            .lista-productos-image {
              width: 0.8rem;
              height: 0.8rem;
            }
            .lista-productos-container4 {
              justify-content: space-between;
            }
            .lista-productos-container5 {
              margin-top: 0rem;
              margin-left: 0rem;
              margin-right: 1rem;
              margin-bottom: 0rem;
              flex-direction: row;
            }
            .lista-productos-textinput {
              width: 10rem;
              font-size: 1rem;
              padding-top: 0.2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              padding-bottom: 0.2rem;
            }
            .lista-productos-image1 {
              width: 1.2rem;
            }
            .lista-productos-encabezado {
              height: 2rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-productos-text2 {
              font-size: 0.8rem;
            }
            .lista-productos-text3 {
              font-size: 0.8rem;
            }
            .lista-productos-text4 {
              font-size: 0.8rem;
            }
            .lista-productos-text5 {
              font-size: 0.8rem;
            }
            .lista-productos-container7 {
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
          }
          @media (max-width: 530px) {
            .lista-productos-container {
              padding: 1rem;
            }
            .lista-productos-container2 {
              width: 100%;
              align-self: flex-start;
              align-items: center;
              padding-left: 0rem;
              padding-right: 0rem;
              flex-direction: row;
              justify-content: space-between;
            }
            .lista-productos-btn-delete {
              margin-left: 0.5rem;
            }
            .lista-productos-image {
              width: 1rem;
              height: 1rem;
            }
            .lista-productos-container4 {
              width: auto;
            }
            .lista-productos-container5 {
              width: auto;
              margin-top: 0rem;
              margin-right: 0rem;
              justify-content: space-between;
            }
            .lista-productos-textinput {
              width: 8rem;
              font-size: 0.85rem;
              min-width: 0;
              padding-top: 0.2rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
              padding-bottom: 0.2rem;
            }
            .lista-productos-image1 {
              width: 1rem;
              margin-left: 0em;
              margin-right: 0.5rem;
            }
            .lista-productos-encabezado {
              padding-left: 1rem;
              padding-right: 1rem;
              border-top-left-radius: 1rem;
              border-top-right-radius: 1rem;
            }
            .lista-productos-container6 {
              width: 90%;
            }
            .lista-productos-text2 {
              width: 2rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .lista-productos-text3 {
              width: 5rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-productos-text4 {
              width: 4rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 0.5rem;
              margin-right: 0.5rem;
            }
            .lista-productos-text5 {
              width: 3rem;
              font-size: 0.7rem;
              font-style: normal;
              font-weight: 600;
              margin-left: 1rem;
              margin-right: 1rem;
            }
            .lista-productos-container7 {
              border-radius: 0rem;
              border-bottom-left-radius: 1rem;
              border-bottom-right-radius: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

ListaProductos.defaultProps = {
  text211: '$0,00',
  text4: 'Última actualización',
  text412: '01/01/2001',
  image_alt41: 'image',
  text41: '01/01/2001',
  text1111: 'Id',
  text: 'Stock',
  text411: '01/01/2001',
  text72: '0',
  text3: '$0,00',
  image_src2: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src43: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src1: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  text212: '$0,00',
  image_alt4: 'image',
  image_alt2: 'image',
  image_alt42: 'image',
  text71: '0',
  image_alt43: 'image',
  text1112: 'Id',
  image_src4: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  rootClassName: '',
  text11: 'Id',
  image_src42: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_src41: '1d5f9af0-b111-48de-9013-6ee131d9957b',
  image_alt1: 'image',
  button: 'Button',
  text1: '0',
  text5: 'Button',
  text2: 'Precio',
  text6: '0',
}

ListaProductos.propTypes = {
  text211: PropTypes.string,
  text4: PropTypes.string,
  text412: PropTypes.string,
  image_alt41: PropTypes.string,
  text41: PropTypes.string,
  text1111: PropTypes.string,
  text: PropTypes.string,
  text411: PropTypes.string,
  text72: PropTypes.string,
  text3: PropTypes.string,
  image_src2: PropTypes.string,
  image_src43: PropTypes.string,
  image_src1: PropTypes.string,
  text212: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt42: PropTypes.string,
  text71: PropTypes.string,
  image_alt43: PropTypes.string,
  text1112: PropTypes.string,
  image_src4: PropTypes.string,
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  image_src42: PropTypes.string,
  image_src41: PropTypes.string,
  image_alt1: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
}

export default ListaProductos
