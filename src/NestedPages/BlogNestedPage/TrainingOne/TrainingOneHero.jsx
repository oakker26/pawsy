import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai'
import ContactPageForm from '../../../components/ContactPageSection/ContactPageHero/ContactPageForm'

const TrainingOneHero = () => {
  return (
      <div>
              <div className="">
      <div className="  md:container lg:px-0 2xl:px-10 relative overflow-hidden">
                  
                  <div className="flex md:flex-row flex-col mt-8 lg:px-14 justify-between items-center  lg:mt-16">
                      <h1 className='text-white text-3xl text-center md:text-start mb-7 md:mb-0 md:text-5xl font-semibold'>How to Teach Your <br /> <span className='md:mt-4 mt-12 lg:inline-block'>Dog to Sit on</span> <br /> <span className='md:mt-4 mt-12 lg:inline-block'>Command</span></h1>
          <div className="flex justify-center p-4 text-white bg-[#ffffff22] rounded-full items-center">
            <h1 className='text-[#1ba0ab]'>Training</h1>
            <div className='px-2'>•</div>
            <p className="opacity-50">September 30, 2021</p>
          </div>
        </div>
        <div className="grid grid-rows-1 mb-20 lg:grid-cols-1  mt-12 lg:px-14 2xl:container  ">

                      <div className=' h-[500px]  rounded-2xl '>
                     <img className=' rounded-3xl h-[500px] w-full object-cover' src="https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95a2e84d34f9e8cc042b_Post%20Image%201.png" alt="" />
                      </div>        
    
            </div>
        <div className=" hidden lg:block ">
          <img
            className="absolute left-4  top-64"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c801d9a25936109d4d_Shape%201.svg"
            alt=""
          />
        
          <img
            className="absolute right-4 top-64"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c6d7dbcc517b96481f_Shape%202.svg"
            alt=""
                      />
                      <img
            className="absolute right-5 bottom-10"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0cd8461d42d81298df8_Shape%204.svg"
            alt=""
                      />
                      <img
            className="absolute left-5 bottom-10"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c473bc1e58c0b83309_Shape%205.svg"
            alt=""
          />
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default TrainingOneHero