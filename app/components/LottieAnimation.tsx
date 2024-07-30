"use client"
import Lottie from 'lottie-react'
import animationData from '@/public/asset/me.json'
import React from 'react'


const LottieAnimation = () => {
  return (
    <Lottie  animationData={animationData}/>
  )
}

export default LottieAnimation
