import React from 'react'
import { decreaseItem, increaseItem, removeItem } from '../../../feature/cart/cartSlice'
import { useDispatch } from 'react-redux'
const CartItem = ({ id, img, title, price, link , amount }) => {
  const dispatch = useDispatch();
  return (
      <div>
          <section className='p-5'>
           <div className='flex mb-2 flex-row items-center justify-between '>
          <div className=''>
              <div className='p-3 bg-gray-100 rounded-2xl flex items-center justify-center'>
                  <img className=' w-14 ' src={img} alt="" />
              </div>
          </div>
          <div className='text-start'>
                      <h5 className='font-semibold'>{ title}</h5>
                      <h5 className=' font-semibold'>${price}USD</h5>
            <button className='text-[#6e57ff]' onClick={() => {
              dispatch(removeItem(id))
              }}> Remove</button>
          </div>
          <div className=' flex-col items-center justify-center'>
            <button onClick={() => {
              dispatch(increaseItem({ id }))
          }} className='text-3xl font-bold'>+</button>
            <p className=' font-bold font-[montserrat]'>{amount}</p>
            <button className='text-3xl font-bold' onClick={() => {
              amount === 1 && dispatch(removeItem(id));
              dispatch(decreaseItem(({id})))
          }}>-</button>
          </div>
          <div>
              
          </div>
      </div>
      
      
      </section>
    </div>
  )
}

export default CartItem