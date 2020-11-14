import React, { useState, useEffect } from 'react'

const ExampleUseEffect = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true)
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
      <TercerEjemplo />
      <h3>
        4.- useEffect SANEA UNA SUSCRIPCION - <em>componentWillUnmount</em>
      </h3>
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        {mostrarComponente ? `Ocultar` : `Mostrar`}
      </button>
      {mostrarComponente && <EjemploCuarto />}
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
    // El useEffect se ejecuta siempre que cambie el estado, de cualquier estado, pueden ser varios
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
    // El useEffect solo se ejecuta una vez, hace efecto despues de el primer render
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

const TercerEjemplo = () => {
  const [nombreMascota, setNombreMascota] = useState('')
  const [edad, setEdad] = useState(0)
  const [raza, setRaza] = useState('')

  useEffect(() => {
    // El useEffect solo se ejecuta en el primer render y posteriormente si cambia SOLO el estado NOMBREMASCOTA
    console.log(
      `%cEj3. useEffect -> Estoy monitoreando, solo me ejecuto si cambia el nombre`,
      'color: #ffac33; font-weight: bold; font-size: 18px;'
    )
  }, [nombreMascota])

  function cambiarNombre(event) {
    setNombreMascota(event.target.value)
  }
  function cambiarEdad(event) {
    setEdad(event.target.value)
  }
  function cambiarRaza(event) {
    setRaza(event.target.value)
  }
  return (
    <>
      <form>
        <label htmlFor='id-nombre-mascota'>
          Nombre{' '}
          <input
            id='id-nombre-mascota'
            type='text'
            value={nombreMascota}
            onChange={cambiarNombre}
          />
        </label>
        <strong>{nombreMascota}</strong>
        <br />
        <label htmlFor='id-edad'>
          Edad{' '}
          <input
            id='id-edad'
            type='number'
            value={edad}
            onChange={cambiarEdad}
          />
        </label>
        <strong>{edad}</strong>
        <br />
        <label htmlFor='id-raza'>
          Raza{' '}
          <input
            id='id-raza'
            type='text'
            placeholder='Chihuahua, Pitbull, Coquer, Pastor, etc'
            value={raza}
            onChange={cambiarRaza}
          />
        </label>
        <strong>{raza}</strong>
      </form>
    </>
  )
}

const EjemploCuarto = () => {
  const [ejeX, setEjeX] = useState(0)
  const [ejeY, setEjeY] = useState(0)

  useEffect(() => {
    console.log(
      `%cEj4. useEffect -> Agregando event listener mouseover`,
      'color: #F48FB1; font-weight: bold; font-size: 18px;'
    )
    // Suscripcion de evento mouseover
    window.addEventListener('mouseover', capturaMovimiento)

    return () => {
      console.log(
        `%cEj4. useEffect -> Removiendo/Limpiando/Saneando event listener mouseover`,
        'color: #E91E63; font-weight: bold; font-size: 18px;'
      )
      // UseEffect cada vez que se renderiza el componente desmonta/limpia/sanea el eventListener
      window.removeEventListener('mouseover', capturaMovimiento)
    }
  })

  function capturaMovimiento(event) {
    setEjeX(event.clientX)
    setEjeY(event.clientY)
  }

  return (
    <>
      <h4>{ejeX}</h4>
      <h4>{ejeY}</h4>
    </>
  )
}

export default ExampleUseEffect
