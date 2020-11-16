import React from 'react'

const GifItem = ({ title, url }) => {
  return (
    <div>
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default GifItem
