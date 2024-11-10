import Header from "./components/Header"
import SideNav from "./components/SideNav"
import Card from "./components/Card"
import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  return (
    <>
      <Header />
      <SideNav selectedPokemon={selectedPokemon} setSelectedPokemon={selectedPokemon} />
      <Card selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
