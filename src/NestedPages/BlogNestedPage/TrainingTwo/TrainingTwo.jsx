import React from 'react'
import Footer from '../../../components/Footer/Footer'
import TrainingTwoHero from './TrainingTwoHero'
import TrainingTwoDes from './TrainingTwoDes'
import TrainingTwoFooter from './TrainingTwoFooter'
const TrainingTwo = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <TrainingTwoHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <TrainingTwoDes/>
        </div>
        <div className='bg-[#f6feff]'>
          <TrainingTwoFooter/>
        </div>
    </div>
         
</div>
  )
}

export default TrainingTwo