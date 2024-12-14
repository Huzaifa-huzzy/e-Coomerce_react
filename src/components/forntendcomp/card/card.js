import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image" style={{ backgroundImage: `url(${props.image})` }}>
        <div className="card-hover">
          <p>{props.name}</p>
        </div>
      </div>
      <div className="item-prices">
        <div className="new-price">{props.new_price}</div>
        <div className="old-price">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Card;
