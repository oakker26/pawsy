import React, { useEffect, useState } from 'react'
import FilterButton from './FilterButton'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const BlogFilter = () => {
    let data = [{
        id: 1,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95a2e84d34f9e8cc042b_Post%20Image%201.png",
        header: "Grooming",
        date: "September 9,2021",
        title: "Best Way to Grooming Your Pet"
        ,link:"/post/grooming"
    },
    {
        id: 2,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95b5e9a2016507be2d56_Post%20Image%202.png",
        header: "Health",
        date: "September 10,2021",
        title: "7 Things You Can Do to Help Your Dog Live Longer"
        ,link:"/post/healthone"

        },
        {
            id: 3,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95bde08e074e03557396_Post%20Image%203.png",
            header: "Health",
            date: "September 23,2021",
            title: "5 Easy Ways to Keep Your Dog's Teeth Clean"
        ,link:"/post/healthtwo"

        },
        {
          id: 4,
          img: "https://d.newsweek.com/en/full/1787059/dog-tricks.jpg?w=790&f=5fa4017f5057dd0439436d5934dc3e9f",
          header: "Training",
          date: "September 30,2021",
          title: "How to Teach Your Dog to Sit on Command"
        ,link:"/post/trainingone"

        },
        {
          id: 5,
          img: "https://poodlereport.com/wp-content/uploads/2021/02/dog-5837501_1920.jpg",
          header: "Training",
          date: "September 29,2021",
          title: "What You Need to Know Before Start Training Dog"
        ,link:"/post/trainingtwo"

        },]
    const [all, setAll] = useState([]);
    const [filter, setfilter] = useState([]);
    const [activeGen,setActiveGen]=useState("all")
    useEffect(() => {
        Filter();
    },[])
    const Filter = () => {
        setAll(data)
        setfilter(data)
    }
  return (
    <div className='lg:container md:px-6 2xl:px-20 bg-[#f6feff] lg:py-32 py-20 '>
    <div className='flex md:flex-row flex-col justify-between items-center '>
              <FilterButton all={all } setfilter={setfilter} activeGen={activeGen} setActivGgen={setActiveGen} />
              <div className='md:flex-row mt-5 md:mt0 flex-col flex z-50'>
                  <input type=" text" className='mb-5 md:mb-0 w-80 md:w-auto h-14 md:h-auto rounded-full border' placeholder='Search...' />
            <button className='PrimaryOutlineBtn m-0 hover:scale-110 duration-500 w-full lg:w-auto'>Search</button>
        </div>
  </div>
    <motion.div layout className='grid grid-cols-1 gap-y-6 lg:grid-cols-3 gap-x-7 mt-20'>
              {filter.map((e) => <motion.div animate={{ translateX: 0, opacity: 1 }} initial={{ translateX: -200, opacity: 0 }} className='border shadow-lg hover:-translate-y-4 duration-500 rounded-t-2xl hover:border-black  bg-white rounded-bl-2xl' id={e.id}>
                  <Link to={e.link}>
                  <div className='lg:h-[245px] overflow-hidden'>
                <img className='rounded-t-2xl w-full lg:h-full  ' src={e.img} alt="" />
            </div>
            <div className='p-5'>
                <p className='text-[#1ba0ab]'>{e.header}</p>
                <h4 className='font-semibold mt-2 mb-4 text-2xl'>{e.title}</h4>
                <p className='font-[montserrat] text-sm'>{e.date}</p>
            </div></Link>
        </motion.div>)}
    </motion.div>
</div>
  )
}

export default BlogFilter