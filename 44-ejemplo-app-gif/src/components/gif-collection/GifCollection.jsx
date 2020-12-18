import PropTypes from 'prop-types'
import GifItem from '../gif-item/GifItem'
import './GifCollection.scss'
import { useFetchGifs } from '../../hooks/useFetchGifs'

const GifCollection = ({ category }) => {
  // mandamos a llamar al custom hook useFetch y le mandamos una categoría
  const [images, isLoading] = useFetchGifs(category)

  return (
    <>
      <h2 className='title-collection'>{category}</h2>
      {isLoading && <h2>Loading...</h2>}
      <div className='container-collection'>
        {/* Pinta las imagenes obtenidas por la API */}
        {images.map(image => (
          <GifItem key={image.id} {...image} /> // [1]
        ))}
      </div>
    </>
  )
}

GifCollection.propTypes = {
  category: PropTypes.string.isRequired,
}

export default GifCollection

/**
 * [1] Mandamos las propiedades a nuestro componente que pintará cada imágen de la colección, lo mandamos con el spread operator porque si recordamos,
 * equivaldría a si nosotros enviaramos de la siguiente manera:
 *
 *  <GifItem
 *    key={image.id}
 *    titulo={image.title}
 *    url={image.url}
 *  />
 *
 * Al mandarlo como:
 *  <GifItem
 *    key={image.id}
 *    {...image}
 *  />
 *
 * Sabemos que dentro del componente GifItem, estaremos esperando las propiedades y desde ahí podemos destructurar las props enviadas
 */
