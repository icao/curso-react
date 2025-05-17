import { Suspense, useState } from 'react'
import { ErrorBoundary } from '../shared/ErrorBoundary'
import PokemonInfo from './PokemonInfo'
import PokemonList from './PokemonList'

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

const pokemonList = async () => {
  const response = await fetch(`${URL_API}/?limit=10`)
  const data = await response.json()
  return data.results
}

const pokemonListWithError = async () => {
  const response = await fetch(`${URL_API}/?limit=10`)
  const data = await response.json()
  // return data.results
  throw new Error('Ha ocurrido un error al buscar el pokemon')
}

const PokeApiUse = () => {
  const [query, setQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <section className="flex gap-5">
      {/* NOTA: El componente del listado se dejo aqui para que se pueda ver el resultado de la petición usando el API use, como otro ejemplo. 
      Notese que cada vez que se hace una busqueda, el listado de pokemons se vuelve a cargar.
      Si se quiere evitar esto, se puede separar el componente PokemonList y quedar como un componente independiente, a la par que el componente PokeApiUse.
      */}
      <Suspense fallback={<h1>Loading pokemon list...</h1>}>
        {/* Listado de pokemons */}
        <PokemonList pokemonListPromise={pokemonList()} />
      </Suspense>
      <div className="border-2 border-blue-600 rounded-lg p-4 flex flex-col gap-4">
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
          {/* Información del pokemon */}
          <PokemonInfo pokemonPromise={fetchPokemon(query)} />
        </Suspense>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-emerald-300">
          Listado de pokemons con error
        </h2>
        <ErrorBoundary
          fallback={
            <h1 className="text-red-400 text-3xl">
              Error al buscar el pokemon EB
            </h1>
          }
        >
          <Suspense fallback={<h1>Loading pokemon list...</h1>}>
            {/* Listado de pokemons */}
            <PokemonList pokemonListPromise={pokemonListWithError()} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  )
}

export default PokeApiUse
