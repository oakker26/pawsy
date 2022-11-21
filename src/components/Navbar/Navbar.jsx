import React, { useEffect } from 'react'
import Modal from '../Modalbox/Modal';
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {IoCallOutline} from 'react-icons/io5'
import logo from '../../../public/Logo.svg';
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
  let [showModal, setShowModal] = useState(false);
  let handleOnClose=()=>setShowModal(false)

  let [drop, setdrop] = useState(false);
  
  
  let click = () => {
    setdrop(prev=>!prev)
  }
  const { amount } = useSelector((store) => store.cart)
  

  return (
      <div className="container  z-50  opacity-100 duration-500 bg-[linear-gradient(360deg,#1b2963,#152154)]">
           <nav className='flex z-50 items-center border-b border-[#bfc5e622] relative py-2 '>
      <div className="py-5 w-24">
        <NavLink to='/'><a href="#">
          <img src={logo} alt="" />
        </a></NavLink>
      </div>
      <div className='mx-auto text-white  '>
          <Link className='relative navItem cursor-pointer' onClick={click}>
          <a href="#" ><span className='pr-2'>Services</span><IoIosArrowDown className={drop?"inline-block text-[20px] duration-500 -rotate-180 ":"inline-block text-[20px] duration-500 "} />
            </a>
           {drop? <div className=' before:h-0 after:h-auto absolute py-1 bg-white rounded-2xl text-black origin-top-left mt-5 flex flex-col w-44 duration-1000 '>
            <Link to="/services/grooming"  className="dropDown">Grooming Service</Link>
            <Link to="/services/pethostel" className='dropDown'>Pet Hostel</Link>
            <Link to="/services/surgicalservice" className='dropDown'>Surgical Service</Link>
            <Link to="/services/dentalcare" className='dropDown'>Dental Care</Link>

            </div>:null}
         </Link>
        <NavLink to='/about'className=' navItem' >About</NavLink>
        <NavLink to='/team'className=' navItem' >Team</NavLink>
        <NavLink to='/products'className=' navItem' >Products</NavLink>
        <NavLink to='/blog'className=' navItem' >Blog</NavLink>
        <NavLink to='/contact'className=' navItem' >Contact</NavLink>
        </div>
        <div className='flex space-x-7 z-50'>
          <button onClick={()=>setShowModal(true)} >
            <div className='navIcon bg-[#bfc5e622] duration-500 rounded-3xl'>
              <div className='w-5 h-5 justify-center bg-white rounded-2xl -bottom-[2px] -right-[2px] flex items-center absolute'>
                <span className='text-xs font-bold'>{amount }</span>
              </div>
            <div className='!text-white !opacity-100 '>
            <BsCart3 className=' font-bold '/>
            </div>
          </div>
          </button>
          <a className='hidden lg:inline-block' href="#">
          <div className='navIcon  bg-[#6e57ff] rounded-3xl '>
            <div className='!text-white !opacity-100 '>
            <IoCallOutline className="font-bold"/>
            </div>
          </div>
          </a>
        </div>
          </nav>
          {showModal &&
        <div className='absolute top-0 left-0'>
                  <Modal show={showModal} onClose={handleOnClose} />
        </div>
      } 
    </div>
  )
}

export default Navbar