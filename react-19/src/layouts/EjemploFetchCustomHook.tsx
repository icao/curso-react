import { useFetch } from '@/hooks/useFetch'

const EjemploFetchCustomHook = () => {
  const URL = 'https://randomuser.me/api/?results=20'

  const { data, isLoading, error, handleAbortController } = useFetch(URL)

  return (
    <section className="flex flex-col items-center gap-4">
      <button
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => handleAbortController()}
      >
        Abortar peticion
      </button>
      <h3 className="text-xl font-bold text-indigo-400">
        Peticion de un API con <i>fetch</i> API
      </h3>
      <section className="text-white">
        <ol className="list-disc">
          {error && <p className="text-white font-medium">{error}</p>}
          {isLoading && <p className="text-white font-medium">Loading...</p>}
          {data?.map((user) => (
            <li className="text-base" key={user.login.uuid}>
              {user.name.first}
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default EjemploFetchCustomHook
