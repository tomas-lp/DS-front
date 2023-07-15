import React from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaVentas from '../components/lista-ventas'

const Ventas = (props) => {
  return (
    <>
      <div className="ventas-container">
        <Head>
          <title>Ventas - Pedro's Bar</title>
          <meta property="og:title" content="Ventas - TPI - Frontend" />
        </Head>
        <Cabecera></Cabecera>
        <ListaVentas rootClassName="lista-ventas-root-class-name"></ListaVentas>
      </div>
      <style jsx>
        {`
          .ventas-container {
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

export default Ventas
