import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/changes-react-19/useActionState')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="min-h-screen flex flex-col  gap-4 items-center   bg-[#141414] text-white text-[calc(10px+2vmin)] ">
      <Link to="/changes-react-19">
        <button className="font-mono text-lg text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90">
          <span aria-hidden="true">←</span>
          Regresar a index
        </button>
      </Link>
      <h1>
        Hook <i>useActionState</i>
      </h1>
      <p className="text-2xl">
        Teoria acerca del hook <i>useActionState</i>.{' '}
        <a
          className="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-hidden focus:underline opacity-90"
          // href="https://www.notion.so/Hook-useTransition-1f98b9fd125680ceb497d91b947e72f9?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          Leer mas aquí
        </a>
      </p>
 

      <section>
     
      </section>
    </section>
  )
}
