import React, { useState } from 'react'

const AddCategory = () => {
  const [categoria, setCategoria] = useState('')

  function handleChange(event) {
    let value = event.target.value
    setCategoria(value)
  }
  return (
    <form>
      <label htmlFor='imput-category'>
        Categoría{' '}
        <input
          id='imput-category'
          type='text'
          value={categoria}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default AddCategory
