"use client"
import Lottie from 'lottie-react'
import animationData from '@/public/asset/about.json'
import React from 'react'


const LottieAbout = () => {
 
  
  return (
    <div>
      <Lottie  animationData={animationData} height={10}
         />
    </div>
  )
}

export default LottieAbout
