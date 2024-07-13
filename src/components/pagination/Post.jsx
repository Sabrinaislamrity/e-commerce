import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Post = ({allData}) => {
  
  return (
    <>


{allData.map((item)=>(
                         
                            
                         <div className='w-[32%] py-5'>

                   <Link to={`/product/${item.id}`}>
                   <div className="">

<div className="relative group overflow-hidden cursor-pointer">
<img src={item.thumbnail} className='h-[376px] w-[376px]' alt="sss" />
<div className="bg-white absolute left-0 h-[130px] duration-700 ease-in-out bottom-[-130px] w-full group-hover:bottom-[0px] flex items-center justify-end">

<ul className='pr-5'>
<li className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Wish List<CiHeart /></li>
<li className='flex justify-end items-center gap-x-4 font-sans text-[16px] py-3'>Compare<TfiReload /></li>
<li className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Cart<CiShoppingCart /></li>
</ul>

</div>
</div>


<div className="">
<h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>{item.title}<span className='text-[#26262689] font-sans text-[16px] font-bold'>${item.price}</span></h2>
<p className='text-[#26262669] font-sans text-[16px] font-bold'>Discount - {item.discountPercentage}%</p>
</div>





                   </div>
                   </Link>
                 </div>

   ))}
    
    </>
  )
}

export default Post