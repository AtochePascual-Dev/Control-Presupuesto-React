import { useState } from "react"
import Header from "./components/Header"
import NuevoPresupuesto from "./components/NuevoPresupuesto"

function App() {
  const [presupuesto, setPresupuesto] = useState(0);


  return (
    <div className="w-11/12 max-w-lg mx-auto mt-10 py-5 rounded-md bg-white">
      <Header />

      <main className="px-5">
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
        />

      </main>

    </div>
  )
}

export default App
