import { pokemonTypeColors } from "../../utils"

/* eslint-disable react/prop-types */
const TypeCard = ({ type }) => {
  return (
    <div className="type-tile" style={{ color: pokemonTypeColors?.[type]?.color, backgroundColor: pokemonTypeColors?.[type]?.background }}>
      <p>{type}</p>
    </div>
  )
}

export default TypeCard