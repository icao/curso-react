import { useState, useEffect } from 'react'

export function useSizeResolution() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', calcResize)
    return () => {
      window.removeEventListener('resize', calcResize)
    }
  })

  function calcResize() {
    let widthSize = window.innerWidth
    let heightSize = window.innerHeight
    setWidth(widthSize)
    setHeight(heightSize)
  }

  // Retornamos un objeto con los valores
  return {
    width,
    height,
  }
}
