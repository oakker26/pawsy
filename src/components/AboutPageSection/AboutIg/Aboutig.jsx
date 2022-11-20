import React from 'react'

const Aboutig = () => {
    let image = ["https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6132687a20868c953192e34c_Instagram%20Image%202.jpg",
        "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6132687aa7be147c57afe7ac_Instagram%20Image%201.jpg",
        "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6132687aa7be141213afe7ad_Instagram%20Image%205.jpg",
        "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6132687a2ff1e185c52a3c78_Instagram%20Image%203.jpg",
        "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6132687a2ff1e1a3fe2a3c79_Instagram%20Image%204.jpg"
    ]
    return (
      <div>
      <div className=' pt-32 pb-20 text-center bg-[#1b2963] '>
          <h1 className='text-5xl font-bold text-[#bfc5e6]'> Our Instagram <a href="https://www.instagram.com/" className='underline text-[#7d90e0]'>@pawsy</a></h1>
            </div>
            
                <div className='grid grid-cols-5'>
                {image.map(e=><a shref="" className='overflow-hidden w-[100%] cursor-pointer inline-block '><img src={e} className=" hover:scale-110 duration-300 w-full" alt="" /></a>)}

                </div>
            </div>
      
  )
}

export default Aboutig