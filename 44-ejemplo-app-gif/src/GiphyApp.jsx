import { useState } from 'react'
import './GiphyApp.scss'
import AddCategory from './components/add-category/AddCategory'
import GiftCollection from './components/gif-collection/GiftCollection'

function GiphyApp() {
  const [categorias, setCategorias] = useState(['anime'])

  return (
    <>
      <h1>GifApp</h1>
      <h2>Categorías</h2>
      <AddCategory setCategorias={setCategorias} />
      {categorias.map(categoria => (
        <GiftCollection key={categoria} category={categoria} />
      ))}
    </>
  )
}

export default GiphyApp
