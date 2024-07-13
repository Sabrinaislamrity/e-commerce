import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
  let [show, setShow] = useState(false)
  return (
    <header>
      <Container>
        <Flex className='justify-between items-center'>
          <div className="w-1/4">
            <div className="">
              <img src={Logo} alt="" />
            </div>
          </div>

          <div className="w-2/4">
            <div className="">
              <ul className={`lg:flex z-50 justify-center lg:gap-x-10 gap-y-[20px] duration-700 ease-in-out hover:ease-in lg:static absolute top-[50px] right-0 py-[5px] pl-[5px]  ${show == true ? "bg-[#c4c593] top-[50px] right-0 w-[120px] h-full rounded-l" : "top-[50px] right-[-200px] h-full"} `}>

                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>
                  <Link to="/">Home</Link>
                </li>
                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>
                  <Link to="/product">Shop</Link>
                </li>
                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>About</li>
                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>Contacts</li>
                <li className='font-sans text-[16px] lg:py-0 py-[10px] lg:text-[#767676] text-[#262626] duration-200  lg:hover:text-[#262626] hover:bg-white rounded text-center cursor-pointer'>Journal</li>


              </ul>
            </div>
          </div>
          <div className="w-1/4"></div>
          <div className="lg:hidden" onClick={() => setShow(!show)}>

            {show == true ? <RxCross1 /> : <FaBars />}



          </div>
        </Flex>
      </Container>
    </header>
  )
}

export default Header