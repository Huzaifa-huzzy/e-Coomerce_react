import React from 'react'
import Navbar from '../../forntendcomp/navbar/navbar'
import Banner from './MensBanner'
import Footer from '../../forntendcomp/footer/footer'
import MensProduct from '../mensproduct'


function Mens() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MensProduct/>
      <Footer/>      
    </div>
  )
}

export default Mens