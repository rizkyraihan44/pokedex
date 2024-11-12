/* eslint-disable react/prop-types */
const AbilitiesContainer = ({ abilities }) => {
  return (
    <div className="stats-card">
      {abilities.map((abilityObj) => (
        <div className="stat-item" key={abilityObj.ability.name}>
          <p>{abilityObj?.ability.name.replaceAll('-', ' ')}</p>
        </div>
      ))}
    </div>
  )
}

export default AbilitiesContainer