import React from 'react';
import './brands.css'; // Import the CSS file for styling
import brand1 from './images/adidas.png';
import brand2 from './images/armur.png';
import brand3 from './images/chanel.png';
import brand4 from './images/ck.png';
import brand5 from './images/gucci.png';
import brand6 from './images/nike.png';
import brand7 from './images/reebok.png';

const Brands = () => {
  // Array to hold all brand images
  const images = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div className="brands-container">
      <h2 className="brands-heading">Famous Brands</h2>
      <div className="slider">
        <div className="slide-track">
          {/* Map over the images array to generate slides */}
          {images.concat(images).map((brand, index) => (
            <div className="slide" key={index}>
              <img src={brand} height="100px" alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
