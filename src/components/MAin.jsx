import React from 'react'
import Navbar from "./Navbar"
import Slider from './Slider'
import NavigationButtons from './NavigationButtons'
import Footer from "./Footer";
import ProductSection from './productSection/ProductSection';

const MAin = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <NavigationButtons/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default MAin