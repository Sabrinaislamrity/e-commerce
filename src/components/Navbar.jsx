import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import image from "../assets/Image.png"
const Navbar = () => {

    let [menuShow, setmenuShow] = useState(false)
    let [userShow, setuserShow] = useState(false)
    let [logShow, setlogShow] = useState(false)

    let menuref = useRef()
    let userref = useRef()
    let logref = useRef()

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (menuref.current.contains(e.target)) {
                setmenuShow(!show)

            } else {
                setmenuShow(false)
            }
            if (userref.current.contains(e.target)) {
                setuserShow(!show)

            } else {
                setuserShow(false)
            }
            if (logref.current.contains(e.target)) {
                setlogShow(!show)

            } else {
                setlogShow(false)
            }
        })

    }, [menuShow, userShow, logShow])










  return (
    <>
    <nav className='bg-[#F5F5F3] py-[25px] items-center'>
        <Container>
            <Flex className={`items-center cursor-pointer px-3`}>
                <div className="lg:w-[35%] w-[20%]" relative>
                    <div ref={menuref} onClick={() => setmenuShow(!menuShow)} className="lg:flex items-center gap-x-2 text-black text-[17px]">
                    <HiBars2 />
                    <p className='font-sans lg:text-[14px] lg:pt-0 pt-3 text-[9px]'>Shop by Category</p>
                    </div>
                    
                   {menuShow &&

              <div className="z-50 absolute lg:left-[220px] left-[0px] lg:top-[120px] top-[120px] py-[10px] rounded bg-[#262626] lg:w-[270px] w-[150px] pl-[21px]">
              <ul className=''>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Accesories</li>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Furniture</li>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Electronics</li>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Clothes</li>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Bags</li>
                <li className='text-[#ffffff88] hover:text-white py-[16px] hover:pl-[10px] font-sans duration-500 ease-in-out'>Home appliances</li>
            </ul>
</div>

                   }

                </div>
                <div className="lg:w-[40%] w-[60%]">
                    <div className="relative items-center">
                    <input placeholder='Search Products' className='w-full font-sans h-[50px] pl-[10px]' type="text" />
                        <div className="absolute right-[20px] top-[35%] w-[16px] h-[16px] cursor-pointer">
                        <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] w-[20%]">
                    <div ref={logref} onClick={() => setlogShow(!logShow)} className="lg:flex relative justify-end lg:gap-x-2 lg:pl-0 pl-[30px] items-center">

                    <div className="flex">
                                <FaUser />
                                <FaCaretDown />
                            </div>

                            {logShow &&
                            <div className="z-50 absolute top-[25px] right-[25px] bg-white">
                            <div className="w-[148px] h-[50px]  text-center duration-300 ease-in-out leading-[50px] hover:bg-black hover:text-white hover:rounded hover:text-[16px]">My Account</div>
                            <div className="w-[148px] h-[50px]  text-center duration-300 ease-in-out leading-[50px] hover:bg-black hover:text-white hover:rounded hover:text-[16px]">Log Out</div>
                        </div>
                            }

                           


                                <div ref={userref} onClick={() => setuserShow(!userShow)} className="lg:pt-0 pt-3">

                                <FaShoppingCart />
                                </div>

                                {userShow &&

                                  <div className="z-50 absolute top-[15px] right-0">

                                <div className=" bg-[#F5F5F3] p-[20px]">
                                        <div className="w-[300px] flex justify-between items-center">
                                            <div className="">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="">
                                                <h3>Black Smart Watch</h3>
                                                <h5>$44.00</h5>
                                            </div>
                                            <div className="">
                                                <RxCross1 />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-[20px] bg-white">
                                        <div className="">
                                            <h3>Subtotal: $44.00</h3>
                                        </div>
                                        <div className="flex mt-[20px] gap-x-3">
                                            <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px] hover:bg-black hover:text-white hover:rounded hover:text-[16px]">View Cart</div>
                                            <div className="w-[148px] h-[50px] border border-black text-center duration-300 ease-in-out leading-[50px]  hover:bg-black hover:text-white hover:rounded hover:text-[16px]">Checkout</div>
                                        </div>
                                    </div>



                                </div>


                                }

                              





















                    </div>
                </div>

            </Flex>
        </Container>
    </nav>
    
    
    
    </>

  )
}

export default Navbar