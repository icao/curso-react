import { searchGif } from '../searchGif'

describe('Probando el helper searchGif - fetch', () => {
  test('El API debe devolver un array de 12 gifs', async () => {
    const category = 'homero'
    const gifs = await searchGif(category)
    console.log(`El número de gifs es: ${gifs.length}`)
    // Se espera que la colección de gifs obtenida sea igual a la esperada(12)
    expect(gifs.length).toBe(12)
  })

  test('El API debe regresar un arreglo vacio si no se le pasa la categoria', async () => {
    const category = ''
    const gifs = await searchGif(category)
    console.log(`El número de gifs es: ${gifs.length}`)
    expect(gifs.length).toBe(0)
  })
})
