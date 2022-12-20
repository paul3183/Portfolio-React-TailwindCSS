import React, { useEffect, useState } from 'react'


const PagesView = () => {
  const [isClicked, setIsClicked] = useState(false);
  // ${isClicked ? 'text-red-500' : ''} el condicional del usesttate cmabia de color
  const [like, setLike] = useState(JSON.parse(localStorage.getItem('like')) ?? 1529);

  const getLike = () => {
    setLike(like + 1);
    setIsClicked(true);
  }

  useEffect(() => {
    localStorage.setItem('like', JSON.stringify(like));
  }, [like])

  const [incrementViews, setIncrementViews] = useState(JSON.parse(localStorage.getItem('incrementViews')) ?? 8659);
  const handleIncrement = () => {
    setTimeout(() => {
      setIncrementViews(incrementViews + 1);
    }, 4000);
  }
  useEffect(() => {
    localStorage.setItem('incrementViews', JSON.stringify(incrementViews));
  }, [incrementViews])

  return (
    <div className="stats shadow flex flex-col  text-white bg-transparent border-none">

      <div className="group stat bg-black glass " onClick={getLike}>
        <div className="stat-figure ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={`group-active:text-red-500 inline-block w-8 h-8 stroke-current transition-all duration-100`}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value  bg-transparent">{like}</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat bg-black glass" onChange={handleIncrement()}>
        <div className="stat-figure ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value  bg-transparent">
          {incrementViews}
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>

    </div>


  )
}

export default PagesView




{/* <div className="stat-value bg-transparent">89,400</div> */ }