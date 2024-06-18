import './Hero.css'

import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-image'>
        <h1 className='dot-hawg-header'>
        <span style={{"color" : "#cc4c4b", "font-family":"Chewy"}}> DOT </span> <span style={{"color" : "black", "font-family":"Chewy"}}> HAWG </span>

        </h1>
        <h2 className='header-slogan'>
          BUNS STRAIGHT <br /> FROM HEAVEN
        </h2>
        <div className='home-order'>
        <p className='order-from'> Order Now On </p>
        <button className='swiggy-button home-order-button'>  </button>
        <button className='zomato-button home-order-button'> </button>
        </div >

      </div>
      <div className='hot-dog-video'>
        <div className='hot-dog-video-border'><iframe width="420" height="315"
          src="https://www.youtube.com/embed/vXBzaDQTzgs">
        </iframe></div>
      </div>
    </div>
  )
}

export default Hero
