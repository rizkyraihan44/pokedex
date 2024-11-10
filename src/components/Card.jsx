/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { getFullPokedexNumber, getPokedexNumber } from "../utils"
import TypeCard from "./TypeCard"
import Modal from "./Modal"

const Card = ({ selectedPokemon }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [skill, setSkill] = useState(null)

  const { name, height, abilities, stats, types, moves, sprites } = data || {}

  const imgList = Object.keys(sprites || {}).filter(val => {
    if (!sprites[val]) { return false }
    else if (['versions', 'other'].includes(val)) { return false };
    return true
  })

  useEffect(() => {
    if (loading || !localStorage) return

    let cache = {}
    if (localStorage.getItem('pokedex')) {
      cache = JSON.parse(localStorage.getItem('pokedex'))
    }

    if (selectedPokemon in cache) {
      setData(cache[selectedPokemon])
      console.log('Found pokemon in cache')
      return
    }

    async function fetchPokemonData() {
      try {
        const baseUrl = `https://pokeapi.co/api/v2/`
        const suffix = `pokemon/${getPokedexNumber(selectedPokemon)}`
        const url = baseUrl + suffix
        const response = await fetch(url)
        const pokemonData = await response.json()
        setData(pokemonData)

        cache[selectedPokemon] = pokemonData
        localStorage.setItem('pokedex', JSON.stringify(cache))
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPokemonData()
  }, [selectedPokemon])

  return (
    (loading || !data) ? (<div>Loading...</div>) :
      (<div className="poke-card">
        <Modal>
          <div>
            <h6>Name</h6>
            <h2></h2>
          </div>
          <div>
            <h6>description</h6>
            <p>desscacaa</p>
          </div>
        </Modal>
        <div>
          <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
          <h2>{name}</h2>
        </div>
        <div className="type-container">
          {types.map((typeObj, typeIndex) => (
            <div className="type" key={typeIndex}>
              <TypeCard key={typeIndex} type={typeObj?.type.name} />
            </div>
          ))}
        </div>
        <img src={sprites.other['official-artwork'].front_default} className="default-img" alt={`${name}-large-img`} />
        <div className="img-container">
          {imgList.map((img, imgIndex) => {
            const imgUrl = sprites[img]
            return (
              <img key={imgIndex} src={imgUrl} alt={`${name}-${img}-${img}`} />
            )
          })}
        </div>
        <h3>Stats</h3>
        <div className="stats-card">
          {stats.map((statObj, index) => {
            const { stat, base_stat } = statObj
            return (
              <div key={index} className="stat-item">
                <p>{stat?.name.replaceAll('-', ' ')}</p>
                <h4>{base_stat}</h4>
              </div>
            )
          })}
        </div>
        <h3>Moves</h3>
        <div className="pokemon-move-grid">
          {moves.map((moveObj, index) => {
            return (
              <button key={index} className="button-card pokemon-move" onClick={() => { }}>
                <p>
                  {moveObj?.move?.name.replaceAll('-', ' ')}
                </p>
              </button>
            )
          })}
        </div>
      </div>)
  )
}

export default Card