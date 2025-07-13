import React from 'react'
import { Tilt } from '@jdion/tilt-react'

const MenuLeft = () => {
  return (
    <div className='w-2/3 h-full py-8 px-10 relative overflow-hidden '>
      <Tilt className='h-full relative w-full flex items-center justify-center '>
        <img className='absolute scale-[0.97] opacity-20 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='absolute scale-[0.94] opacity-50 h-full  w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='absolute scale-[0.91] opacity-70 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='absolute opacity-50 h-full w-full object-cover object-center' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
      </Tilt>

    </div>
  )
}

export default MenuLeft
