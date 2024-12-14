import React from 'react'
import './popular.css'
import data_product from '../assets/data'
import Card from '../card/card'

function Popular() {
  return (
    <div className='popular'>
            <h1>Featured Products</h1>
            <div className='popular-items'>
                {data_product.map((item, i)=>{
                    return <Card key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                })}
                
            </div>
    </div>
  )
}

export default Popular