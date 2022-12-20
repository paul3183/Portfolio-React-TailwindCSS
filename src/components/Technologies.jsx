import React from 'react'
import amazon from '../assets/Image-Technologies/Amazon.jpeg'
import css from '../assets/Image-Technologies/Css-3.jpeg'
import Aws from '../assets/Image-Technologies/Amazon-W-Service.jpeg'
import html from '../assets/Image-Technologies/Html.jpeg'
import js from '../assets/Image-Technologies/Javascript.jpeg'
import node from '../assets/Image-Technologies/node-js.png'
import react from '../assets/Image-Technologies/React.jpeg'
import tailwind from '../assets/Image-Technologies/Tailwind.jpeg'
import python from '../assets/Image-Technologies/Python.png'

const Technologies = () => {
  return (
    <div className='grid grid-cols-2 gap-2 w-full sm:grid sm:grid-cols-4 bg-[#f7f7f7] p-2'>
      <div className=''>
        <a href="https://www.amazon.com/s?k=amazom&adgrpid=85279052327&gclid=CjwKCAiAv9ucBhBXEiwA6N8nYDztL-_n2LdvXwvjc2jYWPsivLn6ODvrlx94X68FPB8qCu0hC07aOhoC6XAQAvD_BwE&hvadid=585479886698&hvdev=c&hvlocphy=9060924&hvnetw=g&hvqmt=b&hvrand=7144636484542318269&hvtargid=kwd-12673130&hydadcr=29489_14573936&tag=hydglogoo-20&ref=pd_sl_8rpm1r24ct_b">
          <img className='hover:scale-110 duration-100 w-20 mx-auto ' src={amazon} alt="image-amazon" />
        </a>
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 pt-2 w-20 mx-auto' src={css} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={Aws} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={html} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={js} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 pt-3 w-20 mx-auto' src={node} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={react} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={tailwind} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 pt-2 w-[120px] mx-auto' src={python} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={amazon} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={amazon} alt="image-amazon" />
      </div>
      <div className=''>
        <img className='hover:scale-110 duration-100 w-20 mx-auto' src={amazon} alt="image-amazon" />
      </div>
    </div>
  )
}

export default Technologies