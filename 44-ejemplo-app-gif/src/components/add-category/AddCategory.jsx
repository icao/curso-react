import React, { useState } from 'react'

const AddCategory = ({ setCategorias }) => {
  const [categoria, setCategoria] = useState('')

  function handleChange(event) {
    let value = event.target.value
    setCategoria(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`Agregando... 📪 ${categoria}`)
    // props.setCategorias(categorias => [...categorias, categoria]) // [1]

    // Validando la longitud de la entrada en el input
    if (categoria.trim().length > 2) {
      setCategorias(categorias => [...categorias, categoria]) // [2]
      setCategoria('')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='imput-category'>
        Categoría{' '}
        <input
          id='imput-category'
          type='text'
          value={categoria}
          onChange={handleChange}
        />
      </label>
      <button>Agregar</button>
    </form>
  )
}
export default AddCategory

/**
 * [1] Si no destructuramos las props así se llamaría la funsión
 *
 * [2]  No disponemos del arreglo de categorías, por consiguiente, usamos un callback en el cual esperamos las categorías del estado anterior y regresamos un arreglo con el anterior estado y la nueva categoria.
 * Si se ubieran proporcionado las categorías, la actualización sería la sig: setCategorias([...categorias, categoria])
 *
 */
