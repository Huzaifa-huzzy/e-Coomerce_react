import React from 'react'
import './New-collection.css'
import new_collection from '../assets/new_collections'
import Card from '../card/card'

function Newcollection() {
  return (
    <div className='new-collection'>
        <h1>New Collection</h1>
        <div className='collection'>
            {new_collection.map((item, i)=>{
                return <Card key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Newcollection