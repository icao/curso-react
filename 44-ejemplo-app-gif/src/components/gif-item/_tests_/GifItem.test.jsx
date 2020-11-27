import { shallow } from 'enzyme'
import GifItem from '../GifItem'

describe('Probando componente <GifItem />', () => {
  const title = 'Soy el nombre del gif'
  const url = 'http://alguna_direccion_imagen'
  const wrapper = shallow(<GifItem title={title} url={url} />)

  test('<GifItem /> debe mostrarse correctamente y aceptar las props: title, url', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('El texto(titulo) renderizado debe ser el mismo a la prop titulo', () => {
    const titulo = wrapper.find('h4').text().trim()
    expect(titulo).toBe(title)
  })

  test("El atributo 'src' debe ser igual a la prop url", () => {
    const urlImg = wrapper.find('img').props().src
    expect(urlImg).toBe(url)
  })

  test("El atributo 'alt' igual a la prop titulo", () => {
    const altImg = wrapper.find('img').prop('alt')
    expect(altImg).toBe(title)
  })

  test('El componente debe de tener la clase animate__fadeInDown', () => {
    const classImg = wrapper.find('div').at(0).prop('className')
    console.log(classImg)
    // Se espera que exista la clase animate__fadeInDown en el div contenedor
    expect(classImg.includes('animate__fadeDown')).toBe(true)
  })
})
