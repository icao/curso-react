import { Link } from '@tanstack/react-router'
import { nanoid } from 'nanoid'

const menuItems = [
  { id: nanoid(), name: 'Home', href: '/' },
  { id: nanoid(), name: 'Fetch like a pro', href: '/fetch-pro' },
  { id: nanoid(), name: 'Changes in React 19', href: '/changes-react-19' },
]

export default function Header() {
  return (
    <header className="p-4 flex gap-6 bg-indigo-700  justify-between  ">
      <nav className="flex w-full justify-center">
        {menuItems.map((item) => (
          <div className="px-2 font-bold uppercase text-white hover:text-indigo-300 transition ease-in-out " key={item.id}>
            <Link to={item.href}>{item.name}</Link>
          </div>
        ))}
      </nav>
    </header>
  )
}
