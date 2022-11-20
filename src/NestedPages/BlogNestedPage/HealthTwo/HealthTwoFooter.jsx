import React from 'react'
import { Link } from 'react-router-dom'

const HealthTwoFooter = () => {

    let data = [
        {
            id: 1,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95a2e84d34f9e8cc042b_Post%20Image%201.png",
            header: "Grooming",
            date: "September 9,2021",
            title: "Best Way to Grooming Your Pet"
        },
    {
        id: 2,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95b5e9a2016507be2d56_Post%20Image%202.png",
        header: "Health",
        date: "September 10,2021",
        title: "7 Things You Can Do to Help Your Dog Live Longer"
        },
        
        {
            id: 3,
            img: "https://d.newsweek.com/en/full/1787059/dog-tricks.jpg?w=790&f=5fa4017f5057dd0439436d5934dc3e9f",
            header: "Training",
            date: "September 30,2021",
            title: "How to Teach Your Dog to Sit on Command"
        },]
  return (
      <div className='md:py-32 py-20 border-t container'>
          <div className='flex justify-between items-center'>
              <div>
              <h1 className='text-[#1b2963] md:text-5xl text-3xl font-bold'>Other <span className='text-[#7d90e0]'>Post</span></h1>
              </div>
              <div>
              <Link to="/blog" className='PrimaryOutlineBtn'> All Posts</Link>
              </div>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5  mt-12 lg:mt-20 '>
              {data.map((e) => < div id={e.id} className='border shadow-lg hover:-translate-y-4 duration-500 rounded-t-2xl hover:border-black  bg-white rounded-bl-2xl'>
        <div className='lg:h-[245px] overflow-hidden '>
            <img className='rounded-t-2xl w-full lg:h-full ' src={e.img} alt="" />
        </div>
        <div className='p-5'>
            <p className='text-[#1ba0ab]'>{e.header}</p>
            <h4 className='font-semibold mt-2 mb-4 text-2xl'>{e.title}</h4>
            <p className='font-[montserrat] text-sm'>{e.date}</p>
        </div>
    </div>)}
          </div>
    </div>
  )
}

export default HealthTwoFooter