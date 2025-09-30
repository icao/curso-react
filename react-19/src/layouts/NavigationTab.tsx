import { useEffect, useState, useTransition } from 'react'

const NavigationTab = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setActiveTab(tab)
    })
  }

  return (
    <section>
      <nav className="flex gap-4 justify-center">
        <button
          onClick={() => handleTabChange('home')}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Home
        </button>
        <button
          onClick={() => handleTabChange('profile')}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Profile
        </button>
        <button
          onClick={() => handleTabChange('settings')}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Settings
        </button>
      </nav>
      {isPending && (
        <div className="text-5xl text-cyan-500">Cargando pagina...</div>
      )}
      <main>
        {activeTab === 'home' && <Home />}
        {activeTab === 'profile' && <Profile />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </section>
  )
}

const Home = () => {
  return (
    <div>
      🏠 Home
      <p>Welcome to the home tab!</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, et
        cumque. Iusto.
      </p>
    </div>
  )
}

const Profile = () => {
  return (
    <div>
      🧑🏻‍✈️ Profile
      <p>Welcome to the profile tab!</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ut
        voluptate quas repellat nisi aut.
      </p>
      <Example />
    </div>
  )
}

const Settings = () => {
  return (
    <div>
      ⚙️ Settings
      <p>Welcome to the settings tab!</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia,
        voluptate, doloremque, quos.
      </p>
      <PersonalData />
    </div>
  )
}

const PersonalData = () => {
  const URL = 'https://jsonplaceholder.typicode.com/users/1'
  interface UserData {
    name: string
    email: string
    phone: string
    address: { city: string }
  }
  const [data, setData] = useState<UserData | null>(null)
  const [isPending, startTransition] = useTransition()

  const getUserData = () => {
    startTransition(async () => {
      await fetch(URL)
        .then((response) => response.json())
        .then((dataResponse) => {
          setData(dataResponse)
          console.log('Data fetched:', dataResponse)
        })
    })
  }

  return (
    <div>
      <h2>Datos personales</h2>

      <button
        onClick={() => getUserData()}
        disabled={isPending}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        {isPending ? 'Cargando...' : 'Cargar datos'}
      </button>

      {isPending && (
        <div className="text-5xl text-cyan-500">Cargando datos...</div>
      )}

      {data && (
        <div className="mt-4">
          <p>Nombre: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Teléfono: {data.phone}</p>
          <p>Ciudad: {data.address.city}</p>
        </div>
      )}
    </div>
  )
}

const Example = () => {
  const [items, setItems] = useState<Array<string>>([])
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, i) => `Item ${i}`)

      setItems(newItems)
    })
  }, [])

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default NavigationTab
