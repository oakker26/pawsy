import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from './useParallex'
import { useScrollPosition } from './useScroll'
import { Link } from 'react-router-dom'
const AboutUs = () => {
    let data = [{
        id: 1,
        img:"https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf76749ea714e877e0b5b_checkmark-outline%201.svg",
        title:"Best Veterinars"
        },
        {
        id: 2,
        img:"https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf76749ea714e877e0b5b_checkmark-outline%201.svg",
        title:'Grooming'
        },
        {
            id: 3,
            img:"https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf76749ea714e877e0b5b_checkmark-outline%201.svg",
            title:'Best Food'
        },
        {
            id: 4,
            img:"https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf76749ea714e877e0b5b_checkmark-outline%201.svg",
            title:'24/7 Care'
        },
    ]
    const {
        primaryX,
        primaryY,
        secondaryX,
        secondaryY,
        onMouseMoveHandler,
        onMouseLeaveHandler
    } = useParallax();
    const scrollPosition = useScrollPosition();
    const scrollStyle = {
        transform: `translateY(${scrollPosition*0.13}px)`
    }
  return (
      <motion.div onMouseMove={onMouseMoveHandler} onMouseLeave={onMouseLeaveHandler} className='container bg-white relative py-32'>

          <div>
          
              <motion.img style={{
                  x: primaryX,
                  y:primaryY
              }} className='absolute hidden md:inline-block top-20 right-20' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0cd8461d42d81298df8_Shape%204.svg" alt="" />
              <motion.img style={{
                  x:primaryX,y:primaryY
              }} className='absolute hidden md:inline-block bottom-36 right-16' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c801d9a25936109d4d_Shape%201.svg" alt="" />
          
          <div className='flex flex-col container lg:flex-row justify-between items-center'>
              <div className='relative'>
                  <img className='-z-10 ' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf60fe3db9d650d293a04_Team%20Member%20Image.png" alt="" />
                  <div className='absolute -z-0 -left-6 bottom-60' style={scrollStyle}>
                  <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf6336dcf124708f2c81e_Circle%20Patters.svg" alt="" />
                      
                  </div>
              </div>
              <div className='relative text-left ml0 lg:ml-[14%] mr-auto w-full lg:w-[460px]'>
              <div className='flex items-center  space-x-2 mb-4 md:mb-0'>
                  <div className='w-10 h-[2px]  bg-[#1ba0ab] '> </div>
                  <div className='text-[#1ba0ab] leading-7'>About</div>
                  </div>
                  <h1 className='lg:text-5xl text-3xl font-bold text-[#1b2963] '>We Love to Take Care of <span className='text-[#7d90e0]'>Your Pets</span></h1>
                  <p className='text-lg opacity-60 font-[montserrat] mt-6'>Donec dolor ante, finibus eget dapibus nec, venenatis nec libero.</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-6 my-10 text-base leading-7 '>
                      {data.map((e) => 
                          <div id={e.id} className='flex items-center'>
                              <div className='w-9 h-9 mr-3 flex items-center justify-center shadow-md rounded-full'>
                                <img src={e.img} alt="" />
                              </div>
                              <p className='opacity-60'>{e.title}</p>
                      </div>
                      
                      )}
                  </div>
                  <div className='w-[100%] h-[1px] bg-[#ebebeb]'></div>
                  <div className='flex flex-col  md:flex-row items-center'>
                      <Link to='/about' className='primaryBtn w-full md:w-auto'>About Us</Link>
                      <a href="#" className='font-[600] px-8 flex justify-center items-center h-14 mt-8 underline'>Watch Video</a>
                  </div>
              </div>
              </div>
          </div>
              
    </motion.div>
  )
}

export default AboutUs