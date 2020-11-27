import { shallow } from 'enzyme'
import GifItem from '../GifItem'

describe('Probando componente <GifItem />', () => {
  const title = 'Soy el nombre del gif'
  const url = 'http://algo_direccion_imagen'
  test('<GifItem /> debe mostrarse correctamente y aceptar las props: title, url', () => {
    const wrapper = shallow(<GifItem title={title} url={url} />)

    expect(wrapper).toMatchSnapshot()
  })
})
