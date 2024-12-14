import React from 'react'
import './Kidsproduct.css'
import all_product from '../../forntendcomp/assets/all_product';
import Card from '../../forntendcomp/card/card';
import { Link } from 'react-router-dom';

function Kidsproduct() {
    const menProducts = all_product.filter(item => item.category === 'kid');
    return (
        <div>
            <div className="popular">
                <h1>Featured Products</h1>
                <div className="popular-items">
                    {/* Map through the filtered men's products */}
                    {menProducts.map((item, i) => {
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
    )
}

export default Kidsproduct