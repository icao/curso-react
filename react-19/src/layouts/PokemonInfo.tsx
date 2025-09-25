import { use } from "react"

interface PokemonApi {
  name: string
  weight: number
  sprites: {
    front_default: string
  }
  error: boolean | null
  
}
interface PokemonInfoProps { 
  pokemonPromise: Promise<PokemonApi>
}

const PokemonInfo = ({ pokemonPromise }: PokemonInfoProps) => {
  const pokemonData = use(pokemonPromise)

  // Necesario para no mostrar nada, ya   que con en api use siempre se manda a renderizar a la primera vez, no hacemos uso del useEffect. Asi evitamos que truene la APP
  if (!pokemonData) return null // eslint-disable-line

  if (pokemonData.error) {
    return <h1>Error al buscar el pokemon 😔 </h1>
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