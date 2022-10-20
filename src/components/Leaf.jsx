import React from 'react'
import { motion } from 'framer-motion'

const Leaf = ({className, src}) => {
  return (
    <div 
  //   initial={{ }}
  //   animate={{ x: 10, x:0, x:10 }}
  //   transition={{
  //   delay: 2,
  //   duration: 1,
  //   ease: 'linear',
  //   repeat: Infinity,
  // }}
    className={className}>
      <img className='leaf' src={src} />
    </div>
  )
}

export default Leaf