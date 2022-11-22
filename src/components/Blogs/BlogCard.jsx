import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const BlogCard = ({ id, img, header, date, title, link }) => {

    return (
        
            <Link to={link} >
            <div id={id} className=' cursor-pointer border shadow-lg hover:-translate-y-4 duration-500 rounded-t-2xl hover:border-black  bg-white rounded-bl-2xl'>
        <div className='lg:h-[245px] overflow-hidden'>
            <img className='rounded-t-2xl w-full h-full ' src={img} alt="" />
        </div>
        <div className='p-5 lg:h-[172px] flex flex-col'>
                    <div className='mb-auto'>
                    <p className='text-[#1ba0ab]'>{header}</p>
            <h4 className='font-semibold mt-2 mb-4 text-2xl'>{title}</h4>
           </div>
                    <div className=' mt-auto'>
            <p className='font-[montserrat] text-sm '>{date}</p>
                    </div>
                </div>
        </div>
    </Link>
        
  )
}

export default BlogCard