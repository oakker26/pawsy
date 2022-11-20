import React from 'react'
import Footer from '../../../components/Footer/Footer'
import ValerieBellHero from './ValerieBellHero'
import ValerieBellFooter from './ValerieBellFooter'
const ValerieBell = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <ValerieBellHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <ValerieBellFooter/>
        </div>
    </div>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)] lg:container px-0'>
    <Footer/>
    </div>        
</div>
  )
}

export default ValerieBell