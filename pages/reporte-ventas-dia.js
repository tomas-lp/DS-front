import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useAppContext } from '../context/state';
import { parseFechaFront } from '../utils/utils';
import { useRouter } from 'next/router';

import LineaReporte from '../components/linea-reporte';

const ReporteVentasDia = (props) => {
  const [ventas, setVentas] = useState([]);
  const [totalVendido, setTotalVendido] = useState(0);
  const [costoMercaderia, setCostoMercaderia] = useState(0);
  const [margenGanancia, setMargenGanancia] = useState(0);
  const {dias, meses, anios} = useAppContext();
  const [anio, setAnio] = anios;
  const [mes, setMes] = meses;
  const [dia, setDia] = dias;
  const router = useRouter();

  const fetchVentas = async (dia, mes, anio) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/diario/${dia}/${mes}/${anio}`;

    try {
      const response = await axios.get(url);
      const ventasData = response.data;

      if (ventasData.length !== 0) {
        setVentas(ventasData);
        calcularTotales(ventasData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLineasVenta = async (idVenta) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/ventas/${idVenta}/lineas`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const fetchProducto = async (idProd) => {
    let apiHost = process.env.NEXT_PUBLIC_PEDRO_API_HOST || "http://localhost:4000";
    let url = `${apiHost}/api/productos/${idProd}/`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const calcularTotales = async (ventasData) => {
    let total = 0;
    let costo = 0;

    for (const venta of ventasData) {
      const lineasVenta = await fetchLineasVenta(venta.id);
      let importeVenta = 0;

      for (const linea of lineasVenta) {
        const prod = await fetchProducto(linea.id_producto);
        const { cantidad, precio_unitario } = linea;
        const precio = prod.precioVenta;
        const importeLinea = parseFloat(cantidad) * parseFloat(precio_unitario);
        importeVenta += importeLinea;
        total += importeLinea;
        costo += parseFloat(precio) * parseFloat(cantidad);
      }
      venta.importe = importeVenta;
    }

    const ganancia = total - costo;

    setTotalVendido(total);
    setCostoMercaderia(costo);
    setMargenGanancia(ganancia);
  };

  useEffect(() => {
    const dia = router.query.dia;
    const mes = router.query.mes;
    const anio = router.query.anio;
    fetchVentas(dia,mes,anio);
  }, []);

  const getFechaActual = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const anio = fecha.getFullYear();
  
    return `${dia}/${mes}/${anio}`;
  };

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
              src="/logo-1500w.png"
              className="reporte-logo"
            />
            <span className="reporte-fecha">{getFechaActual()}</span>
          </div>
          <div className="reporte-title">
            <br></br>
            <h1 className="reporte-title-h1">Reporte de ventas del día {dia}/{mes}/{anio}</h1>
            <br></br>
            <br></br>
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
              {ventas.map((venta, index) => (
                <LineaReporte
                  key={index}
                  id={venta.id}
                  fecha={venta.fecha}
                  cliente={venta.cliente}
                  importe={venta.importe} // Asigna el importe de la venta si está disponible
                />
              ))}
            </div>
          </div>
          <div className="reporte-totales">
            <span className="text-total">Total Vendido: ${totalVendido.toFixed(2)}</span>
            <span className="text-total">Costo mercadería vendida: ${costoMercaderia.toFixed(2)}</span>
            <span className="reporte-ventas-text7 text-total">
              Margen de ganancia: ${margenGanancia.toFixed(2)}
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
  );
};

export default ReporteVentasDia;