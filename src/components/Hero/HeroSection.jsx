import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const HeroSection = () => {
  return (
      <div className=' pb-[4.1rem] pt-[4.1rem] bg-[linear-gradient(180deg,#1b2963,#152154)]  grid grid-cols-1 lg:grid-cols-2 items-center justify-end relative  gap-4 md:gap-7'>
          <div  data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="800" data-aos-delay="50" data-aos-once="false" className='relative'>
              <div className='flex items-center space-x-2'>
                  <div className='w-10 h-[2px] bg-[#1ba0ab] '> </div>
                  <div className='text-[#1ba0ab] leading-7'>Vet & Shop</div>
              </div>
              <h1 className='lg:text-[65px] pr-0 lg:pr-4 md:text-6xl text-5xl font-bold leading-[70px] text-white'>We Taking Care For <br className='hidden md:block' /> 
                <span className='!text-[#7d90e0]'>Your Pets</span></h1>
              <p className='text-[#bfc5e6] mt-8 text-lg lg:pr-[7rem] pr-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae molestie nibh.</p>
              <Link to='/contact'>
              <button className='primaryBtn w-full md:w-64 font-semibold '>Make an Appointment</button>
              </Link>
          </div>
          <div className='relative '  data-aos='fade-left'  data-aos-easing="ease-in-out"  data-aos-duration="800" data-aos-delay="50" data-aos-once="false">
              <div className='ml-0 md:ml-16 lg:ml-0'>
              <img className='' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135cdaae8df4e35809238ad_Hero%20Image.png" alt="" />
                  
              </div>
              <img className='absolute left-[9%] bottom-[6%] ' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c473bc1e58c0b83309_Shape%205.svg" alt="" />
              <img className='absolute top-[11%] right-[1%] ' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c6d7dbcc517b96481f_Shape%202.svg" alt="" />
              <img className='absolute top-[9%] right-[89%]'src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c801d9a25936109d4d_Shape%201.svg" alt="" />
              <img className='absolute bottom-[9%] right-[7%]'src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0cd8461d42d81298df8_Shape%204.svg" alt="" />
              <button className='absolute bottom-[21%] z-40 left-[1%] hover:scale-110 duration-300'>
                  <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135cec9e16aa206f85e84f5_player-play-circle%201.png" alt="" />
              </button>
          </div>
          <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/611fbcdd28840ae8917058b2_Dots%20White.svg" className='absolute bottom-0  ml-0 md:ml-[22%] ' alt="" />

      </div>
  )
}

export default HeroSection