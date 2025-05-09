import { Suspense, use, useState } from 'react'

const URL_API = 'https://pokeapi.co/api/v2/pokemon'
const fetchPokemon = (pokemonName: string) => {
  if (!pokemonName) return Promise.resolve()

  return fetch(`${URL_API}/${pokemonName}`).then((response) => {
    if (response.ok) return response.json()
    return {
      error: true,
      message: 'Ha ocurrido un error al buscar el pokemon',
    }

    // if (!response.ok) {
    //   return {
    //     error: true,
    //     message: 'Ha ocurrido un error al buscar el pokemon',
    //   }
    //   // throw new Error('Ha ocurrido un error al buscar el pokemon')
    // }
    // return response.json()
  })
}

const PokeApiUse = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <section className="border-2 border-blue-600 rounded-lg p-4 flex flex-col gap-4">
      <div className="max-w-sm  flex gap-4 h-auto items-baseline">
        <input
          type="text"
          className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Busca un pokemon"
          value={query}
          onChange={handleSearch}
        />

        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Buscar
        </button>
      </div>

      <Suspense fallback={<h1>Loading pokemon info...</h1>}>
        <PokemonInfo pokemonPromise={fetchPokemon(query)} />
      </Suspense>

      TODO: HAcer otro ejemplo para terminar de entenderle y uno con manejo de errores con el eror bundory
    </section>
  )
}

const PokemonInfo = ({ pokemonPromise }) => {
  const pokemonData = use(pokemonPromise)

  if (!pokemonData) return null
  if (pokemonData?.error) {
    return <h1>Error al buscar el pokemon</h1>
  }

  return (
    <section>
      <h3 className="font-bold text-2xl">Informacion</h3>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <h4 className="text-2xl font-black">{pokemonData.name}</h4>
      <p className="text-2xl">{pokemonData.weight} kg</p>
    </section>
  )
}

export default PokeApiUse
