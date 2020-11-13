import React, { useState, useEffect } from 'react'

const ExampleUseEffect = () => {
  return (
    <>
      <h1>Ejemplo Formulario - useEffect</h1>
      <h3>1.- useEffect SIEMPRE SE EJECUTA DESPUES DEL RENDER</h3>
      <PrimerEjemplo />
      <h3>
        2.- useEffect SE EJECUTA UNA SOLA VEZ - <em>componentDidMount</em>
      </h3>
      <SegundoEjemplo />
      <h3>
        3- useEffect SE EJECUTA MONITOREANDO PARAMETROS EN EL ARRAY -{' '}
        <em>componentDidUpdate</em>
      </h3>
      <h3>
        4.- useEffect SANEA UNA SUSCRIPCION - <em>componentWillUnmount</em>
      </h3>
      <h4>
        <span role='img' aria-label='jsx-a11y/aria-proptypes'>
          🚧{' '}
        </span>
        IMPORTANTE: El componente se renderiza al montarse y cada vez que el
        estado es actualizado
      </h4>
    </>
  )
}

const PrimerEjemplo = () => {
  const [nombre, setNombre] = useState('John')

  useEffect(() => {
    console.log(
      `%cEj1. useEffect -> Estoy montado y me ejecuto siempre que me renderizo`,
      'color: darkturquoise; font-weight: bold; font-size: 18px;'
    )
  })

  const handleChange = event => {
    let value = event.target.value
    setNombre(value)
  }

  return (
    <>
      <form>
        <label htmlFor='id-name'>
          Nombre{' '}
          <input
            id='id-name'
            name='nombre'
            type='text'
            placeholder='Nombre'
            value={nombre}
            onChange={handleChange}
          />
        </label>{' '}
        <strong>{nombre}</strong>
      </form>
    </>
  )
}

const SegundoEjemplo = () => {
  const [nombre, setNombre] = useState('')

  useEffect(() => {
    console.log(
      `%cEj2. useEffect -> Estoy montado y me ejecuto solo una vez`,
      'color: #3030ff; font-weight: bold; font-size: 18px;'
    )
    obtenerUsuario().then(user => setNombre(user.name.first))
  }, [])

  async function obtenerUsuario() {
    try {
      let respuesta = await fetch('https://randomuser.me/api/')
      let {
        results: [data],
      } = await respuesta.json()
      return data
    } catch (error) {
      console.log('No se pudo obtener el recurso')
    }
  }

  function handleChange(event) {
    let value = event.target.value
    setNombre(value)
  }

  return (
    <>
      {nombre.length !== 0 ? (
        <form>
          <label htmlFor='id-user'>
            Nombre{' '}
            <input
              id='id-user'
              name='nombre'
              type='text'
              placeholder='Nombre'
              value={nombre}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
        <strong>
          <em>Obteniendo Usuario...</em>
        </strong>
      )}
    </>
  )
}

export default ExampleUseEffect
