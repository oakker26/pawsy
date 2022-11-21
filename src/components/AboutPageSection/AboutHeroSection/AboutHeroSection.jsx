import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const AboutHeroSection = () => {
  return (
    <div className=' relative pt-36 mb-20 '>
                <div className='flex-col  items-center   text-white'>
                    <div className=' flex justify-end items-center '>
                        <div className='p-4 bg-[#ffffff22] mb-6 rounded-full flex justify-center items-center '>
                        <div>
                    Home 
                    </div>
                    <div className='flex items-center opacity-40  '>
                    <span className='font-semibold mx-2'> <AiOutlineRight/> </span> About
                    </div>
                    </div>
                    </div>
                    <div  data-aos='fade-down'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"   className='  relative w-[100%] mb-[-237px] rounded-2xl h-[600px]'>
                        <video className='w-fit rounded-2xl' loop src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/611e57d40e2617701ef30cf8_Cat%20-%2085464-transcode.mp4"></video>
                    </div>
                </div>
            </div>
  )
}

export default AboutHeroSection