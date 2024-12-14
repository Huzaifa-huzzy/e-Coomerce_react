import React from 'react'
import Navbar from '../../forntendcomp/navbar/navbar'
import Footer from '../../forntendcomp/footer/footer'
import Kidsproduct from './Kidsproduct'
import Kidsbanner from './Kidsbanner'

function Kids() {
  return (
    <>
        <Navbar/>
        <Kidsbanner/>
        <Kidsproduct/>
        <Footer/>
    </>
  )
}

export default Kids