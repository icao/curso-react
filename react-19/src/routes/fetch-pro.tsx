import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fetch-pro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <h2 className='text-2xl font-bold'>Hello "/fetch-like-pro"!</h2>
    <h3>Aqui va el contenido de fetch como un pro</h3>
  
  </>
}
