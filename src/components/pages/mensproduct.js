// MensProduct.js
import React from 'react';
import { Link } from 'react-router-dom';
import all_product from '../forntendcomp/assets/all_product';
import Card from '../forntendcomp/card/card';

function MensProduct() {
  const menProducts = all_product.filter(item => item.category === 'men');

  return (
    <div>
      <div className="popular">
        <h1>Featured Products</h1>
        <div className="popular-items">
          {menProducts.map((item) => {
            return (
              <Link key={item.id} to={`/product/${item.id}`}>
                <Card
                  id={item.id}
                  category={item.category}
                  image={item.image}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MensProduct;
