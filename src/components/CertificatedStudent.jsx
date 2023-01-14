import React from 'react'
import bachi from '../assets/certificatesFree/bachidelante.jpg'
import fundamentos from '../assets/certificatesFree/fundamentos.webp'
import react from '../assets/certificatesFree/react.webp'

const CertificatedStudent = () => {
  return (
    <div className="w-64 carousel rounded-box">
      <div className="carousel-item w-full">
        <img src={bachi} className="w-full" alt="Tailwind CSS Carousel component" />
      </div>
      <div className="carousel-item w-full">
        <img src={fundamentos} className="w-full" alt="Tailwind CSS Carousel component" />
      </div>
      <div className="carousel-item w-full">
        <img src={react} className="w-full" alt="Tailwind CSS Carousel component" />
      </div>
    </div>
  )
}

export default CertificatedStudent