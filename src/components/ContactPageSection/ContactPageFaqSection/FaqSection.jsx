import React from 'react'
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react';

const FaqSection = () => {
    const data = [{
        question: "What are the accepted methods of payment?",
        answer: "Phasellus porta porta consequat. Curabitur auctor commodo sapien at rhoncus.",
        id:1
    },
    {
        question: "At what age should I have my pet spayed or neutered?",
        answer: "Phasellus porta porta consequat. Curabitur auctor commodo sapien at rhoncus.",
        id:2
        },
        {
            question: "What are the standard vaccination protocols for puppies?",
            answer: "Phasellus porta porta consequat. Curabitur auctor commodo sapien at rhoncus.",
            id:3
        },
        {
            question: "What if i Have more questions?",
            answer: "Phasellus porta porta consequat. Curabitur auctor commodo sapien at rhoncus.",
            id:4
        }]
    let [Selected,setSelected]=useState(null)
    let toggle = (i) => {
        if (Selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
      <div className='grid grid-cols-1 w-[95%]'>
          {data.map((e,i) => <>
              <div onClick={()=>toggle(i)} className=' flex justify-between items-start cursor-pointer mb-6 pb-6  border-b '>
                  <div>
                      <h5 className='md:text-2xl text-xl font-semibold text-[#1b2963]  '>{e.question}</h5>
                      <p className={Selected === i ? " mt-2 opacity-600 duration-500 text-[#1b2963] h-auto delay-300 ":"  opacity-0 h-0 overflow-hidden duration-500 delay-300"}>{e.answer}</p>
                  </div>
                  <div className='w-30 flex justify-end '>
                      <div className={Selected===i?"w-10 flex items-center justify-center h-10 ml-0 duration-500 bg-[#1b2963] rounded-full":"w-10 flex items-center justify-center h-10 ml-0 bg-[#ebebeb] duration-500 rounded-full"}>
                          {Selected === i ? <AiOutlineRight className='text-white rotate-90 duration-500' />:<AiOutlineRight className='duration-500'/>}
                      </div>
                  </div>
          </div>
          </>)}
    </div>
  )
}

export default FaqSection