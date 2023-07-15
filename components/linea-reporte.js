import React from 'react';
import PropTypes from 'prop-types';

const LineaReporte = (props) => {
  const fechaFormateada = new Date(props.fecha).toLocaleDateString();

  return (
    <>
      <div className="linea-reporte-fila reporte-fila">
        <div className="reporte-fila-campos">
          <span className="reporte-fila-id">{props.id}</span>
          <span className="reporte-fila-fecha">{fechaFormateada}</span>
          <span className="reporte-fila-cliente">{props.cliente}</span>
          <span className="reporte-fila-importe">{props.importe}</span>
        </div>
      </div>
      <style jsx>
        {`
          .linea-reporte-fila {
            position: relative;
          }
        `}
      </style>
    </>
  );
};

LineaReporte.defaultProps = {
  importe: '$0,00',
  cliente: 'Nombre',
  id: 'ID',
  fecha: '2023-06-20T00:08:32.000Z',
};

LineaReporte.propTypes = {
  importe: PropTypes.string,
  cliente: PropTypes.string,
  id: PropTypes.string,
  fecha: PropTypes.string,
};

export default LineaReporte;