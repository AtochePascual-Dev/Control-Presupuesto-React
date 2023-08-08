const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

const generarId = () => {
  return Math.random().toString(32).substring(2) + Date.now().toString(32).substring(2);
};

const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };

  return nuevaFecha.toLocaleDateString('es-ES', opciones);
};


export {
  formatearCantidad,
  generarId,
  formatearFecha
}