import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'

const EmptyCart = () => {
  return (
    <div className='size-full bg-gray-50 flex items-center flex-col justify-center'>
        <div className='w-full sm:w-1/2'>
            <DotLottieReact src='/Empty-cart.lottie' loop autoplay/>
        </div>
        <h4 className='text-gray-800 font-semibold text-lg'>Your cart is empty</h4>
        <p className='text-gray-500 text-xs leading-relaxed text-center w-4/5 md:w-full'>Looks like you haven’t added anything yet. Start shopping to fill your cart.</p>
        <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 cursor-pointer mt-4 rounded-md transition-colors duration-200'>Browse products</button>
    </div>
  )
}

export default EmptyCart