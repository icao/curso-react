import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/changes-react-19')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#141414] text-white text-[calc(10px+2vmin)]">
      <h2 className="text-2xl font-bold">React 19 Changes!</h2>
      <h3>Aqui va el contenido de todo lo nuevo en React 19</h3>
    </section>
  )
}
