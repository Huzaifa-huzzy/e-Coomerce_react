import React from 'react'
import './womens.css'
import Womensproduct from './womensproduct';
import Navbar from '../../forntendcomp/navbar/navbar';
import Footer from '../../forntendcomp/footer/footer';
import Banner from './Womensbanner';



function Womens() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Womensproduct/>
        <Footer/>
    </div>
  )
}

export default Womens