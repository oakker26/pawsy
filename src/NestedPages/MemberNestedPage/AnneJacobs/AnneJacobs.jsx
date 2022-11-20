import React from 'react'
import Footer from '../../../components/Footer/Footer'
import AnneJacobsHero from './AnneJacobsHero'
import AnneJacobsFooter from './AnneJacobsFooter'
const AnneJacobs = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <AnneJacobsHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <AnneJacobsFooter/>
        </div>
    </div>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)] lg:container px-0'>
    <Footer/>
    </div>        
</div>
  )
}

export default AnneJacobs