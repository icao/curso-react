import React from 'react'
import {SearchContextConsumer} from "../context/SearchContext"
import CardImage from './CardImage'

const ListImages = () => {
  return (
    <SearchContextConsumer>
      {({ results }) => (
        <div className="container">
          <div className="grid">
            {results.map(image => (
              <div className="item" key={image.id}>
                <CardImage data={image}/>
              </div>
            ))}
          </div>
        </div>
      )}
    </SearchContextConsumer>
  );
}

export default ListImages;