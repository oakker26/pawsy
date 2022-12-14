import React from 'react'
import FaqSection from './FaqSection'

const ContactPageFaq = () => {
  return (
    <div className='container py-32'>
      <h1  data-aos='fade-up'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"   className='text-[#1b2963] text-3xl text-start md:text-5xl  font-bold lg:text-center'>Frequently <span className='text-[#7d90e0]'>Asked Questions</span></h1>
      <div className='flex items-center space-x-0 lg:space-x-40  mt-20 '>
        <div  data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"   className='self-end lg:w-[50%] w-[0%] '>
<img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610bf60fe3db9d650d293a04_Team%20Member%20Image.png" alt="" />
        </div>
        <div  data-aos='fade-left'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"   className='lg:w-auto w-[100%]'>
          <FaqSection/>
        </div>
      </div>
    </div>
  )
}

export default ContactPageFaq