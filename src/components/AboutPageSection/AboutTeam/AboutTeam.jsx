import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'
import { NavLink } from 'react-router-dom'

const AboutTeam = () => {
  return (
      <div className='py-32 container bg-[#f6feff]'>
          <div className='flex md:flex-row flex-col  md:items-center  justify-between'>
          <div >
          <div className='flex items-center space-x-3'>
              <div className='w-10 h-[2px] bg-[#1ba0ab]'></div>
              <div className='text-[#1ba0ab] '>Team</div>
          </div>
          <h1 className='font-bold md:text-5xl text-3xl  mt-4 '>Meet <span className='text-[#7d90e0]'>Our Doctors</span></h1>
              </div>
        <div>
          <NavLink to="/team">
          <button className='PrimaryOutlineBtn w-full md:w-auto'>All Members</button>
          </NavLink>
              </div>
      </div>
      
      <Cards/>
      </div>
    
  )
}

export default AboutTeam