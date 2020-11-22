import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(url)
        const dogs = await response.json()
        setIsFetching(false)
        setData(dogs.message)
      } catch (error) {
        setIsFetching(false)
        setError(error.message)
      }
    }
    request()
  }, [url]) // Estamos al pendiente de la URL porque puede cambiar, siempre que sea llamado nuestro custom hook

  return [data, isFetching, error] // retornamos un arreglo para que sea mas generico el uso de la respuesta del custom hook
}
