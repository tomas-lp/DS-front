import React, { useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { useAppContext } from '../context/state'

const EliminarVenta = (props) => {
  const {eliminarVenta} = useAppContext();
  const [showEliminarVenta, setShowEliminarVenta] = eliminarVenta;

  const eliminarElemento = async (id) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/${id}`;
    await axios.delete(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    })
  }

  return (
    <>
      <div className="confirmar-eliminar-container">
        <div className="confirmar-eliminar-container01">
          <span className='confirmar-eliminar-text02'>¿Esta seguro?</span>
          <button className="confirmar-eliminar-button button">
            <img
              src="/cerrar-white-1500h.png"
              alt="image"
              className="confirmar-eliminar-image2"
              onClick={()=>{setShowEliminarVenta(-1)}}
            />
          </button>
          <button className="confirmar-eliminar-button1 button">
            <img
              src="/tick-1500h.png"
              alt="image"
              className="confirmar-eliminar-image3"
              onClick={()=>{
                eliminarElemento(props.id).then(props.update(props.id));
                setShowEliminarVenta(-1);
              }}
            />
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .confirmar-eliminar-container {
            display: flex;
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom:1rem;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .confirmar-eliminar-container01 {
            width: 100%;
            height: auto;
            display: flex;
            padding: 1rem;
            position: relative;
            max-width: 1000px;
            border-radius: 3rem;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .confirmar-eliminar-text02 {
            color: var(--dl-color-color-blanco);
            padding: 0px;
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            margin-top: 0px;
            font-family: Poppins;
            font-weight: 500;
            margin-left: 0rem;
            margin-right: 1rem;
            margin-bottom: 0px;
          }
          .confirmar-eliminar-button {
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
            margin-right: 1rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            padding-bottom: 1rem;
            background-color: var(--dl-color-color-naranja);
          }
          .confirmar-eliminar-button:hover {
            transform: scale(1.05);
          }
          .confirmar-eliminar-image2 {
            width: 2rem;
            object-fit: cover;
          }
          .confirmar-eliminar-button1 {
            color: var(--dl-color-gray-white);
            width: 3rem;
            height: 3rem;
            font-style: normal;
            transition: 0.3s;
            font-family: Poppins;
            font-weight: 400;
            margin-left: 0.5rem;
            padding-top: 1rem;
            border-color: rgba(0, 0, 0, 0);
            border-width: 0px;
            margin-right: 0rem;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            padding-bottom: 1rem;
            background-color: var(--dl-color-color-naranja);
          }
          .confirmar-eliminar-button1:hover {
            transform: scale(1.05);
          }
          .confirmar-eliminar-image3 {
            width: 2rem;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .confirmar-eliminar-text01 {
              font-size: 1.5rem;
            }
            .confirmar-eliminar-text02 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-textinput {
              width: 14rem;
              font-size: 0.8rem;
            }
            .confirmar-eliminar-text07 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-textinput1 {
              width: 14rem;
              font-size: 0.8rem;
            }
            .confirmar-eliminar-text08 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-textarea {
              width: 14rem;
              font-size: 0.8rem;
            }
            .confirmar-eliminar-text11 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-textinput2 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-text14 {
              font-size: 0.8rem;
            }
            .confirmar-eliminar-textinput3 {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .confirmar-eliminar-container04 {
              justify-content: center;
            }
            .confirmar-eliminar-text {
              margin-left: 0rem;
            }
            .confirmar-eliminar-btn-delete1 {
              margin-left: 0rem;
            }
            .confirmar-eliminar-container10 {
              align-items: center;
            }
            .confirmar-eliminar-text02 {
              font-size: 0.8rem;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .confirmar-eliminar-textinput {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
            }
            .confirmar-eliminar-container11 {
              align-items: center;
            }
            .confirmar-eliminar-text07 {
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
            .confirmar-eliminar-textinput1 {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
              align-self: center;
            }
            .confirmar-eliminar-text08 {
              color: var(--dl-color-color-blanco);
              font-size: 0.8rem;
              font-style: normal;
              font-family: Poppins;
              font-weight: 500;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .confirmar-eliminar-textarea {
              width: 9rem;
              margin: 0px;
              padding: 0.5rem;
              font-size: 0.8rem;
              align-self: center;
              text-align: left;
            }
            .confirmar-eliminar-container13 {
              width: auto;
              height: auto;
              align-items: flex-start;
              flex-direction: column;
            }
            .confirmar-eliminar-container14 {
              width: 100%;
              margin-right: 0rem;
              margin-bottom: 0.5rem;
            }
            .confirmar-eliminar-text11 {
              font-size: 0.8rem;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .confirmar-eliminar-textinput2 {
              width: 3rem;
              font-size: 0.8rem;
              align-self: center;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
            .confirmar-eliminar-container15 {
              width: 100%;
              margin-left: 0rem;
            }
            .confirmar-eliminar-text14 {
              color: var(--dl-color-color-blanco);
              font-size: 0.8rem;
              font-style: normal;
              text-align: left;
              font-family: Poppins;
              font-weight: 500;
              margin-left: 0rem;
              margin-right: 1rem;
            }
            .confirmar-eliminar-textinput3 {
              width: 5rem;
              font-size: 0.8rem;
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
          }
        `}
      </style>
    </>
  )
}

EliminarVenta.defaultProps = {
  image_alt81: '',
  text1: 'Información:',
  image_alt8: '',
  image_alt: 'image',
  text: '0',
  image_src: '6c65c6ce-576d-4c0e-b73f-1f7c6c64d26c',
}

EliminarVenta.propTypes = {
  image_alt81: PropTypes.string,
  text1: PropTypes.string,
  image_alt8: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default EliminarVenta
