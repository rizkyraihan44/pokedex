import Header from "./components/Header"
import SideNav from "./components/SideNav"
import Card from "./components/PokeCard/Card"
import { useState } from "react"

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0)
  const [showSideMenu, setShowSideMenu] = useState(true)

  const handleToggleMenu = () => setShowSideMenu(!showSideMenu)
  const handleCloseMenu = () => setShowSideMenu(true)

  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav
        showSideMenu={showSideMenu}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleToggleMenu={handleToggleMenu}
        handleCloseMenu={handleCloseMenu}
      />
      <Card selectedPokemon={selectedPokemon} />
    </>
  )
}

export default App
