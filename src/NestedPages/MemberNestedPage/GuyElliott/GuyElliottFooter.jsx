import React from 'react'

const GuyElliottFooter = () => {
    let data = [
    {
        id: 1,
        img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a1e2b33fb34df897ebcf_Team%20Image%202.png",
        name: "Carole Murphy",
        textdes:"Veterinarian"
        },
        {
            id: 2,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a1f8a1dc82244a2445b8_Team%20Image%203.png",
            name: "Anne Jacobs",
            textdes:"Veterinarian"
        },
        {
            id: 3,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a20745343b5b7419cb5b_Team%20Image%204.png",
            name: "Valerie Bell",
            textdes:"Veterinary Technician"
        },
        {
            id: 4,
            img: "https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/6138a22855f82a0c6469fb35_Team%20Image%205.png",
            name: "Guy Elliott",
            textdes:"Veterinary Technician"
        },]
  return (
      <div className='container py-32'>
          <div className='text-5xl text-center'>
         <h5 className='font-bold text-[#1b2963]'> Our <span className='text-[#7d90e0]'>Other Menbers</span></h5></div>  
         <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-y-6 shadow-sm gap-x-8 mt-20'>
          {
        data.map((e) => <div id={e.id} className='p-6 border bg-white rounded-t-2xl rounded-bl-2xl shadow-md hover:border-black duration-500 hover:-translate-y-4 '>
            <div className='w-full' ><img className='rounded-t-2xl w-full rounded-bl-2xl' src={e.img} alt="" /></div>
            <div className='mt-6 mb-2'><h5 className='text-xl font-bold'>{e.name}</h5></div>
            <div><p className='opacity-60 font-normal'>{e.textdes }</p></div>
        </div>)
    } 
    </div>
      </div>
  )
}

export default GuyElliottFooter