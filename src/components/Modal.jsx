const Modal = () => {

  const handleRegistrarGasto = (event) => {
    event.preventDefault();

  }

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 translate-x-0 transition-all duration-500 px-5 py-10 text-white bg-indigo-600">

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
          className="w-full mt-3 p-1 font-bold uppercase rounded-md cursor-pointer transition-colors duration-500 text-white border hover:bg-blue-800 hover:border-none"
        />
      </form>

    </div>
  )
}

export default Modal