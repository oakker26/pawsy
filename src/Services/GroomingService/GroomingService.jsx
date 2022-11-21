import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai'
import GroomingHero from './GroomingHero'
import GroomingFooter from './GroomingFooter'
import Footer from '../../components/Footer/Footer'
const GroomingService = () => {
  return (
    
    <div className="">
    <div className='lg:mb-[480px]'>
            <div className=' min-h-[420px] overflow-hidden z-10 bg-[linear-gradient(180deg,#1b2963,#152154)] '>
                  
              </div>
              <div className=' bg-[#f6feff] relative z-10  flex pb-[300px] '>
              <div className=' mt-[-230px] flex  flex-col w-[95%] box-border justify-center items-center'>
                  <div className=' flex justify-end items-end container pr-0 text-white'>
        <div className='p-4 bg-[#ffffff22] mb-6 rounded-full flex justify-center items-center '>
        <div>
    Home 
    </div>
    <div className='flex items-center opacity-40  '>
    <span className='font-semibold mx-2'> <AiOutlineRight/> </span> Services
    </div>
    </div>
    </div>
                      
    <GroomingHero />
                      
      </div>
      </div>
      <div className='bg-white'>
              <GroomingFooter/>
                  
              </div>
          
    
    </div>

    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)] lg:container px-0'>
    <Footer/>
    </div>        
</div>
            
  )
}

export default GroomingService