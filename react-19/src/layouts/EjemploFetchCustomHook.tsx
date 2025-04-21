import { useFetch } from '@/hooks/useFetch'

const EjemploFetchCustomHook = () => {
  const URL = 'https://randomuser.me/api/?results=20'

  const { data } = useFetch(URL)

  // TODO:  Integrar el custom hook mas robusto con el pending y el error para poenr el componente fallback

  return (
    <section className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-bold text-indigo-400">
        Peticion de un API con <i>fetch</i> API
      </h3>
      <section className="text-white">
        <ol className="list-disc">
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
