import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { formatearCantidad } from "../helpers"

const ControlPresupuesto = ({ presupuesto, setEsActivoModal }) => {
  return (
    <div className="grid gap-5 justify-center md:grid-cols-2"    >

      <div className="">
        <div className="w-2/3 mx-auto">
          <CircularProgressbar />
        </div>
        <button className="w-full mt-5 p-1 font-bold rounded-md transition-colors duration-300 text-white bg-red-700 hover:bg-red-800">
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
            {formatearCantidad(presupuesto)}
          </p>

          <p className="font-semibold text-indigo-600">
            <span className="text-xl font-bold text-gray-500">Disponible: </span>
            {formatearCantidad(presupuesto)}
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