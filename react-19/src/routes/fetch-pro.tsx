import { createFileRoute } from '@tanstack/react-router'
import EjemploFetch from '@/layouts/EjemploFetch'
import EjemploFetchCustomHook from '@/layouts/EjemploFetchCustomHook'

export const Route = createFileRoute('/fetch-pro')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="p-9 min-h-screen flex flex-col items-center gap-12 bg-[#141414] text-white text-[calc(10px+2vmin)]">
      <h2 className="text-2xl font-bold">
        Entendiendo <i className="text-violet-400">fetch</i> como un pro
      </h2>

      <section className=" flex flex-row items-center  gap-8">
        <EjemploFetch />

        <EjemploFetchCustomHook />
      </section>
    </section>
  )
}
