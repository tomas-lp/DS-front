import { createContext, useContext, useState } from 'react';

const context = createContext();

export function AppWrapper({ children }) {
  //Muestra o no el popup de AgregarProductos. Por defecto es false.
  const [showAddProductos, setShowAddProductos] = useState(false); 
  //Muestra los detalles de productos. Por defecto es -1 y al cambiarlo se muestra el detalle del producto cuyo id se coloque
  const [showProducto, setShowProducto] = useState(-1); 
  const [showEliminarProducto, setShowEliminarProducto] = useState(-1);

  const [showAddCompras, setShowAddCompras] = useState(false);
  const [showCompra, setShowCompra] = useState(-1);
  const [showEliminarCompra, setShowEliminarCompra] = useState(-1);

  const [showAddVentas, setShowAddVentas] = useState(false);
  const [showVenta, setShowVenta] = useState(-1);
  const [showEliminarVenta, setShowEliminarVenta] = useState(-1);

  const [showGenerarReporte, setShowGenerarReporte] = useState(false);

  const [dia, setDia] = useState(1);
  const [semana, setSemana] = useState(1);
  const [mes, setMes] = useState(1);
  const [anio, setAnio] = useState(1);

  return (
      <context.Provider value={{
        showProductos:[showProducto, setShowProducto], 
        addProductos: [showAddProductos, setShowAddProductos], 
        eliminarProducto: [showEliminarProducto, setShowEliminarProducto],

        showCompras:[showCompra, setShowCompra], 
        addCompras: [showAddCompras, setShowAddCompras], 
        eliminarCompra: [showEliminarCompra, setShowEliminarCompra],

        showVentas:[showVenta, setShowVenta], 
        addVentas: [showAddVentas, setShowAddVentas], 
        eliminarVenta: [showEliminarVenta, setShowEliminarVenta],

        showReporte: [showGenerarReporte, setShowGenerarReporte],
        dias: [dia, setDia],
        semanas: [semana, setSemana],
        meses: [mes, setMes],
        anios: [anio, setAnio]
        }}>
            {children}
      </context.Provider>  

  );
}

export function useAppContext() {
  return useContext(context);
}