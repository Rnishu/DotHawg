import './Hero.css'

import React from 'react'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-image'>
        <p className='header-slogan'>
          BUNS STRAIGHT <br /> FROM HEAVEN
        </p>
        <p className='order-from'> Order Now On </p>
        <button className='swiggy-button home-order-button'> <img src='https://subway.in/static/media/swiggy.720f8f764788f0988289.webp' className='swiggy-button-image home-order-button-image' alt="Swiggy"></img> </button>
        <button className='zomato-button home-order-button'> <img src="https://subway.in/static/media/zomato.4e0f3920926bf9e420d5.webp" className='zomato-button-image home-order-button-image' alt='Zomato'></img> </button>
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
