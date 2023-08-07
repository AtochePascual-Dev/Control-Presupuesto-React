import { useEffect, useState } from "react"
import Header from "./components/Header"
import NuevoPresupuesto from "./components/NuevoPresupuesto"
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [esValidoPresupuesto, setEsValidoPresupuesto] = useState(false);

  useEffect(() => {
    if (presupuesto > 0) {
      setEsValidoPresupuesto(true);
    };
  }, [presupuesto]);


  return (
    <div className="w-11/12 max-w-lg mx-auto mt-10 py-5 rounded-md bg-white">
      <Header />

      <main className="px-5">
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
      </main>

    </div>
  )
}

export default App
