import Gasto from "./Gasto"

const ListaGastos = ({ gastos }) => {
  return (
    <div >

      {
        gastos.map((gasto) =>
          <Gasto
            key={gasto.id}
            gasto={gasto}
          />
        )
      }
    </div>
  )
}

export default ListaGastos