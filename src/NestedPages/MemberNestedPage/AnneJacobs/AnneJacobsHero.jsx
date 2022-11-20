import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai'

const AnneJacobsHero = () => {
  return (
      <div>
              <div className="">
      <div className=" container md:container relative overflow-hidden">
        <div className="flex md:flex-row flex-col lg:px-24 justify-end items-center mt-0 lg:mt-16">
          
          <div className="flex justify-center p-4 text-white bg-[#ffffff22] rounded-full items-center">
            <h1>Home</h1>
            <AiOutlineRight className="font-bold mx-1 opacity-50" />
            <p className="opacity-50">Member</p>
          </div>
        </div>
        <div className="grid grid-rows-1 mb-14 lg:grid-cols-12 mt-12 lg:px-24  ">
              <div className=" bg-white rounded-l-2xl  p-10 col-span-12 lg:col-span-4">
                          <div>
                              <img className='rounded-2xl' src="https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a1f8a1dc82244a2445b8_Team%20Image%203.png" alt="" />
                          </div>
                          <h5 className='text-2xl mb-3 font-semibold mt-8 text-[#1b2963]'>AnneJacobs</h5>
                          <p className='text-lg tracking-[0.5px] opacity-60' >Veterinarian</p>
              </div>
              <div className="bg-white  col-span-8 py-10  rounded-r-2xl">
                <div className="border-l px-10">
                  <h5 className=' text-5xl font-bold text-[#1b2963]'>Bio</h5>
                              <p className='text-lg tracking-[0.5px] opacity-60 mt-7'>Now the question is how do you ensure the health of your colon? It is simple, go for colon cleansing at regular intervals. There are mainly two different ways to cleanse the colon. The first is to consume high fiber supplements and second is to flush the colon with water. In the second case where the colon is provided large amount of fluids, it actually.    </p>
                              <p className=' text-lg tracking-[0.5px] opacity-60 mt-7'>
                              Flushes itself to get rid of the fecal matters and toxins accumulated in its walls for years. The end result is: you get a clean inside and get back.
                              </p>
                              <button className='primaryBtn'>Send Message</button>
                          </div>
              </div>
            </div>
        <div className=" hidden lg:block ">
          <img
            className="absolute left-12  top-52"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c801d9a25936109d4d_Shape%201.svg"
            alt=""
          />
        
          <img
            className="absolute right-14 top-72"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c6d7dbcc517b96481f_Shape%202.svg"
            alt=""
                      />
                      <img
            className="absolute right-14 bottom-32"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0cd8461d42d81298df8_Shape%204.svg"
            alt=""
                      />
                      <img
            className="absolute left-20 bottom-20"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c473bc1e58c0b83309_Shape%205.svg"
            alt=""
          />
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default AnneJacobsHero