import { useEffect, useState } from 'react'
import type { Users } from '@/types/User'
import { useFetch } from '@/hooks/useFetch'

const EjemploFetch = () => {
  const [users, setUsers] = useState<Users | null>(null)

  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()

    return data
  }

  useEffect(() => {
    getUsers().then((data) => setUsers(data.results))
  }, [])

  if (!users) return <div>Loading...</div>

  return (
    <section className="flex flex-col items-center gap-4">
      <h3 className="text-xl font-bold text-indigo-400">
        Peticion de un API con <i>fetch</i> API
      </h3>
      <section className="text-white">
        <ol className="list-disc">
          {users.map((user) => (
            <li className="text-base" key={user.login.uuid}>
              {user.name.first}
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default EjemploFetch
