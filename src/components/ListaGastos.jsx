import Gasto from "./Gasto"

const ListaGastos = ({ gastos, setGastos, setEsActivoModal, setGastoEditar }) => {
  return (
    <div >

      {
        gastos.map((gasto) =>
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