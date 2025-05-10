import React, { use } from 'react'

const PokemonList = ({ pokemonListPromise }) => {
  const pokemons = use(pokemonListPromise)
  if (!pokemons) return null

  return (
    <div>
      <h2 className="text-2xl font-bold text-emerald-300">
        Listado de pokemons
      </h2>
      <ul className="list-disc list-inside">
        {pokemons?.map((pokemon) => (
          <li key={pokemon.name} className='text-lg'>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList
