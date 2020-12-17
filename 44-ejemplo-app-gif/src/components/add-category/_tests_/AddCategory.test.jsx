import AddCategory from '../AddCategory'
import { shallow } from 'enzyme'

describe('Probando el componente <AddCategory />', () => {
  const setCategorias = jest.fn() // simulación de la función setCategorias()
  let wrapper = shallow(<AddCategory setCategorias={setCategorias} />)

  beforeEach(() => {
    wrapper = shallow(<AddCategory setCategorias={setCategorias} />)
  })

  test('El componente <AddCategory /> debe de mostrarse correctamente y aceptar la prop setCategorias', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe cambiar la caja de texto(input) y lanzarse el onChange', () => {
    const input = wrapper.find('input')
    const value = 'Busca este gif' // valor para introducir en el imput

    input.simulate('change', {
      target: {
        value,
      },
    }) // [1]
    // NOTA: Por el momento no andamos testeando el hook, una forma seria agregar un parrafo y hacer el testesperando que el value sea igual al texto del parrafo.
  })

  test('El botón submit no debe de ejecutar/enviar nada(funcionalidad o datos)', () => {
    // Simulamos un evento submit en el form
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    //se espera que el método setCategorias() no se halla llamado
    expect(setCategorias).not.toHaveBeenCalled() //[2]
  })

  test('Debe de mandar a llamarse setCategorias() y limpiarse la caja de texto', () => {
    // 1.Simular el input change
    const input = wrapper.find('input')
    const value = 'navidad'
    input.simulate('change', {
      target: {
        value,
      },
    })

    // 2.simular el submit
    const form = wrapper.find('form')
    form.simulate('submit', { preventDefault() {} })

    //3. setCategorias debe de ser llamado
    expect(setCategorias).toHaveBeenCalled()

    //4. El valor del input de be estar vacio ''
    const inputLastState = wrapper.find('input').prop('value')
    expect(inputLastState).toBe('')
  })
})

/**
 * [1] - Simulamos con el evento simulate, un evento onChange de react, solo que solo especificamos un 'change' sin la preposicion 'on',
 * enzyme reconocerá que estamos provocando un evento, como segundo parámetro
 * mandamos el argumento que recibirá la función ejecutora al hacerse un cambio dentro del input.
 * Como nosotros en nuestrafunción esperamos un evento con las propiedades target y value, nosotros simulamos ese objeto de manera literal.
 *
 * Nuestra función onChange del componente es la sig:
 * function handleChange(event) {
 *  let value = event.target.value // Simularemos estas propiedades del DOM
 *  setCategoria(value) // Por el momento no se testea el hook
 * }
 *
 * En nuestro test ponemos:
 * {
 *  target: {
 *    value,
 *  },
 * }
 *
 *
 * NOTA: En este test solo podemos probar que se ejecuto el cambio si lo comparamos con el valor del input ya reflejado en un parrafo.
 *
 * Si a nuestro componentre AddCategory le agregamos un párrafo donde muestre el valor del input, podríamos comparar ambos valores y corroborar que esta siendo capturado correctamente.
 *
 * IMPORTANTE: Por el momento no se esta testeando el hook
 */

/**
 * [2] - Debemos verificar si en una prueba anterior no ha sido modificado el wrapper, en este caso si fue modificado en el punto [1] donde asignamos un valor al input. En nuestro componente se envia el submit si existe en la entrada del input un valor mayor a longitud 2. Por ende en nuestro test nos marcaria ERROR
 * Expected number of calls: 0  -> SE ESPERABA NO SER LLAMADO
 * Received number of calls: 1  -> SE ESTA MANDANDO A LLAMAR
 *
 * Por consiguiente falla nuestro test unitario.
 * Hemos de recordar que es buena practica si se requiere, tener inicializado en cada prueba nuestro wrapper que contienen el snapshot del componente iniciado.
 *
 * Entonces aplicamosel uso del método beforeEach() al inicio de nuestras pruebas, donde antes de cada test será inicializado el wrapper
 * */
