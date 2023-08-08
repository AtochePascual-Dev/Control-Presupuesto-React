import { useEffect, useState } from "react"
import Header from "./components/Header"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import ControlPresupuesto from "./components/ControlPresupuesto";
import Modal from "./components/Modal";
import ListaGastos from "./components/ListaGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) || 0);
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false);

  const [esActivoModal, setEsActivoModal] = useState(false);

  const [gastos, setGastos] = useState([]);


  useEffect(() => {
    if (presupuesto > 0) {
      setEsValidoPresupuesto(true);
    };

    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);


  return (
    <div className="pt-10">
      <Header />

      <main className="w-11/12 max-w-lg mx-auto mb-10 px-5 py-10 rounded-md bg-white shadow-lg">

        {
          esValidoPresupuesto
            ?
            <ControlPresupuesto
              presupuesto={presupuesto}
              setEsActivoModal={setEsActivoModal}
            />
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
        />
      </main>

      <ListaGastos
        gastos={gastos}
      />


    </div>
  )
}

export default App
