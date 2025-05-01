import { useEffect, useState } from 'react'
import type { Users } from '@/types/User'

export const useFetch = (url: string) => {
  const [data, setData] = useState<Users | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null | string>(null)
  const [controller, setController] = useState<AbortController | null>(null)

  useEffect(() => {
    // Instanciamos un controlador de aborto para abortar la peticion, si es necesario
    const abortController = new AbortController()
    setController(abortController)
    setIsLoading(true)
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData.results))
      .catch((errorP) => {
        if (errorP.name === 'AbortError') {
          console.log('Request Cancelled')
        } else {
          setError(errorP)
        }
      })
      .finally(() => setIsLoading(false))

    // Si el componente es destruido, abortamos la peticionm como parte de la limpieza al usar useEffect
    return () => abortController.abort()
  }, [url])

  function handleAbortController() {
    if (controller) {
      controller.abort()
      setError(`Request Cancelled`)
      console.log('Aborted')
    }
  }

  return { data, isLoading, error, handleAbortController }
}
