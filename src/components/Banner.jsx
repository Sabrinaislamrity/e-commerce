import React from 'react'
import Banimg from "../assets/banner.png"
import Slider from "react-slick";
import Container from './Container';
import { IoReload } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        arrows: false,
        appendDots: dots => (
          <div
            style={{
            
              borderRadius: "10px",
              padding: "10px",
              position: "absolute",
              left: "70px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
            <div className='ami'
            style={{
                width: "30px",
                color: "transparent",
                padding: "10px 0",
                borderRight: "3px #fff solid"
            }}
        >
            0{i + 1}
        </div>
    )
};
  return (
    <>
 <div className="w-full">
 <Slider {...settings}>

               

<div className=''> 
<img className='w-full' src={Banimg} alt="" />
 </div>

 <div className=''> 
<img className='w-full' src={Banimg} alt="" />
 </div>

 <div className=''> 
<img className='w-full' src={Banimg} alt="" />
 </div>

 <div className=''> 
<img className='w-full' src={Banimg} alt="" />
 </div>

 
</Slider>
 </div>
 <section>
    <Container>
    <div className="flex justify-between py-7 ">
                    <div className="flex">
                        <h2 className='flex items-center gap-x-2 font-sans text-[16px] lg:text-[#767676] text-black'> <span className='text-[20px]'>2</span>Two years warranty</h2>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-x-2">
                            <div className="text-[20px]">
                                <TbTruckDelivery />
                            </div>
                            <h2 className='font-sans text-[16px] lg:text-[#767676] text-black '> Free shipping</h2>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center gap-x-2">
                            <div className="text-[20px]">
                                <IoReload />
                            </div>
                            <h2 className='font-sans text-[16px] lg:text-[#767676] text-black '> Return policy in 30 days</h2>
                        </div>
                    </div>
                </div>

    </Container>
 </section>

       
        
        
        
        
        
        </>
   
        
  )
}

export default Banner