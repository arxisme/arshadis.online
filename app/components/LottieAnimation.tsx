"use client"
import Lottie from 'lottie-react'
import animationData from '@/public/asset/rocket.json'
import React from 'react'
import { reverse } from 'dns'

const LottieAnimation = () => {
  return (
    <Lottie  animationData={animationData}/>
  )
}

export default LottieAnimation
