import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const ProductCards = () => {
    let data = [{
        id: 1,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f20f438e04d7ea0a64249_Product%20Image%20Small.png",
        title: "Premium Dog Food 1",
        price: "24.00",
        link:"/product/productone"

        
    },
    {
        id: 2,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f21a28e1cad28361c7f86_Product%20Image%20Small.png",
        title: "Premium Dog Food 2",
        price: "12.00",
        link:"/product/producttwo"
        
        },
        {
            id: 3,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f21bcb7c57f404ef77585_Product%20Image%20Small.png",
            title: "Premium Dog Food 3",
            price: "12.00",
        link:"/product/productthree"
            
        },
        {
            id: 4,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f22044e41e24f40dcb6d4_Product%20Image%20Small.png",
            title: "Premium Dog Food 4",
            price: "24.00",
        link:"/product/productfour"
            
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
    <motion.div  initial={"hide"} whileInView={"show"} viewport={{once:false}}  transition={{staggerChildren:0.2}} className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8  mt-12 lg:mt-20 '>
              {data.map((e) => <Link to={e.link} >
                  <motion.div  className='bg-white p-6 border shadow-[0px_4px_12px_rgba(0,0,0,0.08)] mb-4  rounded-t-2xl rounded-bl-2xl hover:border-black duration-500 hover:-translate-y-3 ' variants={imageAnimation}>
                      <div id={e.id}>
                      <div className='flex justify-center items-center py-6 mb-5 bg-slate-50 rounded-t-2xl rounded-bl-2xl '>
                          <img src={e.img} className="mx-auto w-[40%]" alt="" />  
                      </div>
                      <div>
                          <h4 className='text-xl font-semibold mb-2'>{e.title}</h4>
                      </div>
                      <div>
                          <p className='text-lg opacity-60 '>${e.price} USD</p>
                      </div>

                      </div>
                </motion.div>
                      
              </Link>)}
          </motion.div>
  )
}

export default ProductCards