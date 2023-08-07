import { formatearCantidad } from "../helpers"

const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <div
      className="grid gap-5 md:grid-cols-2 justify-center"
    >

      <div
        className=""
      >
        GRAFICA
      </div>

      <div className="flex flex-col gap-1">
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

    </div>
  )
}

export default ControlPresupuesto