import React from 'react'
import Footer from '../../../components/Footer/Footer'
import ContactPageFaq from '../../../components/ContactPageSection/ContactPageFaqSection/ContactPageFaq'
import GuyElliottHero from './GuyElliottHero'
import GuyElliottFooter from './GuyElliottFooter'
const GuyElliott = () => {
  return (
    <div className="">
    <div className='lg:mb-[480px] '>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)]  '>
          <GuyElliottHero />   
          
        </div>
        <div className=' bg-[#f6feff]'>
          <GuyElliottFooter/>
        </div>
    </div>
    <div className=' bg-[linear-gradient(180deg,#1b2963,#152154)] lg:container px-0'>
    <Footer/>
    </div>        
</div>
  )
}

export default GuyElliott