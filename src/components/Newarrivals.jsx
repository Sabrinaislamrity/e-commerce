import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Arrivalsitem from './Arrivalsitem'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute right-0 lg:right-[-30px] top-[50%]' onClick={onClick} ><BsArrowRight className='inline-block' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='w-[64px] h-[64px] rounded-full bg-[#979797] leading-[60px] text-[25px] text-white text-center cursor-pointer absolute left-0 lg:left-[-30px] top-[50%] z-50' onClick={onClick} ><BsArrowLeft className='inline-block' /></div>
    );
}


const Newarrivals = () => {
    let data = useContext(apiData)
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            
              }
            },
        
          ]
    };


   
  return (
    <>
    <section>
        <Container>
        <h2 className='text-[#262626] font-sans text-[36px] font-bold'>New Arrivals</h2>
      
        
        <Slider {...settings}>
            {data.map((item)=>(

            <Link to="/product">
            <Arrivalsitem item={item}/>
            </Link>

        ))}
           </Slider>
       
        </Container>
    </section>
    </>
  )
}

export default Newarrivals