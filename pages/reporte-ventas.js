import React from 'react'
import Head from 'next/head'

import LineaReporte from '../components/linea-reporte'

const ReporteVentas = (props) => {
  return (
    <>
      <div className="reporte-ventas-container">
        <Head>
          <title>Reporte de ventas - Pedro's Bar</title>
          <meta property="og:title" content="Reporte-Ventas - TPI - Frontend" />
        </Head>
        <div className="reporte-main">
          <div className="reporte-header">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="reporte-logo"
            />
            <span className="reporte-fecha">Fecha: __/__/__</span>
          </div>
          <div className="reporte-title">
            <h1 className="reporte-title-h1">Reporte de Ventas de _</h1>
          </div>
          <div className="reporte-list">
            <div className="reporte-list-header">
              <div className="reporte-header-campos">
                <span className="reporte-heading-id">ID</span>
                <span className="reporte-heading-fecha">Fecha</span>
                <span className="reporte-heading-cliente">Cliente</span>
                <span className="reporte-heading-importe">Importe</span>
              </div>
            </div>
            <div className="reporte-content">
              <LineaReporte></LineaReporte>
            </div>
          </div>
          <div className="reporte-totales">
            <span className="text-total">Total Vendido: $0,00</span>
            <span className="text-total">Costo mercadería vendida: $0,00</span>
            <span className="reporte-ventas-text7 text-total">
              Margen de ganacia: $0,00
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .reporte-ventas-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .reporte-ventas-text7 {
            font-style: normal;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}

export default ReporteVentas
