export const parseFechaFront = (fecha) => { //Convierte fecha a formato dd/mm/aaaa
  const dd = new Date(fecha).getDate();
  const mm = new Date(fecha).getMonth()+1;
  const aaaa = new Date(fecha).getFullYear();
  return `${dd}/${mm}/${aaaa}`
}

export const parseFechaBack = (fecha) => { //Convierte Date a formato 'aaaa-mm-dd'
  const dd = fecha.getDate();
  const mm = fecha.getMonth();
  const aaaa = fecha.getFullYear();
  return `${aaaa}-${mm}-${dd}`
}

export const searchFilterNombre = (arreglo, aux) => { //filtra en un arreglo los elementos que incluyan un valor
  return arreglo.filter(
    (elem) => elem.nombre.toLowerCase().includes(aux)
  );
}

export const searchFilterId = (arreglo, aux) => { //filtra en un arreglo los elementos que incluyan un valor
  return arreglo.filter(
    (elem) => elem.id.toString().includes(aux)
  );
}


export const categoriasProductos = ['Snacks', 'Bebidas', 'Otros'];