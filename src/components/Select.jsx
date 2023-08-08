import { useEffect, useState } from "react"

const Select = ({ categoriaFiltro, setCategoriaFiltro }) => {


  return (
    <div className="w-11/12 max-w-lg mb-10 mx-auto p-3 gap-4 rounded-md shadow-lg bg-white md:flex md:items-center">
      <label
        htmlFor="categoriaSelect"
        className="w-2/5 mb-2 mx-auto text-xl font-bold text-center block text-gray-600"
      >
        Filtrar Gastos
      </label>

      <select
        id="categoriaSelect"
        className="w-full p-2 text-center outline-none rounded-md border transition-colors duration-300 bg-gray-200 cursor-pointer hover:bg-gray-300"
        value={categoriaFiltro}
        onChange={(e) => setCategoriaFiltro(e.target.value)}
      >
        <option value="">-- Todas las categorías --</option>
        <option value="ahorro">Ahorro</option>
        <option value="casa">Casa</option>
        <option value="comida">Comida</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
      </select>
    </div>
  )
}

export default Select