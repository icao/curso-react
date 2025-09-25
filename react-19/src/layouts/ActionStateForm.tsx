import React, { useActionState, useState, useTransition } from 'react'


const initialState = {
  success: false,
  name: undefined as string | undefined,
  email: undefined as string | undefined,
  error: undefined as string | undefined
}

  const ActionStateForm = () => {
  
    async function loginAction(state: typeof initialState, formdata: FormData) {
      console.log('Validando datos...')

      const name = formdata.get('name')
      const email = formdata.get('email')

      // similamos una llamada  a API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (!name || !email) {
        return {
          error: 'Todos los campos son obligatorios',
          success: false,
        }
      }

      if (name === "user123" && email === "user@mail.com") {
        return {
          success: true,
          name,
          email,

        }
        
      }
      
      return {
        error: 'Credenciales incorrectas',
        success: false,
      }
    }

  const [state, submitAction, isPending] = useActionState(loginAction, initialState)

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Formulario con useActionState
        </h1>
        <p>name === "user123" && email === "user@mail.com"</p>

        <div className="mt-8 bg-cyan-950 p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-1 gap-6">
            <form action={submitAction} className="space-y-4">
              <h4 className="font-semibold text-green-600 mb-2">
                Nuevo useActionState
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    name="name"
                    disabled={isPending}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={isPending}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                    placeholder="tu@email.com"
                  />
                </div>

                {state.error && (
                  <p className="text-red-500 text-sm mt-1">{state.error}</p>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300"
                >
                  {isPending ? 'Validando...' : 'Enviar Formulario'}
                </button>
              </div>

              {state.success && <div>¡Bienvenido {state.name}!</div>}

              <p className="text-sm text-green-600 mt-4">
                ✅ Nota: Puedes seguir escribiendo mientras valida - la UI no se
                bloquea
              </p>
            </form>

             <pre>{JSON.stringify(state, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionStateForm
