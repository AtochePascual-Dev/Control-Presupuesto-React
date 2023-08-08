import Gasto from "./Gasto"

const ListaGastos = ({ gastos, setGastos }) => {
  return (
    <div >

      {
        gastos.map((gasto) =>
          <Gasto
            key={gasto.id}
            gasto={gasto}
            gastos={gastos}
            setGastos={setGastos}
          />
        )
      }
    </div>
  )
}

export default ListaGastos