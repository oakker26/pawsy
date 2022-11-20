import React from 'react'
import Footer from '../../../components/Footer/Footer'
import TrainingOneHero from './TrainingOneHero'
import TrainingOneDes from './TrainingOneDes'
import TrainingOneFooter from './TrainingOneFooter'
const TrainingOne = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <TrainingOneHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <TrainingOneDes/>
        </div>
        <div className='bg-[#f6feff]'>
          <TrainingOneFooter/>
        </div>
    </div>
      
</div>
  )
}

export default TrainingOne