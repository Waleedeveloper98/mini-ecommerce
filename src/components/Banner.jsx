import React from 'react'

const Banner = () => {
  return (
    <div id='banner' className='w-full px-4 h-50 sm:h-70 md:h-90 lg:h-110 md:px-12 rounded-md overflow-hidden'>
        <img className='size-full object-cover rounded-md shadow-xl' src="/banner.webp" alt="" />
    </div>
  )
}

export default Banner