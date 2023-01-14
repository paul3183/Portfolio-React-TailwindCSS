import React, { useEffect, useState } from 'react'
import CountdownTimer from './Countdown'

const Body = () => {
  // const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [changeImage, setChangeImage] = useState(0);


  // useEffect(() => {
  //   setTimeout(() => {
  //     setChangeImage(changeImage + 11)
  //     if (changeImage >= 88) {
  //       setChangeImage(0)
  //     }
  //   }, 5000)
  // })

  return (
    <div className='hero min-h-screen text-center bg-[url("/src/assets/hero/descarga.webp")]'>

      {/* start of images----------------- */}
      {/* <div className='hero-overlay overflow-hidden'>
        <ul
          className={`-translateX-${changeImage} flex h-full w-[900%] transition-all duration-500 ease-in-out`} */}
      {/* > */}
      {/* <li className='w-full flex items-center justify-center'>
            <img className='opacity-60 object-contain h-full w-full' src={img1} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='opacity-60 object-contain h-full w-full' src={img2} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img3} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img4} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img5} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img6} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img7} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img8} alt='' />
          </li>

          <li className='w-full flex items-center justify-center'>
            <img className='object-contain h-full w-full' src={img9} alt='' />
          </li> */}
      {/* </ul>
      </div> */}
      {/* end of images */}
      <div className='z-50 flex flex-col items-center absolute top-[220px] text-[#d1d1d1]'>
        <h2 className='text-1xl mb-4'>You Have Exactly</h2>
        <CountdownTimer />
        <h2 className='text-1xl mt-4'>Hours left to hire me</h2>
      </div>
      <div className='hero-overlay'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md mt-[370px]'>
          <h1 className='mt-10 mb-5 text-5xl font-bold'>Welcome!</h1>
          <p className='mb-5'>
            My name is Paul, i know what you are wondering is it really possible
            that someone could create a page as beautiful as this one?, come on
            continue to enjoy and explore my developer portfolio.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Body


