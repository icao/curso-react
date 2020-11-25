import React from 'react'
import './GifItem.scss'

const GifItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__fadeInDown'>
      <img src={url} alt={title} />
      <div className='card__title'>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default GifItem
