import React from 'react';
import all_product from '../../forntendcomp/assets/all_product';
import './ProductDetail.css'



const ProductDetail = ({ productId }) => {
  // Find the product by productId
  const product = all_product.find(item => item.id === productId);

  // Handle the case when the product is not found
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for does not exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href={`/category/${product.category}`}>{product.category}</a></li>
          <li>{product.name}</li>
        </ul>
      </nav>

      <div className="product-details-container">
        {/* Product Images */}
        <div className="product-images">
          <img src={product.image} alt={product.name} className="main-image" />
          <div className="image-thumbnails">
            {all_product.filter(item => item.category === product.category).slice(0, 4).map((thumbProduct) => (
              <img
                key={thumbProduct.id}
                src={thumbProduct.image}
                alt={thumbProduct.name}
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>

          {/* Price and Discounts */}
          <div className="product-pricing">
            <span className="new-price">${product.new_price.toFixed(2)}</span>
            {product.old_price > product.new_price && (
              <span className="old-price">${product.old_price.toFixed(2)}</span>
            )}
            {product.old_price > product.new_price && (
              <span className="discount-percentage">
                {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Product Description */}
          <div className="product-description">
            <h3>Description</h3>
            <p>
              This is a great product from the {product.category} category. The product offers great features and
              comfort, designed for the modern-day shopper. Add this stylish item to your collection and enjoy its
              amazing quality and value.
            </p>
          </div>

          {/* Reviews Section */}
          <div className="product-reviews">
            <h3>Customer Reviews</h3>
            <div className="review-summary">
              <span className="average-rating">4.5 / 5</span>
              <span className="review-count">(200 reviews)</span>
            </div>
            <div className="reviews">
              <div className="review">
                <p><strong>John Doe:</strong> Great product! Fits perfectly and feels amazing.</p>
                <p><strong>Rating:</strong> ★★★★☆</p>
              </div>
              <div className="review">
                <p><strong>Jane Smith:</strong> I love it, though it's a bit pricier than expected.</p>
                <p><strong>Rating:</strong> ★★★★☆</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;