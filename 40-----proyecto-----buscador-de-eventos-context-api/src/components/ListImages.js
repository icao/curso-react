import React from 'react'
import { SearchContext } from "../App";
import  CardImage from './CardImage'

const ListImages = () => {
  return (
    <SearchContext.Consumer>
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
    </SearchContext.Consumer>
  );
}

export default ListImages;