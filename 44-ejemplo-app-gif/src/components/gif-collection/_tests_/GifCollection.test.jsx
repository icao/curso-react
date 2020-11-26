import GifCollection from '../GifCollection'
import { shallow } from 'enzyme'

describe('Probando el componente <GifCollection />', () => {
  test('El componente <GifCollection /> debe de renderearse correctamente', () => {
    const wrapper = shallow(<GifCollection />)

    expect(wrapper).toMatchSnapshot()
  })
})
