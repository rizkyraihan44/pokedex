/* eslint-disable react/prop-types */
const PokemonImage = ({ name, sprites, imgList }) => {
  return (
    <div>
      <img src={sprites.other['official-artwork'].front_default} className="default-img" alt={`${name}-large-img`} />
      <div className="img-container">
        {imgList.map((imgKey,) => {
          const imgUrl = sprites[imgKey]
          return (
            <img key={imgKey} src={imgUrl} alt={`${name}-${imgKey}`} />
          )
        }
        )}
      </div>
    </div>
  )
}

export default PokemonImage