import GifItem from '../gif-item/GifItem'
import './GifCollection.scss'
import { useFetchGifs } from '../../hooks/useFetchGifs'

const GifCollection = ({ category }) => {
  // mandamos a llamar al custom hook useFetch y le mandamos una categoría
  const [images, isLoading] = useFetchGifs(category)

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <h2 className='title-collection'>{category}</h2>
      <div className='container-collection'>
        {/* Pinta las imagenes obtenidas por la API */}
        {images.map(image => (
          <GifItem key={image.id} {...image} /> // [1]
        ))}
      </div>
    </>
  )
}

export default GifCollection

/**
 * [1] Mandamos las propiedades a nuestro componente que pintara cada imagen de la colección, lo mandamos con el spread operator porque si recorbdamos,
 * equivaldría a si nosotros enviaramos de la siguiente manera:
 *
 *  <GifItem
 *    key={image.id}
 *    titulo={image.title}
 *    url={image.url}
 *  />
 *
 * Al mandalor como:
 *  <GifItem
 *    key={image.id}
 *    {...image}
 *  />
 *
 * Sabemos que dentro del componente GifItem, estaremos esperando las propiedades y desde ahi podemos destructurar las props enviadas
 */
