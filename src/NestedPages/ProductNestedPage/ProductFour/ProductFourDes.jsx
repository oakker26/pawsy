import React, { useState } from 'react'

const ProductFourDes = () => {
    let data = [{
        title: "Description",
        para:"Pet food is a specialty food for domesticated animals that is formulated according to their nutritional needs. Pet food generally consists of meat, meat byproducts, cereals, grain, vitamins, and minerals. In the U.S. about 300 manufacturers produce more than 7 million tons of pet food each year, one of the largest categories of any packaged food. Pet owners can choose from more than 3,000 different pet food products, including the dry, canned, and semi-moist types, as well as snacks such as biscuits, kibbles, and treats. In the 1990s, this $8-billion industry feeds America's 52 million dogs and 63 million cats."
    },{
        title: "Product Details",
        para:"Organ meats like the liver, spleen and heart are a greater source of essential nutrients like vitamins, minerals and protein, than regular muscle meat. Regular muscle meat often lacks nutrients dogs and cats need, like calcium and vitamin A. These are found in greater abundance in by-products such as bones and liver.",
    },{
        title: "Reviews",
        para:"I have made one order with them to try their food out, suddenly one day out of no where they decided to charge me$170 without asking me, guess what they didn’t even bother ask how my dog likes the food. Wow when i try to log on my account on their website there was no where possible to delete my account cancel subscription or cancel order! I can not believe it’s 2022 already there’s still a company that ask you to email them for any of the features mentioned above! Now i feel been scammed by them, credit card theft if I must say. Now I true hope I can get my money back from them or maybe should I share this story with face book group and see if there are any other victims out there"
    }]
    let [click, setClick] = useState(null)
    let toggle = (i) => {
        if (click === i) {
            return setClick(null)
        }
        setClick(i)
    }
    console.log(click);

  return (
      <div>
          <ul className=' flex md:flex-row flex-col justify-center mt-20'>
              {data.map((e, i) => <li onClick={()=>toggle(i)} className={click ===i ?'px-5 py-4 duration-500 cursor-pointer m-[2px] bg-[#7f6bff22] text-sm rounded-lg font-semibold text-[#7f6bff] ':'px-5 py-4 cursor-pointer m-[2px]  text-sm rounded-lg  '}>{e.title}</li>)}
          </ul>
          <div className='p-10 bg-[#f9f9f9] mt-5 rounded-3xl shadow-inner'>
              {data.map((e, i) => 
                  <p className={click===i?'opacity-60 text-base md:text-lg tracking-[0.5px] duration-500':'opacity-0 h-0 text-lg tracking-[0.5px]'}>{e.para}</p>)}
          </div>
    </div>
  )
}

export default ProductFourDes