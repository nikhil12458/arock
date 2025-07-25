import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LoadChild = () => {

    const lineRef = useRef(null)

    const tl = gsap.timeline()
    useGSAP(()=>{
        tl.to(lineRef.current, {
            width: '100%',
            duration: 2,
            delay: 0.7,
            ease: 'expo.out'
        })
        tl.to(lineRef.current, {
            opacity: 0,
        })
    })
    
  return (
    <div ref={lineRef} className='w-0 h-full bg-white rounded'>
      
    </div>
  )
}

export default LoadChild
