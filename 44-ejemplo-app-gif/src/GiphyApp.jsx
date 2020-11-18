import { useState } from 'react'
import './GiphyApp.scss'
import AddCategory from './components/add-category/AddCategory'
import GiftCollection from './components/gif-collection/GiftCollection'

function GiphyApp() {
  const [categorias, setCategorias] = useState(['anime'])

  return (
    <>
      <div className='header'>
        <h1 className='header__logo'>GIFY</h1>
        <AddCategory setCategorias={setCategorias} />
      </div>
      {categorias.map(categoria => (
        <GiftCollection key={categoria} category={categoria} />
      ))}
    </>
  )
}

export default GiphyApp
