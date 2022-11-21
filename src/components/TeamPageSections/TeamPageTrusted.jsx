import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../AboutPageSection/AboutTeam/Cards'
import { motion } from 'framer-motion'
const TeamPageTrusted = () => {
  let data = [{
    id: 5,
    img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a22855f82a0c6469fb35_Team%20Image%205.png",
    name: "Guy Elliott",
    textdes: "Veterinary Technician",
    link:"/team/guyelliott"
},
{
    id: 6,
    img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a25e10d654aaad0c5dd9_Team%20Image%209.png",
    name: "Allison Willis",
  textdes: "Veterinary Technician",
    link:"/team/allisonwillis"
    },
    {
        id: 7,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a274ab1e41158cad583a_Team%20Image%2010.png",
        name: "Beth Leonard",
      textdes: "Veterinary Technician",
        link:"/team/bethleonard"
    },
    {
        id: 8,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a27be83cd7f4995f302e_Team%20Image%2011.png",
        name: "Misty Reeves",
      textdes: "Veterinary Technician",
        link:"/team/mistyreeves"
    },]
    const imageAnimation={
      hide:{x:100,
      opacity:0},
      show:{
          x:0,
          opacity:1,
          transition:{duration:0.3}
      }
  }
  return (
    <div className=' text-start md:text-center bg-[#f6feff] md:py-32 py-10'>
      <h1 className='md:text-5xl text-3xl text-[#1b2963] font-bold'>
      Trusted Team for Your <span className='text-[#7d90e0]'>Loved Ones</span>
      </h1>
      <p className='text-lg opacity-60 md:mt-8 md:mb-20 mt-4 mb-0'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae molestie nibh.</p>
      <div className=' container'>
        <Cards />
        <motion.div  initial={"hide"} whileInView={"show"} viewport={{once:false,amount:0.5}}  transition={{staggerChildren:0.2}}   className='grid lg:grid-cols-4 md:grid-cols-2 gap-y-6 shadow-sm gap-x-8 mt-20'>
          {
            data.map((e) => <Link to={e.link} >
          <motion.div to={e.link} variants={imageAnimation} id={e.id} className='p-6 border bg-white rounded-t-2xl rounded-bl-2xl shadow-md hover:border-black duration-500 hover:-translate-y-4 '>
            <div className='w-full' ><img className='rounded-t-2xl w-full rounded-bl-2xl' src={e.img} alt="" /></div>
            <div className='mt-6 mb-2'><h5 className='text-xl font-bold'>{e.name}</h5></div>
            <div><p className='opacity-60 font-normal'>{e.textdes }</p></div>
        </motion.div>
        </Link>)
    } 
    </motion.div>

      </div>
    </div>
    
  )
}

export default TeamPageTrusted