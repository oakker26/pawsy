import React from 'react'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
import { motion } from 'framer-motion'
const Blog = () => {
    let data = [{
        id: 1,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95a2e84d34f9e8cc042b_Post%20Image%201.png",
        header: "Grooming",
        date: "September 9,2021",
        link:"post/grooming",
        title: "Best Way to Grooming Your Pet"
    },
    {
        id: 2,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95b5e9a2016507be2d56_Post%20Image%202.png",
        header: "Health",
        date: "September 10,2021",
        link:"post/healthone",
        title: "7 Things You Can Do to Help Your Dog Live Longer"
        },
        {
            id: 3,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/612f95bde08e074e03557396_Post%20Image%203.png",
            header: "Health",
            date: "September 23,2021",
            link:"post/healthtwo",
            title: "5 Easy Ways to Keep Your Dog's Teeth Clean"
        },]
        const imageAnimation={
            hide:{x:-100,
            opacity:0},
            show:{
                x:0,
                opacity:1,
                transition:{duration:0.3}
            }
        }
       
  return (
      <div className='container bg-[#f6feff] lg:py-32 py-20'>
          <div className='flex flex-col md:flex-row justify-between items-center '>
              <div>
                  <div data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="500" data-aos-delay="50" data-aos-once="false"  className='flex items-center space-x-3'>
                      <div className='w-10 h-[2px] bg-[#1ba0ab]'></div>
                      <h5 className='text-[#1ba0ab]'>Blog</h5>
                  </div>
                  <h1 data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="500" data-aos-delay="50" data-aos-once="false"  className='text-[#1b2963]  text-5xl font-bold mt-4'>Our <span className='text-[#7d90e0]'> Recent Posts</span></h1>
              </div>
              <div>
                  <Link data-aos='fade-left'  data-aos-easing="ease-in-out"  data-aos-duration="500" data-aos-delay="50" data-aos-once="false"  to='blog' className='PrimaryOutlineBtn  hover:scale-110 duration-500 w-full lg:w-auto'>All Posts</Link>
              </div>
        </div>
          <motion.div initial={"hide"} whileInView={"show"} viewport={{once:false}}  transition={{staggerChildren:0.3}} className='grid grid-cols-1 gap-y-6 lg:grid-cols-3 gap-x-7 mt-20'>
          
              {data.map(e =><motion.div  variants={imageAnimation}>
                  <BlogCard link={e.link} id={e.id} img={e.img} header={e.header} date={e.date} title={e.title} />
                  </motion.div> 
          )}
              
            
          </motion.div>
    </div>
  )
}

export default Blog