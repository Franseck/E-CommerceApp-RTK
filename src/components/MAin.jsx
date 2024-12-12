import React from 'react'
import Navbar from "./Navbar"
import Slider from './Slider'
import NavigationButtons from './NavigationButtons'
import Footer from "./Footer";


const MAin = () => {
  return (
    <div>
        <Navbar  />
        <Slider/>
        <NavigationButtons/>

        <Footer/>
    </div>
  )
}

export default MAin