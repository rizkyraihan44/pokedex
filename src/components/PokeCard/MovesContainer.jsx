/* eslint-disable react/prop-types */
const MovesContainer = ({ moves, fetchMoveData }) => {
  return (
    <div className="pokemon-move-grid">
      {moves.map((moveObj) => (
        <button key=
          {moveObj.move.name}
          className="button-card pokemon-move"
          onClick={() => fetchMoveData(moveObj.move.name, moveObj.move.url)}
        >
          <p>
            {moveObj.move.name.replaceAll('-', ' ')}
          </p>
        </button>
      ))}
    </div>
  )
}

export default MovesContainer