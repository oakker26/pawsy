import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const AboutOurCLient = () => {
  return (
      <div className='container pt-28 lg:pt-[360px] pb-32  bg-[linear-gradient(180deg,#ffffff,#f3fdff)]'>
      <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
        <div className='flex-col lg:w-[470px] w-full text-center lg:text-start mt-20 lg:mt-0 '>
          <h1 className='md:text-5xl text-3xl font-semibold'>About <span className='text-[#7d90e0]'>Our Clinic</span></h1>
          <p className=' mt-8 text-lg opacity-60 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi cursus auctor purus at vulputate. Nulla quis rutrum leo,
            quis placerat augue. Ut interdum enim eu risus fermentum, id
            consectetur nisl ornare. Aenean viverra egestas sem at suscipit.
            Mauris eleifend diam nunc, non euismod nisi viverra vel. Nulla
            facilisis enim sit amet.</p>
          <Link to="/contact">
          <button className='primaryBtn mx-auto lg:mx-0 '>Contact Us</button>
          </Link>
        </div>
        <div className='relative'>
          <div>
          <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61326443507f24f71007ef4d_About%20Image.png" alt="" />
          </div>
          <div className=' hidden lg:block'>
          <img className='-top-4 right-10 absolute' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c6d7dbcc517b96481f_Shape%202.svg" alt="" />
          <img className='absolute -bottom-20 right-2' src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/610be0c801d9a25936109d4d_Shape%201.svg" alt="" />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default AboutOurCLient