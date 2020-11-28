import AddCategory from '../AddCategory'
import { shallow } from 'enzyme'

describe('Probando el componente <AddCategory />', () => {
  test('El componente <AddCategory /> debe de mostrarse correctamente y aceptar la prop setCategorias', () => {
    // NOTA: Por el momento inventaremos una función dummy, en otros capítulos futuros, verémos la correcta forma de enviarle una función como parametro
    const setCategorias = () => {} // Esta función dummy no hace nada
    const wrapper = shallow(<AddCategory setCategorias={setCategorias} />)
    expect(wrapper).toMatchSnapshot()
  })
})
