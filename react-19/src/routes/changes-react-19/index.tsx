import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/changes-react-19/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white text-[calc(10px+2vmin)]">
      <h2 className="text-2xl font-bold">React 19 Changes!</h2>
      <h3 className="text-lg mt-6 mb-6">
        Aqui va el contenido de todo lo nuevo en React 19
      </h3>
      <ol className="list-decimal font-mono text-xl">
        <Link to="/changes-react-19/api-use">
          <li className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
            Api{' '}
            <i>
              use <span aria-hidden="true">→</span>
            </i>
          </li>
        </Link>
        <Link to="/changes-react-19/use-transition">
          <li className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
            Hook{' '}
            <i>
              useTransition <span aria-hidden="true">→</span>
            </i>
          </li>
        </Link>{' '}
        <Link to="/changes-react-19/useActionState">
          <li className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
            Hook{' '}
            <i>
              useActionState <span aria-hidden="true">→</span>
            </i>
          </li>
        </Link>
      </ol>
      <Outlet /> {/* This is where child routes will render */}
    </section>
  )
}
