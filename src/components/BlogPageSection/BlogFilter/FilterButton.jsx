import React, { useEffect } from 'react'

const FilterButton = ({setfilter,all,setActivGgen,activeGen}) => {
    useEffect(() => {
        if (activeGen === "all") {
            setfilter(all)
            return
        }
        let filtered = all.filter((e) => e.header.includes(activeGen))
        setfilter(filtered)
    }, [activeGen])

  return (
    <div className=' items-center md:flex-row px-1 flex-col bg-white border overflow-hidden py-1 rounded-xl'>
                  <button onClick={()=>setActivGgen("all")} href="#" className={activeGen==="all"?'m-[2px] py-3 px-5 bg-[#7f6bff22] text-[#7f6bff] rounded-xl font-semibold opacity-60 text-sm ':'m-[2px] py-3 px-5  rounded-xl  opacity-60 text-sm '}>All</button>
                  <button onClick={()=>setActivGgen("Grooming")} href="#" className={activeGen==="Grooming"?'m-[2px] py-3 px-5 bg-[#7f6bff22] text-[#7f6bff] rounded-xl font-semibold opacity-60 text-sm ':'m-[2px] py-3 px-5  rounded-xl  opacity-60 text-sm '}>Grooming</button>
                  <button onClick={()=>setActivGgen("Health")} href="#" className={activeGen==="Health"?'m-[2px] py-3 px-5 bg-[#7f6bff22] text-[#7f6bff] rounded-xl font-semibold opacity-60 text-sm ':'m-[2px] py-3 px-5  rounded-xl  opacity-60 text-sm '}>Health</button>
                  <button onClick={()=>setActivGgen("Training")} href="#" className={activeGen==="Training"?'m-[2px] py-3 px-5 bg-[#7f6bff22] text-[#7f6bff] rounded-xl font-semibold opacity-60 text-sm ':'m-[2px] py-3 px-5  rounded-xl  opacity-60 text-sm '}>Training</button>
       </div>
  )
}

export default FilterButton