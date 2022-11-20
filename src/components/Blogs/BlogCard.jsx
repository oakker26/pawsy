import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({id,img,header,date,title,link}) => {
    return (
        <Link to={link} id={id} className=' cursor-pointer border shadow-lg hover:-translate-y-4 duration-500 rounded-t-2xl hover:border-black  bg-white rounded-bl-2xl'>
        <div className=''>
            <img className='rounded-t-2xl w-full ' src={img} alt="" />
        </div>
        <div className='p-5'>
            <p className='text-[#1ba0ab]'>{header}</p>
            <h4 className='font-semibold mt-2 mb-4 text-2xl'>{title}</h4>
            <p className='font-[montserrat] text-sm'>{date}</p>
        </div>
    </Link>
  )
}

export default BlogCard