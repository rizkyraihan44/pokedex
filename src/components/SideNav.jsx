/* eslint-disable react/prop-types */
import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

const SideNav = ({ selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredPokemon = first151Pokemon.filter((pokemon, pokeIndex) => {
    const pokedexNumber = getFullPokedexNumber(pokeIndex).toString()
    return (
      pokedexNumber.includes(searchValue) || pokemon.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  return (
    <nav className={!showSideMenu ? 'open' : ''}>
      <div className={`header ${!showSideMenu ? 'open' : ''}`}>
        <button
          className="open-nav-button"
          onClick={handleCloseMenu}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokedex</h1>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="E.g. 001 or bulba..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {filteredPokemon.map((pokemon, index) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon)
        return (
          <button
            className={`nav-card ${index === selectedPokemon ? 'nav-card-selected' : ''}`}
            key={truePokedexNumber}
            onClick={() => {
              setSelectedPokemon(truePokedexNumber)
              handleCloseMenu()
            }}
          >
            <span>{getFullPokedexNumber(truePokedexNumber)} </span>{pokemon}
          </button>
        )
      })}
    </nav>
  )
}

export default SideNav