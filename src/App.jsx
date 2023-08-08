import { useEffect, useState } from "react"
import Header from "./components/Header"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import ControlPresupuesto from "./components/ControlPresupuesto";
import Modal from "./components/Modal";
import ListaGastos from "./components/ListaGastos";
import Select from "./components/Select";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) || 0);
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false);
  const [esActivoModal, setEsActivoModal] = useState(false);
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) || []);
  const [gastoEditar, setGastoEditar] = useState({});
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  useEffect(() => {
    presupuesto > 0 ? setEsValidoPresupuesto(true) : setEsValidoPresupuesto(false);
    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);


  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
  }, [gastos]);


  useEffect(() => {
    const nuevosGastosFiltrados = gastos.filter((gastoState) => gastoState.categoria === categoriaFiltro);
    setGastosFiltrados(nuevosGastosFiltrados);
  }, [categoriaFiltro]);


  return (
    <div className="pt-10">
      <Header />

      <main>

        {
          esValidoPresupuesto
            ?
            <>
              <ControlPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setEsActivoModal={setEsActivoModal}
                gastos={gastos}
                setGastos={setGastos}
              />

              <Select
                gastos={gastos}
                categoriaFiltro={categoriaFiltro}
                setCategoriaFiltro={setCategoriaFiltro}
                setGastosFiltrados={setGastosFiltrados}
              />

              {
                categoriaFiltro
                  ? gastosFiltrados.length > 0
                    ? <h2 className="w-11/12 max-w-lg mx-auto mb-5 text-3xl font-black text-gray-500">{categoriaFiltro}</h2>
                    : <h2 className="w-11/12 max-w-lg mx-auto mb-5 text-3xl font-black text-gray-500">No hay Gastos en esta categoría</h2>
                  : gastos.length > 0
                    ? <h2 className="w-11/12 max-w-lg mx-auto mb-5 text-3xl font-black text-gray-500">Tus Gastos</h2>
                    : <h2 className="w-11/12 max-w-lg mx-auto mb-5 text-3xl font-black text-gray-500">No hay Gastos</h2>
              }

              <ListaGastos
                gastos={gastos}
                setGastos={setGastos}
                setEsActivoModal={setEsActivoModal}
                setGastoEditar={setGastoEditar}
                categoriaFiltro={categoriaFiltro}
                gastosFiltrados={gastosFiltrados}
              />

            </>
            :
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
        }

        <Modal
          esActivoModal={esActivoModal}
          setEsActivoModal={setEsActivoModal}
          gastos={gastos}
          setGastos={setGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      </main>

    </div>
  )
}

export default App
