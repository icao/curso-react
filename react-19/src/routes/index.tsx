import { Link, createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#141414] ">
      <header className="flex flex-col items-center justify-center gap-2 py-10 text-white text-[calc(10px+2vmin)] text-center">
        <img
          src={logo}
          className="h-[20vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <Link to="/">
          {' '}
          <span className="text-[#61dafb] hover:underline">Home</span>
        </Link>
        <Link to="/fetch-pro">
          {' '}
          <span className="text-[#61dafb] hover:underline">
            Fetch like a pro
          </span>
        </Link>{' '}
        <Link to="/changes-react-19">
          {' '}
          <span className="text-[#61dafb] hover:underline">
            Changes in React 19
          </span>
        </Link>
      </header>

      <section className="text-2xl text-white  text-balance">
        <h1 className="font-bold">React 19</h1>
        <p>Este proyecto contiene ejemplos de las novedades de React 19</p>
        <p>
          Adicionalmente, se contiene una seccion de ejemplos sobre como hacer
          una buena integracion con las peticiones e una API con fetch
        </p>
        <p>
          Posteriormente se implementa el patron de diseno{' '}
          <i>Render as you fetch</i>, como parte de ejemplos del componente{' '}
          <i>{'<Suspense />'}</i>
        </p>
      </section>
    </div>
  )
}
