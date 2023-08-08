import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { formatearCantidad } from "../helpers"

const ControlPresupuesto = ({ presupuesto, setEsActivoModal, gastos }) => {
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
    setGastado(totalGastado);
  }, [gastos]);

  return (
    <div className="w-11/12 max-w-lg mx-auto grid gap-5 justify-center mb-10 px-5 py-10 rounded-md md:grid-cols-2 bg-white shadow-lg">

      <div className="">
        <div className="w-2/3 mx-auto">
          <CircularProgressbar />
        </div>
        <button className="w-full mt-5 p-1 font-bold rounded-md transition-colors duration-300 text-white bg-rose-700 hover:bg-rose-800">
          Resetear App
        </button>
      </div>

      <div className="flex flex-col justify-end">
        <div className="md:mb-8 flex flex-col gap-1">
          <p className="font-semibold text-indigo-600">
            <span className="text-xl font-bold text-gray-500">Presupuesto: </span>
            {formatearCantidad(presupuesto)}
          </p>

          <p className="font-semibold text-indigo-600">
            <span className="text-xl font-bold text-gray-500">Gastado: </span>
            {formatearCantidad(gastado)}
          </p>

          <p className="font-semibold text-indigo-600">
            <span className="text-xl font-bold text-gray-500">Disponible: </span>
            {formatearCantidad(presupuesto - gastado)}
          </p>
        </div>

        <button
          onClick={() => setEsActivoModal(true)}
          className="w-full mt-5 p-1 font-bold rounded-md transition-colors duration-300 text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Añadir Gasto
        </button>
      </div>

    </div>
  )
}

export default ControlPresupuesto