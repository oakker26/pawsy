import React from 'react'
import { Link } from 'react-router-dom'

const ProductThreeFooter = () => {

    let data=[{
        id: 2,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f20f438e04d7ea0a64249_Product%20Image%20Small.png",
        title: "Premium Dog Food 1",
        price: "24.00",
        link:"/product/productone"
        },
        {
            id: 3,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f21a28e1cad28361c7f86_Product%20Image%20Small.png",
            title: "Premium Dog Food 2",
            price: "12.00",
        link:"/product/producttwo"

        },
        {
            id: 4,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613f22044e41e24f40dcb6d4_Product%20Image%20Small.png",
            title: "Premium Dog Food 4",
            price: "24.00",
        link:"/product/productfour"
            
        },]
  return (
      <div className='md:py-32 container py-20'>
          <h1 className='text-[#1b2963] md:text-5xl text-3xl font-bold text-center'>You Might <span className='text-[#7d90e0]'>Also Like</span></h1>          
          <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5  mt-12 lg:mt-20 '>
              {data.map((e) => <Link to={e.link} className='bg-white p-6 border shadow-[0px_4px_12px_rgba(0,0,0,0.08)] mb-4  rounded-t-2xl rounded-bl-2xl hover:border-black duration-500 hover:-translate-y-3 '>
                  <div id={e.id}>
                      <div className='flex justify-center items-center py-6 mb-5 bg-slate-50 rounded-t-2xl rounded-bl-2xl '>
                          <img src={e.img} className="mx-auto w-[40%]" alt="" />  
                      </div>
                      <div>
                          <h4 className='text-xl font-semibold mb-2'>{e.title}</h4>
                      </div>
                      <div>
                          <p className='text-lg text-center pl-4 opacity-60 '>${e.price} USD</p>
                      </div>

                  </div>
              </Link>)}
          </div>
    </div>
  )
}

export default ProductThreeFooter