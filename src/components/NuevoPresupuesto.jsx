import { useState } from "react";
import Error from "./Error";

const NuevoPresupuesto = ({ setPresupuesto }) => {
  const [error, setError] = useState(false);
  let nuevoPresupuesto;

  const handleAgregarPresupuesto = (event) => {
    event.preventDefault();
    nuevoPresupuesto = document.querySelector('#presupuesto').value;

    if (nuevoPresupuesto <= 0) {
      setError(true);
      return false;
    }
    setError(false);
    setPresupuesto(Number(nuevoPresupuesto))
  };

  return (
    <form
      onSubmit={handleAgregarPresupuesto}
      className="w-11/12 max-w-lg mx-auto mb-10 px-5 py-10 rounded-md bg-white shadow-lg"
    >


      <label
        htmlFor="presupuesto"
        className="mb-3 block text-xl font-bold text-gray-500 text-center"
      >
        Ingresa tu Presupuesto
      </label>

      <input
        id="presupuesto"
        type="number"
        placeholder="$100"
        className="w-full mb-8 p-2 border text-center rounded-md outline-none"
      />

      <input
        value="Ingresar Presupuesto"
        type="submit"
        className="w-full p-2 font-bold rounded-md uppercase cursor-pointer text-white bg-indigo-600"
      />

      {error && <Error mensaje="Presupuesto no valido" />}

    </form>
  )
}

export default NuevoPresupuesto