const formatearCantidad = (cantidad) => {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};

const generarId = () => {
  return Math.random().toString(32).substring(2) + Date.now().toString(32).substring(2);
};


export {
  formatearCantidad,
  generarId
}