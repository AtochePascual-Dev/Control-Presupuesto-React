import { useEffect, useState } from "react";
import Error from "./Error";
import { generarId } from "../helpers";

const Modal = ({ esActivoModal, setEsActivoModal, gastos, setGastos, gastoEditar, setGastoEditar }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setEditar(true);
    }
  }, [gastoEditar]);


  const handleRegistrarGasto = (event) => {
    event.preventDefault();

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      return
    } else if (cantidad <= 0) {
      setMensaje('Cantidad no valida');
      return;
    }

    setMensaje('');

    const nuevoGasto = {
      nombre,
      cantidad,
      categoria,
      fecha: Date.now(),
    }

    if (editar) {
      // Editar Gasto
      nuevoGasto.id = gastoEditar.id;
      const gastosActualizados = gastos.map((gastoState) => gastoState.id === gastoEditar.id ? nuevoGasto : gastoState);
      setGastos(gastosActualizados);
    } else {
      // Agregar gasto
      nuevoGasto.id = generarId();
      setGastos([...gastos, nuevoGasto]);
    }

    cerrarModal();
  }

  const cerrarModal = () => {
    setNombre('');
    setCantidad('');
    setCategoria('');

    setGastoEditar({})

    setEsActivoModal(false);
  };

  return (
    <section className={`fixed z-10 left-0 right-0 top-0 bottom-0 transition-all duration-300 ease-in px-5 py-14 text-white bg-indigo-600 ${esActivoModal ? "translate-x-0" : "translate-x-full"}`}>

      <form
        className="max-w-xs mx-auto"
        onSubmit={handleRegistrarGasto}
      >
        <legend className="mb-10 text-3xl font-bold text-center text-white">
          Registra un Gasto
        </legend>

        <div className="mb-5">
          <label
            htmlFor="gasto"
            className="block mb-1 font-semibold text-xl"
          >
            Nombre del Gasto
          </label>

          <input
            id="gasto"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full py-1 px-2 rounded-md outline-none text-gray-700"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="cantidad"
            className="block mb-1 font-semibold text-xl"
          >
            Cantidad
          </label>

          <input
            id="cantidad"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            className="w-full py-1 px-2 rounded-md outline-none text-gray-700"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="categoria"
            className="block mb-1 font-semibold text-xl"
          >
            Categoria
          </label>

          <select
            id="categoria"
            className="w-full py-1 px-2 text-center rounded-md outline-none text-white-700 cursor-pointer text-gray-900"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="casa">Casa</option>
            <option value="comida">Comida</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input
          type="submit"
          value="Añadir Gasto"
          className="w-full mt-3 p-1 font-bold uppercase rounded-md cursor-pointer text-white bg-blue-800 hover:border-none"
        />

        <p
          onClick={cerrarModal}
          className="absolute top-3 right-3 inline-block px-5 py-1 font-bold rounded-full border cursor-pointer text-gray-900 hover:bg-white transition-colors duration-300"
        >
          X
        </p>

        {
          mensaje &&
          <Error mensaje={mensaje} />
        }
      </form>

    </section>
  )
}

export default Modal