import React, { useEffect, useState } from 'react'
import GifItem from '../gif-item/GifItem'
import './GifCollection.scss'

const GifCollection = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    searchGif()
  }, [])

  async function searchGif() {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=homero&limit=10&api_key=ZbiyJ9p6nPacvAU3gM7rlFTXBIolRy5h'
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }
    })
    console.log(gifs)
    setImages(gifs)
  }

  return (
    <>
      <h2 className='title-collection'>{category}</h2>
      <div className='container-collection'>
        {images.map(image => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}

export default GifCollection
