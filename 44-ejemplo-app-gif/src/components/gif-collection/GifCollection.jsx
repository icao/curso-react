import React, { useEffect, useState } from 'react'
import GifItem from '../gif-item/GifItem'
import './GifCollection.scss'
import { searchGif } from '../../helpers/searchGif'

const GifCollection = ({ category }) => {
  // Estado para guardar las imagenes que devuelve la API
  const [images, setImages] = useState([])

  useEffect(() => {
    // Mandamosa buscar los gifs por meido de la API con searchGif
    searchGif(category).then(gifs => setImages(gifs))
  }, [category]) // [1]

  return (
    <>
      <h2 className='title-collection'>{category}</h2>
      <div className='container-collection'>
        {/* Pinta las imagenes obtenidas por la API */}
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}

export default GifCollection

/**
 * [1] React aquí detecta que puede cambiar en cualquier momento esta propiedad category, lo cual no es así porque nosotros mandamos una categoria desde linput y no hay forma de cambiarse o  que se reemplace una categoria. Pero para evitar el warning lanzado por react, lo incluimos en el arreglo que React monitorea para usar el useEffect y pueda volver a ejecutarse.
 */
