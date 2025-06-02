import React, { useState, useTransition } from 'react'

// Simulamos una operación costosa de validación
const expensiveValidation = (name, email) => {
  // Simulamos procesamiento pesado
  const start = Date.now()
  while (Date.now() - start < 100) {
    // Bloquea por 100ms para simular trabajo pesado
  }

  const errors = {}
  if (!name || name.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
  }
  if (!email || !email.includes('@')) {
    errors.email = 'Email debe tener formato válido'
  }
  return errors
}

const TraditionalForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [isPending, startTransition] = useTransition()

  const handleSubmit = () => {
    startTransition(() => {
      const validationErrors = expensiveValidation(name, email)

      setErrors(validationErrors)
    })
  }

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          useTransition: React 19 - En formularios
        </h1>

        <div className="mt-8 bg-cyan-950 p-6 rounded-lg shadow">
          <div className="grid md:grid-cols-1 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 mb-2">
                React 19 (Con useTransition)
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  // disabled={isPending}
                  className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 disabled:bg-green-300"
                >
                  {isPending ? 'Validando...' : 'Enviar Formulario'}
                </button>
              </div>

              <p className="text-sm text-green-600 mt-4">
                ✅ Nota: Puedes seguir escribiendo mientras valida - la UI no se
                bloquea
              </p>
            </div>

            <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
            <ul className="text-sm space-y-1 ">
              <li>• Validación no bloquea la UI</li>
              <li>• El contador sigue funcionando</li>
              <li>• Usuario puede seguir interactuando</li>
              <li>• Experiencia más fluida</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TraditionalForm
