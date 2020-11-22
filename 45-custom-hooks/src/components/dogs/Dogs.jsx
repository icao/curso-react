import React from 'react'
import SpinnerLoading from '../spinner-loading/SpinnerLoading'
import './Dogs.css'
import { useFetch } from '../../hooks/useFetch'

const Dogs = () => {
  const url = 'https://dog.ceo/api/breed/chihuahua/images/random/10'
  const [dogs, isLoading, error] = useFetch(url)

  if (error) {
    return <h2>🛑 {error} - No se pudo llevar a cabo la petición 😓</h2>
  }

  return (
    <>
      <h2>Perritos Adorables</h2>
      {isLoading ? (
        <div className='center-full'>
          <SpinnerLoading />
        </div>
      ) : (
        <div className='image-collection'>
          {dogs.map((dog, index) => {
            return (
              <div key={index}>
                <img
                  className='image-dog'
                  src={dog}
                  alt='imagen perro chihuahua'
                />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Dogs
