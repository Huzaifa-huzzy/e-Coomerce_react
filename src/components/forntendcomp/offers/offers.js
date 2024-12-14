import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'

function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers_right'>
            <img src={exclusive_image}/>
        </div>
    </div>
  )
}

export default Offers