import AddCategory from '../AddCategory'
import { shallow } from 'enzyme'

describe('Probando el componente <AddCategory />', () => {
  // NOTA: Por el momento inventaremos una función dummy, en otros capítulos futuros, verémos la correcta forma de enviarle una función como parametro
  const setCategorias = () => {} // Esta función dummy no hace nada
  const wrapper = shallow(<AddCategory setCategorias={setCategorias} />)

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
    // NOTA: Por el momento no andamos testeando el hook
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
