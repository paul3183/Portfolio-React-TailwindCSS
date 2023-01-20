import React from 'react'
import travel from '../assets/images/travel.jpg'
import expert from '../assets/images-Works/GitExpertApp.webp'
import veterinary from '../assets/images-Works/Patient-Veterinary.webp'
import pokemon from '../assets/images-Works/Pokemon.webp'
import rick from '../assets/images-Works/rickMorty.webp'

const Works = () => {
  return (
    <>
      <div className='p-6' style={{ backgroundImage: `url(${travel}`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
        <div className="carousel w-full flex ">

          <div id="slide1" className="carousel-item relative w-full ">
            <div className="card w-full text-white  border-2">
              <figure className='w-full ' ><img src={expert} alt="car!" /></figure>
              <div className="card-body bg-none mt-12">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"> <a href="https://lambent-rolypoly-f6ce82.netlify.app/" target='_blank' >Learn now!</a></button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>



          <div id="slide2" className="carousel-item relative w-full">
            <div className="card w-full text-white  border-2">
              <figure><img src={pokemon} alt="car!" /></figure>
              <div className="card-body bg-none mt-12">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><a href="https://heroic-shortbread-dc97c4.netlify.app" target='_blank' >Learn now!</a></button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="card w-full text-white border-2">
              <figure><img src={rick} alt="car!" /></figure>
              <div className="card-body bg-none mt-12">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><a href="https://charming-llama-71c1ec.netlify.app" target='_blank' >Learn now!</a></button>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full ">
            <div className="card w-full text-white border-2">
              <figure><img src={veterinary} alt="car!" /></figure>
              <div className="card-body bg-none mt-12">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"><a href="https://patient-monitoring-veterinary-react.netlify.app" target='_blank' >Learn now!</a></button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default Works