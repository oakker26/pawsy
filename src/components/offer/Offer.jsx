import React from 'react'
import OfferCards from './OfferCards'

const Offer = () => {
  return (
      <div className='bg-[#f6feff]'>
            <div className='bg-[#f6feff] container  py-32'>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between mb-20'>
          <div  data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="500" data-aos-delay="50" data-aos-once="false" className=' relative '>
              <div className='flex items-center space-x-4 '>
                  <div className='w-[40px] h-[2px] bg-[#1ba0ab]'></div>
                  <p className='text-[#1ba0ab]'>Service</p>
              </div>
              <h1 className='md:text-4xl lg:text-5xl font-bold my-4 text-3xl'>What <span className='text-[#7d90e0]'>We Offer</span></h1>
          </div>
              <div  data-aos='fade-left'  data-aos-easing="ease-in-out"  data-aos-duration="500" data-aos-delay="50" data-aos-once="false" className='place-content-start flex items-center lg:ml-36 md:ml-10 ml-0  '>
                  <div className='md:border-l-2 border-0 border-[#1ba0ab]'>
              <p className=' text-lg pl-3 pr-5 lg:pr-20 2xl:pr-52 md:pr-0 opacity-60 '>Praesent condimentum luctus tellus, nec egestas dolor convallis</p>
                      
                  </div>
            </div>
          </div>
          <OfferCards/>
    </div>
    </div>
  )
}

export default Offer