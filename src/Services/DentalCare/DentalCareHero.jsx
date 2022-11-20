import { list } from 'postcss'
import React from 'react'

const GroomingHero = () => {
  let data = [
    'Ut interdum enim',
    'Aenean viverra egestas',
    'Mauris eleifend BsDiamond',
    'Nulla facilisis enim',
    'Phasellus volutpat eu purus',
  ]
  return (
    <div className=" relative  mb-20 container pr-0 ">
      <div className="flex-col  items-end  ">
        <div className=" relative w-[100%] mb-[-237px] rounded-2xl">
          <div className=" rounded-2xl relative  ">
            <div className="grid grid-cols-12  ">
              <div className=" bg-white rounded-l-2xl  py-10 px-10 col-span-3">
                <div>
                  <div className=" bg-[#f9f9f9] px-2 py-3 text-[#1b2963] font-semibold text-lg mb-8 ">
                    Other Services
                  </div>
                </div>
                <div className="text-[#1b2963] ml-4 underline ">
                  <a
                    href="#"
                    className=" mb-4 block hover:translate-x-4 duration-500"
                  >
                    Gromming Service
                  </a>
                  <a
                    href="#"
                    className=" mb-4 block hover:translate-x-4 duration-500"
                  >
                    Surgical Service
                  </a>
                  <a
                    href="#"
                    className=" mb-4 block hover:translate-x-4 duration-500 "
                  >
                    Pet Hostel
                  </a>
                </div>
                <div className="sticky top-14">
                  <button className="primaryBtn w-[100%] shadow-lg">
                    Contact Us
                  </button>
                  <button className="PrimaryOutlineBtn w-[100%] font-[monsarret] mt-5">
                    {' '}
                    25-2525-252
                  </button>
                </div>
              </div>
              <div className="bg-white  col-span-9 py-10  rounded-r-2xl">
                <div className="border-l p-10">
                  <div className="flex items-center mb-10 space-x-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f9f9f9]">
                      <img
                        src="https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/613664b1a0ed7f3665a9cd45_Dental%20Care.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-[#1b2963] font-semibold text-3xl">
                      Dental Care
                    </h1>
                  </div>
                  <p className="opacity-60 tracking-[0.5px] leading-8 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi cursus auctor purus at vulputate. Nulla quis rutrum
                    leo, quis placerat augue. Ut interdum enim eu risus
                    fermentum, id consectetur nisl ornare. Aenean viverra
                    egestas sem at suscipit. Mauris eleifend diam nunc, non
                    euismod nisi viverra vel. Nulla facilisis enim sit amet
                    ipsum fermentum consequat. Aliquam volutpat molestie
                    egestas. Integer posuere ante quis nisi cursus, quis
                    hendrerit orci tincidunt. Ut a metus vel odio consectetur
                    tincidunt sed ac nunc. Phasellus volutpat eu purus eu
                    pharetra. Praesent eu volutpat dolor, quis porttitor nisi.
                    Donec iaculis ipsum et lectus eleifend, et ultricies elit
                    finibus. Suspendisse aliquet orci orci, non fringilla nisl
                    iaculis non. In hac habitasse platea dictumst.
                  </p>
                  <h4 className="text-[#1b2963] mb-3 font-semibold text-3xl mt-8">
                    What is Included
                  </h4>
                  <ul className="list-disc ml-6 opacity-60 mb-3">
                    {data.map((e) => (
                      <li>{e}</li>
                    ))}
                  </ul>
                  <p className="opacity-60 text-lg tracking-[0.5px] mb-3 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi cursus auctor purus at vulputate. Nulla quis rutrum
                    leo, quis placerat augue. Ut interdum enim eu risus
                    fermentum, id consectetur nisl ornare. Aenean viverra
                    egestas sem at suscipit. Mauris eleifend diam nunc, non
                    euismod nisi viverra vel. Nulla facilisis enim sit amet
                    ipsum fermentum consequat. Aliquam volutpat molestie
                    egestas. Integer posuere ante quis nisi cursus, quis
                    hendrerit orci tincidunt. Ut a metus vel odio consectetur
                    tincidunt sed ac nunc. Phasellus volutpat eu purus eu
                    pharetra. Praesent eu volutpat dolor, quis porttitor nisi.
                    Donec iaculis ipsum et lectus eleifend, et ultricies elit
                    finibus. Suspendisse aliquet orci orci, non fringilla nisl
                    iaculis non. In hac habitasse platea dictumst.
                  </p>
                  <div>
                    <img
                      src="https://assets.website-files.com/6107f3f9a7b00e6adf411dd2/61374f3471af250705ed6bc5_Service%20Image.png"
                      alt=""
                    />
                    <p className="text-center opacity-60 mt-3">
                      Image From{' '}
                      <span className="cursor-pointer underline">Unsplash</span>
                    </p>
                  </div>
                  <h4 className=" text-[#1b2963] font-bold text-3xl mb-3 mt-5 ">
                    More Info
                  </h4>
                  <p className="opacity-60 text-lg tracking-[0.5px] mb-3 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi cursus auctor purus at vulputate. Nulla quis rutrum
                    leo, quis placerat augue. Ut interdum enim eu risus
                    fermentum, id consectetur nisl ornare. Aenean viverra
                    egestas sem at suscipit. Mauris eleifend diam nunc, non
                    euismod nisi viverra vel. Nulla facilisis enim sit amet
                    ipsum fermentum consequat. Aliquam volutpat molestie
                    egestas. Integer posuere ante quis nisi cursus, quis
                    hendrerit orci tincidunt. Ut a metus vel odio consectetur
                    tincidunt sed ac nunc. Phasellus volutpat eu purus eu
                    pharetra. Praesent eu volutpat dolor, quis porttitor nisi.
                    Donec iaculis ipsum et lectus eleifend, et ultricies elit
                    finibus. Suspendisse aliquet orci orci, non fringilla nisl
                    iaculis non. In hac habitasse platea dictumst.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroomingHero
