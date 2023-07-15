import React from 'react'

import PropTypes from 'prop-types'

const ElementoVacio = (props) => {
  return (
    <>
      <div className="vacio-container list-item fila-tabla">
        <span className='vacio-text'>Esta lista esta vacia.</span>
      </div>
      <style jsx>
        {`
          .vacio-container {
            flex: 0 0 auto;
            width: 100%;
            height: 4rem;
            display: flex;
            padding: 0;
            position: relative;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0);
            align-items: flex-start;
            border-radius: 0px;
            margin-bottom: 0px;
            justify-content: center;
            text-decoration: none;
            background-color: transparent;
            transition: 0.3s;
          }

          .vacio-text {
            color: var(--dl-color-gray-white);
            font-size: 1rem;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 300;
            margin-left: 2rem;
            margin-right: 1rem;
          }
          
          @media (max-width: 1200px) {
            .vacio-text {
              margin-left: 1rem;
            }
          }
          @media (max-width: 991px) {
            .vacio-text {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 767px) {
            .vacio-container {
              height: 2rem;
            }
            .vacio-text {
              font-size: 0.8rem;
            }
          }
          @media (max-width: 530px) {
            .vacio-container {
              padding-top: 0rem;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-bottom: 0rem;
            }
            .vacio-text {
              width: 2rem;
              font-size: 0.6rem;
              margin-left: 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default ElementoVacio
