import React from 'react'
import bachi from '../assets/certificatesFree/bachidelante.jpg'
import fundamentos from '../assets/certificatesFree/fundamentos.webp'
import react from '../assets/certificatesFree/react.webp'

const CertificatedStudent = () => {
  return (
    <div className='flex flex-col items-center mt-12'>
      <h2 className='my-3'>Students Certificates</h2>
      <div className="w-64 carousel rounded-box mb-6">
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
    </div>

  )
}

export default CertificatedStudent