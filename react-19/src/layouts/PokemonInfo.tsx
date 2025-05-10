import { use } from "react"

const PokemonInfo = ({ pokemonPromise }) => {
  const pokemonData = use(pokemonPromise)

  if (!pokemonData) return null
  if (pokemonData?.error) {
    return <h1>Error al buscar el pokemon</h1>
  }

  return (
    <section>
      <h3 className="font-bold text-2xl text-emerald-300">Informacion</h3>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h4 className="text-2xl font-black">{pokemonData.name}</h4>
      <p className="text-2xl">{pokemonData.weight} kg</p>
    </section>
  )
}

export default PokemonInfo