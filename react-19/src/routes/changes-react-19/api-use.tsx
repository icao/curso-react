import { Link, createFileRoute } from '@tanstack/react-router'
import PokeApiUse from '@/layouts/PokeApiUse'

export const Route = createFileRoute('/changes-react-19/api-use')({
  component: ApiUse, // Asegúrate de que este componente esté correctamente definido
})

function ApiUse() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white text-[calc(10px+2vmin)] flex gap-4">
      <Link to="/changes-react-19">
        <button className="font-mono text-lg text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
          <span aria-hidden="true">←</span>
          Regresar a index
        </button>
      </Link>
      <h1>
        API <i>use</i>
      </h1>
      <p className="text-2xl">
        Teoria acerca del API <i>use</i>.{' '}
        <a
          className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90"
          href="https://www.notion.so/API-use-React-19-1ee8b9fd1256800b8047cc0793eaff8d?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          Leer mas aquí
        </a>
      </p>
      <p className="text-2xl">
        Teoria acerca de <i>ErrorBoundary</i>.{' '}
        <a
          className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90"
          href="https://www.notion.so/ErrorBoundary-1f28b9fd1256809ebd47ed9cd52cc96e?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          Leer mas aquí
        </a>
      </p>

      <section>
        <h2 className="font-bolder text-3xl">Ejemplo de uso</h2>
        <PokeApiUse />
      </section>
    </section>
  )
}
