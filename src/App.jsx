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
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  useEffect(() => {
    if (presupuesto > 0) {
      setEsValidoPresupuesto(true);
    };

    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);


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
                setEsActivoModal={setEsActivoModal}
                gastos={gastos}
              />

              <Select
                gastos={gastos}
                categoriaFiltro={categoriaFiltro}
                setCategoriaFiltro={setCategoriaFiltro}
                setGastosFiltrados={setGastosFiltrados}
              />

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
