// import '@testing-library/jest-dom'
// Importación de Enzyme y un adapter(no  ificial, revisar en un futuro cuando enzyme implemente react 17) para React 17
import Enzyme from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// Importación de plugin de enzyme para tener snapshot con que comparar
import { createSerializer } from 'enzyme-to-json'

// Configuración del adaptador para enzyme
Enzyme.configure({ adapter: new Adapter() })
// Configuración de plugin enzyme-to-json
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
