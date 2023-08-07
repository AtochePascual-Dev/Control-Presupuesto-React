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
    <div className="w-11/12 max-w-lg mx-auto px-5 py-10  rounded-md bg-white shadow-lg">
      <Header />

      <main >
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
