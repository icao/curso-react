import GifCollection from '../GifCollection'
import { shallow } from 'enzyme'

describe('Probando el componente <GifCollection />', () => {
  test('El componente <GifCollection /> debe de renderearse correctamente', () => {
    const categoria = 'batman'
    const wrapper = shallow(<GifCollection category={categoria} />)

    expect(wrapper).toMatchSnapshot()
  })
})
