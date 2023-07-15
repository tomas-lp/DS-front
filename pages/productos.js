import React, { useState } from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaProductos from '../components/lista-productos'

const Productos = (props) => {

  return (
    <>
      <div className="productos-container">
        <Head>
          <title>Productos - Pedro's Bar</title>
          <meta property="og:title" content="Productos - TPI - Frontend" />
        </Head>
        <Cabecera></Cabecera>
        <ListaProductos></ListaProductos>
      </div>
      <style jsx>
        {`
          .productos-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Productos
