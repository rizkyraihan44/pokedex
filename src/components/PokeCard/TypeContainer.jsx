/* eslint-disable react/prop-types */
import TypeCard from "./TypeCard"

const TypeContainer = ({ types }) => {
  return (
    <div className="type-container">
      {types.map((typeObj) => (
        <div className="type" key={typeObj?.type.name}>
          <TypeCard type={typeObj?.type.name} />
        </div>
      ))}
    </div>
  )
}

export default TypeContainer