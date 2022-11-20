import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const AboutInfo = () => {
    const [counton,setCountOn]=useState(false)
  return (
      <ScrollTrigger onEnter={()=>setCountOn(true)} onExit={()=>setCountOn(false)}>
          <div className=' bg-[#1b2963] bg-[url("https://assets.website-files.com/6103dc5e4e41bd925dc0997f/613268f081a4cff12fefc9c7_About%20Small%20Image.png")] bg-no-repeat bg-right bg-contain '>
              <div className='py-20 grid grid-cols-1 gap-y-12 lg:grid-cols-3  place-content-center place-items-center  '>
              <div className='flex flex-col '>
                  <h1 className=' font-extrabold md:text-5xl text-4xl md:text-start text-center  text-white'> {counton&&<CountUp start={0} end={10} duration={2} delay={0} />} K</h1>
                  <p className=' text-white opacity-60 md:text-start text-center'>Clients</p>
              </div>
              <div>
                      <h1 className='font-extrabold md:text-5xl text-4xl md:text-start text-center text-white'>{counton && <CountUp start={0} end={12} duration={2} delay={0} />}+</h1>
                  <p className=' text-white opacity-60 md:text-start text-center'>Employee</p>
              </div>
              <div>
                      <h1 className='font-extrabold md:text-5xl text-4xl md:text-start text-center text-white'>{counton && <CountUp start={0} end={100} duration={2} delay={0} />} %</h1>
                  <p className=' text-white opacity-60 md:text-start text-center'>Satisfaction</p>
              </div>
              
        </div>
    </div>
      </ScrollTrigger>
  )
}

export default AboutInfo