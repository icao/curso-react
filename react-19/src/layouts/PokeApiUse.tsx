const PokeApiUse = () => {
  const URL = 'https://pokeapi.co/api/v2/pokemon/ditto'

  return (
    <section className="border-2 border-blue-600 rounded-lg p-4 flex flex-col gap-4">
    
      <div className="max-w-sm  flex gap-4 h-auto items-baseline">
        <input
          type="text"
          className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Busca un pokemon"
        />

         
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Buscar
        </button>
      </div>

      <section>
        <h3 className="font-bold text-2xl">Informacion</h3>
        <img src="" alt="" />
        <h4 className="text-2xl">Nombre_pokemon</h4>
        <p className="text-2xl">Alguna descripcion Lorem ipsum dolor sit.</p>
      </section>

      <h1>TODO: Esto esta preparado para consumir el API usando un fetch promise</h1>
    </section>
  )
}

export default PokeApiUse
