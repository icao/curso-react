import React, { useEffect } from 'react'

const GiftCollection = ({ category }) => {
  async function searchGif() {
    const url =
      'https://api.giphy.com/v1/gifs/search?q=homero&limit=10&api_key=ZbiyJ9p6nPacvAU3gM7rlFTXBIolRy5h'
    const response = await fetch(url)
    const { data } = await response.json()
    // console.log(gifs)
    const gifts = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
      }
    })

    console.log(gifts)
  }

  useEffect(() => {
    searchGif()
  }, [])

  return <h3>{category}</h3>
}

export default GiftCollection
