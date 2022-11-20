import React from 'react'
import { Link } from 'react-router-dom'

const OfferCards = () => {
  let data = [{
      id: 1,
      img: 'https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135d0df6048e441c2b20e50_icons8-grooming-48%201.png',
      title: "Grooming Service",
      para:"Proin eu elit ultrices neque commodo rutrum vel vel purus doros lorems.",
      link:"services/grooming"
  },
  {
    id: 2,
    img: 'https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135d0dfc1359f33f42cc82b_icons8-dental-machine-96%201.png',
    title: "Dental Care",
    para: "Proin vitae antssafe et leo pretiumsegdx gravida. In sed masdsa porttitor, dictum.",
    link:"services/dentalcare"
    
      },
      {
        id: 3,
        img: 'https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135d0df659b1a5888d89ac5_icons8-hotel-star-96%201.png',
        title: "Pet Hostel",
        para: "Nam ipsam consectetur magnam consectetur beatae pariatur vel voluptas officia.",
        link:"services/pethostel"
      },
      {
        id: 4,
        img: 'https://assets.website-files.com/6103dc5e4e41bd925dc0997f/6135d0df31317030e1f2910f_icons8-surgical-96%201.png',
        title: "Surgical Service",
        para: "Expedita corrupti est non adipisci voluptatem est consequatur.",
        link:"services/surgicalservice"
    }]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8  gap-y-8 lg:gap-y-0    '>
            {data.map((e) => {
                return (
                    <Link to={e.link} className=''>
                        <div className='p-7 border border-[#fff] hover:border duration-500 delay-75  hover:border-[#000] bg-white shadow-lg rounded-bl-3xl rounded-t-3xl'>
                            <div className='w-16 h-16 flex justify-center items-center bg-[#1b296309] rounded-full'>
                            <img src={e.img} alt="" />
                            </div>
                            <div className='mt-6 mb-3 font-bold text-xl text-[#1b2963] '>
                                <h5 >{e.title}</h5>
                            </div>
                            <div className=' '>
                                <p className='text-[#595f77] text-base leading-[26px]'>{e.para}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
            </div>
            
  )
  
}

export default OfferCards