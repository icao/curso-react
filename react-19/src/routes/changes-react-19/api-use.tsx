import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/changes-react-19/api-use')({
  component: ApiUse, // Asegúrate de que este componente esté correctamente definido
})

function ApiUse() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white text-[calc(10px+2vmin)]">
      <h1>Api use, componente Planets</h1>
      <div>Aqui el ejemplo de use</div>
      <Link to="/changes-react-19">
        <button className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
          <span aria-hidden="true">←</span>
          Regresar a index
        </button>
      </Link>
    </section>
  )
}
