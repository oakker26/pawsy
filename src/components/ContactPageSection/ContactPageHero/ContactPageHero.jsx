import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { AiOutlineRight } from 'react-icons/ai'
import ContactPageForm from './ContactPageForm'

const ContactPageHero = () => {
  return (
    <div className="">
      <div className=" container md:container relative overflow-hidden">
        <div className="flex md:flex-row flex-col justify-between items-center pt-0 lg:pt-32">
          <h1 className="text-3xl lg:text-5xl font-semibold text-white my-10  ">
            Contact Us
          </h1>
          <div className="flex justify-center p-4 text-white bg-[#ffffff22] rounded-full items-center">
            <h1>Home</h1>
            <AiOutlineRight className="font-bold mx-1 opacity-50" />
            <p className="opacity-50">Contact</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-14 pb-32 grid-cols-1  grid gap-10 lg:grid-cols-[2fr_minmax(auto,600px)]">
          <div className="mt-12">
            <div className="flex  flex-col items-start  justify-center">
              <div className="text-white">
                <h5 className="font-bold text-xl">Office Hours</h5>
                <div className="opacity-60 mt-2">
                  <p>Mon: Fri 8am-7pm</p>
                  <p>Saturday: 9am-4pm</p>
                  <p>Sunday: CLOSED </p>
                </div>
              </div>
              <div className="text-white mt-16">
                <h5 className="font-bold text-xl">Office Address</h5>
                <div className="opacity-60 mt-2">
                  <p>Stravenue</p>
                  <p>Greens, Los Angeles</p>
                  <p>United States</p>
                </div>
              </div>
              <div className="text-white font-medium mt-14 opacity-50 font-[montserrat]">
                <p className="mb-2">Email us: pawsy@gmail.com</p>
                <p>Call us: 634-752-0965</p>
              </div>
            </div>
            
          </div>
          <ContactPageForm/>
        </div>

        <div className=" hidden lg:block ">
          <img
            className="absolute left-0 -bottom-72"
            src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/61388986d2ea57b356056095_Inner%20Hero%20Circle%20Small.svg"
            alt=""
          />
        
        </div>
      </div>
    </div>
  )
}

export default ContactPageHero
