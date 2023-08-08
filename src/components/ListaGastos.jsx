import Gasto from "./Gasto"

const ListaGastos = ({ gastos, setGastos, setEsActivoModal, setGastoEditar, categoriaFiltro, gastosFiltrados }) => {
  const lista = categoriaFiltro ? gastosFiltrados : gastos;

  return (
    <div >

      {
        lista.map((gasto) =>
          <Gasto
            key={gasto.id}
            gasto={gasto}
            gastos={gastos}
            setGastos={setGastos}
            setEsActivoModal={setEsActivoModal}
            setGastoEditar={setGastoEditar}
          />
        )
      }
    </div>
  )
}

export default ListaGastos