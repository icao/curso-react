import  { use } from 'react'
import type { Pokemon } from '@/types/Pokemon'

interface PokemonListProps {
  pokemonListPromise: Promise<Array<Pokemon>>
}

const PokemonList = ({ pokemonListPromise }: PokemonListProps) => {
  const pokemons = use(pokemonListPromise)
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300">
        Listado de pokemons
      </h2>
      <ul className="list-disc list-inside">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className="text-lg">
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
