import { useState } from 'react'
import './GiphyApp.scss'
import AddCategory from './components/add-category/AddCategory'
import GifCollection from './components/gif-collection/GifCollection'

function GiphyApp() {
  const [categorias, setCategorias] = useState(['pibubear'])

  return (
    <>
      <div className='header'>
        <h1 className='header__logo'>GIFY</h1>
        <AddCategory setCategorias={setCategorias} />
      </div>
      {categorias.map(categoria => (
        <GifCollection key={categoria} category={categoria} />
      ))}
    </>
  )
}

//TODO: REVISAR DONDE NOS QUEDAMOS PARA HACER LOS TESTS

export default GiphyApp
