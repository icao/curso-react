import { useState } from 'react'
import './GiphyApp.scss'
import AddCategory from './components/add-category/AddCategory'

function GiphyApp() {
  const [categorias, setCategorias] = useState([
    'anime',
    'videojuegos',
    'peliculas',
    'series',
  ])
  return (
    <>
      <h1>GifApp</h1>
      <h2>Categorías</h2>
      <AddCategory />
      <ol>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria}</li>
        ))}
      </ol>
    </>
  )
}

export default GiphyApp
