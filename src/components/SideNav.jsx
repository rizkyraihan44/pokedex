import { first151Pokemon, getFullPokedexNumber } from "../utils"
const SideNav = () => {
  return (
    <nav>
      <div className={"header"}>
        <h1 className="text-gradient">Pokedex</h1>
      </div>
      <input type="text" />
      {first151Pokemon.map((pokemon, index) => {
        return <button className={"nav-card"} key={index}><span>{getFullPokedexNumber(index)} </span>{pokemon}</button>
      })}
    </nav>
  )
}

export default SideNav