import React from 'react'
import './GifItem.scss'

const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default GifItem