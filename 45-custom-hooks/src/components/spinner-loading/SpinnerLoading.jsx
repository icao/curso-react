import React from 'react'
import dogSpinner from './dog-spinner.gif'
import './SpinnerLoading.css'

const SpinnerLoading = () => {
  return (
    <div className='spinner-container'>
      <img className='spinner' src={dogSpinner} alt='loading' />
      <span>Loading...</span>
    </div>
  )
}

export default SpinnerLoading
