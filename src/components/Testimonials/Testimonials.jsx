import React from 'react'
import "/node_modules/slick-carousel/slick/slick-theme.css"; 
import "/node_modules/slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import { useRef } from 'react';
const Testimonials = () => {
  let data = [
    {
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
    },
    {
      id:3,
      img: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bda0af5fea6e97032e6da_Client%20Image%202.png",
      icon: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd6f02f5baf2c030ba9f6_icons8-quote-left-96%20(1)%201.png",
      lorem: '“Est omnis nostrum dolor modi incidunt. Excepturi qui aperiam mollitia. Sapiente velit.”',
      name:"Cecelia Waters"
    },
    {
      id:4,
      img: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd7409b51092adb69b009_Client%20Image%201.png",
      icon: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd6f02f5baf2c030ba9f6_icons8-quote-left-96%20(1)%201.png",
      lorem: '“Et autem ea. Sed ut rerum iusto. Eligendi repudiandae repudiandae illum ipsa ut velit.”',
      name:"  Oscar Schmitt"
    },
    {
      id:5,
      img: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612f940eea72f66f95f55529_Client%20Image%205.png",
      icon: "https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612bd6f02f5baf2c030ba9f6_icons8-quote-left-96%20(1)%201.png",
      lorem: '“Optio nesciunt delectus in vel cum. Officiis optio minus tempore. Tempore quidem.”',
      name:" Judith Price"
    },]
    function NextArrow(props) {
      const { className, style, onClick } = props;
      return (
          <div
              className={className}
              onClick={onClick}
          />
      );
  }

  function PrevArrow(props) {
      const { className, style, onClick } = props;
      return (
          <div
              className={className}
              onClick={onClick}
          />
      );
  }
    const sliders=useRef(null)
    const settings = {
      focusOnSelect: true,
      arrows: false,
      speed: 400,
      lazyload:true,
      infinite: true,
      slidesToShow: 3,
      className:"center",
      slidesToScroll: 1,
      autoplaySpeed:5000,
      swipeToSlide: true,
      autoplay: true,
      nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            focusOnSelect: true,
        arrows: false,
        speed: 400,
        lazyload:true,
        infinite: true,
        slidesToShow: 2,
        className:"center",
        slidesToScroll: 1,
        autoplaySpeed:2000,
        swipeToSlide: true,
        autoplay: true,
        nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
          }
        
        },
        {
          breakpoint: 480,
          settings: {
            focusOnSelect: true,
            arrows: false,
            speed: 400,
            lazyload:true,
            infinite: true,
            slidesToShow: 1,
            className:"center",
            slidesToScroll: 1,
            autoplaySpeed:5000,
            swipeToSlide: true,
            autoplay: true,
            // nextArrow: <NextArrow />,
          // prevArrow: <PrevArrow />,
          }
        }
      ]

    };
  return (
      <div className='container lg:py-32 py-20 overflow-hidden'>
        <div className='flex mb-20 flex-col lg:flex-row lg:justify-between justify-start items-center '>
              <div>
              <div data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"  className='flex items-center  space-x-2 mb-4 '>
                  <div className='w-10 h-[2px]  bg-[#1ba0ab] '> </div>
                  <div className='text-[#1ba0ab] leading-7'>Testimonials</div>
                  </div>
                  <h1 data-aos='fade-right'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"  className='md:text-5xl text-3xl font-bold'>See What Our <span className='text-[#7d90e0]'>Client Say</span></h1>
              </div>
              <div data-aos='fade-left'  data-aos-easing="ease-in-out"  data-aos-duration="1000" data-aos-delay="50" data-aos-once="false"  className='grid grid-cols-2 gap-12 '>
                  <button onClick={()=>sliders.current.slickPrev()}  className='w-12 h-12 border rounded-full flex justify-center items-center  '> <img  src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612f92af448f4fce7813d069_Left%20Arrow.svg" alt="" /></button>
                  <button onClick={()=>sliders.current.slickNext()}  className='w-12 h-12 border rounded-full flex justify-center items-center  '> <img  src="https://assets.website-files.com/6103dc5e4e41bd925dc0997f/612f92c80ce3cfbe2748484b_Right%20Arrow.svg" alt="" /></button>
              </div>
          </div>
      <Slider className='overflow-visible ' ref={sliders} {...settings}>
        {data.map((e) => <div className='relative border w-[370px] rounded-t-3xl rounded-bl-3xl p-8'>
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
          </Slider>
     
    </div>
  )
}

export default Testimonials