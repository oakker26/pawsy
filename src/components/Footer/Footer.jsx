import React from 'react'
import logo from '../../../public/Logo.svg'
const Footer = () => {
    let Navigation = ["About", "Team", "Product", "Blog", "Contact"];
    let Template =["Changelog", "Licenses", "Style guide"]
  return (
      <div className=' static lg:fixed bottom-0 -z-10 bg-[linear-gradient(180deg,#1b2963,#152154)] container'>
          <div className='grid pb-10 grid-cols-4 lg:grid-cols-12 gap-y-10 place-items-center lg:place-items-start  pt-24 '>
              <div className='col-span-5'>
                  <div>
                      <img src={logo} alt="" />
                  </div>
                  <div className='mt-6'>
                      <p className='text-white opacity-60 mb-2' > <span className=' font-semibold '> Mon:  </span> Fri 8am-7pm</p>
                      <p className='text-white opacity-60 mb-2' > <span className=' font-semibold '> Saturday: </span> 9am-4pm</p>
                      <p className='text-white opacity-60 mb-2' > <span className=' font-semibold '> Sunday: </span> CLOSED</p>
                  </div>
                  <div className='mt-6'>
                      <a href="#" className='font-[montserrat] text-white opacity-60' >Call us: 634-752-0965</a>
                  </div>
              </div>
              <div className='col-span-5 lg:col-span-2'>
                  <nav className='lg:text-start text-center'>
                      <h5 className=' text-white font-semibold'>Navigation</h5>
                      <div className=' flex flex-col'>
                          {Navigation.map((e)=><div className='inline-block mt-4 '>
                              <a href="#" className=' mt-4 text-white  opacity-60 after:w-[0%] hover:after:w-[100%] after:h-[2px] before:w-0 relative after:absolute after:bottom-0 after:left-0 after:bg-white  after:duration-500 hover:opacity-100  ' >{e}</a>
                          </div>)}
                      </div>
                  </nav>
                  
              </div>
              <div className='col-span-5  lg:col-span-2'>
                  <div>
                      <h5 className='text-white font-semibold'>Template</h5>
                      <div className='flex flex-col'>
                          {Template.map((e)=><div className='inline-block mt-4 '>
                              <a href="#" className=' mt-4 text-white  opacity-60 after:w-[0%] hover:after:w-[100%] after:h-[2px] before:w-0 relative after:absolute after:bottom-0 after:left-0 after:bg-white  after:duration-500 hover:opacity-100  ' >{e}</a>
                          </div>)}
                      </div>
                  </div>
              </div>
              <div className=' col-span-5 text-center lg:text-start lg:col-span-3  '>
                  <div className='text-center lg:text-start'>
                      <h5 className='text-white font-semibold'>Subscribe</h5>
                      <p className='text-white opacity-60 mt-4'>Subscribe to get the latest news</p>
                      <p className='text-white opacity-60 mt-4'>From us</p>
                  </div>
                  <div className='flex bg-[#6e57ff] border border-[#595f77] focus:ring-[#6e57ff]  my-14 rounded-3xl'>
                      <input type="text" className=' rounded-l-3xl  bg-[linear-gradient(180deg,#1b2963,#152154)] placeholder:pl-5 focus:border-[#6e57ff] text-white pl-5 ' placeholder='E mail address' />
                      <button className=' px-5 flex justify-center items-center h-12 bg-[#6e57ff] text-white rounded-r-full border-[#6e57ff] py-1  '>Submit</button>
                  </div>
              </div>
          </div>
          <div className='w-full h-[1px] bg-white opacity-20'></div>
          <div className=' grid  grid-cols-3 pt-5 pb-10'>
              <div>
              <p className='text-white opacity-60 text-lg'>© Pawsy. All rights reserved</p>
                  
              </div>
              <div className='flex justify-center space-x-2 items-center'>
                  <p className='text-center text-white opacity-60'>Powered by </p><span className=' text-white opacity-100 underline'>Kwi Kwi</span>
              </div>
              <div>
                  <div className='flex justify-end items-center '>
                  <a className='w-10 h-10 bg-[#bfc5e622] flex justify-center items-center rounded-full mr-4' href="#"><img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61327d171b54a9edf2239e75_Facebook%20Icon.svg" alt="" /></a>
                  <a className='w-10 h-10  bg-[#bfc5e622] flex justify-center items-center rounded-full mr-4' href="#"><img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61327d22abb9fe468cbb9fa6_Twitter%20Icon.svg" alt="" /></a>
                    <a className='w-10 h-10  bg-[#bfc5e622] flex justify-center items-center rounded-full' href="#"><img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61327d2effbafa862c0fa406_Instagram%20Icon.svg" alt="" /></a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Footer