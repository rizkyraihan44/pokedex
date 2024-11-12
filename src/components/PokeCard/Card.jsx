/* eslint-disable react/prop-types */
import { getFullPokedexNumber } from "../../utils"
import Modal from "../Modal"
import TypeContainer from "./TypeContainer"
import PokemonImage from "./PokemonImage"
import StatsContainer from "./StatsContainer"
import MovesContainer from "./MovesContainer"
import usePokemonData from "../../hooks/usePokemonData"
import useMoveData from "../../hooks/useMoveData"
import AbilitiesContainer from "./AbilitiesContainer"

const Card = ({ selectedPokemon }) => {
  const { data, loading } = usePokemonData(selectedPokemon)
  const { skill, fetchMoveData, setSkill } = useMoveData()


  const { name, abilities, stats, types, moves, sprites } = data || {}

  const imgList = Object.keys(sprites || {}).filter(
    val => sprites[val] && !['other', 'versions'].includes(val)
  )

  if (loading || !data) {
    return (
      <div className="poke-card">
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <div className="poke-card">
      {skill && (
        <Modal handleCloseModal={() => { setSkill(null) }}>
          <div>
            <h6>Name</h6>
            <h2 className="skill-name">{skill.name.replaceAll('-', ' ')}</h2>
          </div>
          <div>
            <h6>description</h6>
            <p>{skill.description}</p>
          </div>
        </Modal>
      )}
      <div>
        <h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
        <h2>{name}</h2>
      </div>
      <TypeContainer types={types} />
      <PokemonImage sprites={sprites} name={name} imgList={imgList} />
      <StatsContainer stats={stats} />
      <h3>Abilities</h3>
      <AbilitiesContainer abilities={abilities} />
      <h3>Moves</h3>
      <MovesContainer moves={moves} fetchMoveData={fetchMoveData} />
    </div>
  )
}

export default Card