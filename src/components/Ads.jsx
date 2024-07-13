import React from 'react'
import Container from './Container'
import Flex from './Flex'
import imgone from "../assets/Ad_1.png"
import imgtwo from "../assets/Ad_2.png"
import imgthree from "../assets/Ad_3.png"

const Ads = () => {
  return (
   <>
   <section className='lg:py-[174px] py-[60px]'>
    <Container>
        <Flex className="justify-between">
        <div className="w-[48%]">
                    <img className='h-full' src={imgone} alt="" />
                </div>
                <div className="w-[48%]">
                    <div className="">
                        <img src={imgtwo} alt="" />
                    </div>
                    <div className="lg:mt-[35px] mt-[15px]">
                        <img src={imgthree} alt="" />
                    </div>
                </div>
        </Flex>
    </Container>
   </section>
   </>
  )
}

export default Ads