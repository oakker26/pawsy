import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <div className=' flex justify-center items-center  min-h-screen bg-[#f6feff]'>
          <div className='w-[30%] h-[30%] p-10 bg-white border rounded-2xl' >
              <div className=' flex flex-col justify-center items-center'>
              <img src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/613e4c5a79749058029e16a9_alert-triangle%201.svg" alt="" />
                  <h4 className='text-3xl text-[#1b2963] mt-5 font-semibold'>Page Not Found</h4>
                  <p className=' opacity-60 text-center mt-5'>The page you are looking for doesn't exist or has been moved</p>
                  <Link to='/'><button className='primaryBtn'>Back To Home</button></Link>
              </div>
          </div>
    </div>
  )
}

export default ErrorPage