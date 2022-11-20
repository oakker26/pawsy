import React from 'react'

const PetHostelFooter = () => {

  let data=[{
        id:1,
        img: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd7409b51092adb69b009_Client%20Image%201.png",
        icon: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd6f02f5baf2c030ba9f6_icons8-quote-left-96%20(1)%201.png",
        lorem: '“Accusantium unde et voluptatem aspernatur. Voluptatem et tenetur quasi aut expedita occaecati id vel.”',
        name:" Lizzie Reed"
        },
        {
          id:2,
          img: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bda1789146902650d5f15_Client%20Image%203.png",
          icon: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd6f02f5baf2c030ba9f6_icons8-quote-left-96%20(1)%201.png",
          lorem: '“Accusantium unde et voluptatem aspernatur. Voluptatem et tenetur quasi aut expedita occaecati id vel.”',
          name:"Marta Mertz"
        },]
  return (
      <div className='container py-20'>
          <div className='text-center text-5xl font-bold'>
          <h1> See What Our Client</h1>
          <h1>Say About <span className='text-[#7d90e0]'>Our Service</span></h1>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-10 space-x-0 space-y-20 md:space-y-0 container pl-0 mt-28'>
          {data.map(e=><div className='relative border w-full rounded-t-3xl rounded-bl-3xl p-8'>
          <div className='absolute -top-12 left-7'>
          <div className='relative w-24'>
            <img src={e.img} alt="" />
            <div className='absolute w-10 h-10 rounded-full flex justify-center items-center bg-white bottom-0 right-0'>
              <img src={e.icon} alt="" />
            </div>
          </div>
         </div>
          <div>
            <p className='text-lg mt-8 opacity-60'>{e.lorem}</p>
          </div>
          <div className='flex items-center space-x-4 mt-10'>
            <div className='w-10 h-[2px] border border-black'></div>
            <h5 className='font-medium'>{e.name}</h5>
          </div>
        </div>)}
         </div>
    </div>
  )
}

export default PetHostelFooter