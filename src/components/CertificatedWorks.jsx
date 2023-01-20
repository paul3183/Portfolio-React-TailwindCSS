import React from 'react'
import azteca from '../assets/certificatesFree/AZTECA.webp'
import mibanco from '../assets/certificatesFree/MIBANCO.webp'
import wong from '../assets/certificatesFree/WONG.webp'
import srosa from '../assets/certificatesFree/SANTA-ROSA.webp'
import sunat from '../assets/certificatesFree/sunat.webp'

const CertificatedWorks = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-3 mt-[60px]'>Labor Certificates</h2>
      <div className="w-64 carousel rounded-box mb-6">
        <div className="carousel-item w-full">
          <img src={mibanco} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img src={azteca} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>

        <div className="carousel-item w-full">
          <img src={wong} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img src={srosa} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        <div className="carousel-item w-full">
          <img src={sunat} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
      </div>
    </div>


  )
}

export default CertificatedWorks