import { useState, useEffect } from 'react'
import { searchGif } from '../helpers/searchGif'

export function useFetchGifs(category) {
  // Estado para guardar las imagenes que devuelve la API
  // const [images, setImages] = useState([]) // Lo cambiamos a uno más genérico
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    // Mandamosa buscar los gifs por medio de la API con searchGif
    searchGif(category).then(gifs => {
      setIsFetching(false)
      setData(gifs)
    })
  }, [category]) // [1]
  return [data, isFetching] // Retornamos in arreglo por si queremos en donde se cree la instancia de este custom hook, renombrar los valores con algo mas acorde al contexto donde se esta llamando
}

/**
 * [1] Monitoreamos la categoría porque es el único elemento que puede cambiar,
 * si cambia es que se ana llamando otra petición para obtener los nuevos Gifs
 */
