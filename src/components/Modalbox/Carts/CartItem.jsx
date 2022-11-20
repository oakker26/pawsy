import React from 'react'

const CartItem = ({key,img,title,price,link}) => {
  return (
      <div>
          <section id={key} className='p-5'>
           <div className='flex mb-10 flex-row items-center justify-between '>
          <div className=''>
              <div className='p-3 bg-gray-100 rounded-2xl flex items-center justify-center'>
                  <img className=' w-14 ' src={img} alt="" />
              </div>
          </div>
          <div className='text-start'>
                      <h5 className='font-semibold'>{ title}</h5>
                      <h5 className=' font-semibold'>{price}</h5>
              <button className='text-[#6e57ff]'> Remove</button>
              </div>
              <input type="number" className='  border w-16 pl-4 pr-2 h-10 rounded-2xl bg-gray-100 ' />
          <div>
              
          </div>
      </div>
      
      
      </section>
    </div>
  )
}

export default CartItem