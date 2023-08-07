import { useEffect, useState } from "react"
import Header from "./components/Header"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import ControlPresupuesto from "./components/ControlPresupuesto";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) || 0);
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false);

  useEffect(() => {
    if (presupuesto > 0) {
      setEsValidoPresupuesto(true);
    };

    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto]);


  return (
    <div className="pt-10 h-screen overflow-hidden">
      <Header />

      <main className="w-11/12 max-w-lg mx-auto mb-10 px-5 py-10 rounded-md bg-white shadow-lg">
        {
          esValidoPresupuesto
            ?
            <ControlPresupuesto
              presupuesto={presupuesto}
            />
            :
            <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
            />
        }

        <Modal />
      </main>

    </div>
  )
}

export default App
