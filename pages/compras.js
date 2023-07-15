import React from 'react'
import Head from 'next/head'

import Cabecera from '../components/cabecera'
import ListaCompras from '../components/lista-compras'

const Compras = (props) => {
  return (
    <>
      <div className="compras-container">
        <Head>
          <title>Compras - Pedro's Bar</title>
          <meta property="og:title" content="Compras - TPI - Frontend" />
        </Head>
        <Cabecera rootClassName="cabecera-root-class-name2"></Cabecera>
        <ListaCompras rootClassName="lista-compras-root-class-name"></ListaCompras>
      </div>
      <style jsx>
        {`
          .compras-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Compras
