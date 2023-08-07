import { useState } from "react";

const NuevoPresupuesto = ({ setPresupuesto }) => {

  const handleAgregarPresupuesto = (event) => {
    event.preventDefault();
    const nuevoPresupuesto = document.querySelector('#presupuesto').value;

    if (nuevoPresupuesto <= 0) {
      console.log("Presupuesto no valido");
      return false;
    }

    setPresupuesto(Number(nuevoPresupuesto))
  };

  return (
    <form
      onSubmit={handleAgregarPresupuesto}
    >
      <label
        htmlFor="presupuesto"
        className="mb-3 block text-xl font-bold text-gray-500 text-center"
      >
        Ingres tu Presupuesto
      </label>

      <input
        id="presupuesto"
        type="number"
        placeholder="$100"
        className="w-full mb-8 p-2 border rounded-md outline-none"
      />

      <input
        value="Ingresar Presupuesto"
        type="submit"
        className="w-full p-2 font-bold rounded-md uppercase cursor-pointer text-white bg-indigo-600"
      />
    </form>
  )
}

export default NuevoPresupuesto