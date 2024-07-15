import React, { useContext, useEffect, useState } from 'react'
import { apiData } from '../ContextApi'
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/productSlice';

const Post = ({allData,categorySearchFilter,multiList}) => {

  

  

  let [filterShow, setFilterShow] = useState([])
  let [cateShow, setCateShow] = useState(true)
  let dispatch = useDispatch()

  useEffect(()=>{

    let filterAmi = categorySearchFilter.slice(0,5)
    setFilterShow(filterAmi)


  },[categorySearchFilter])

    let handleShow = () =>{
      setFilterShow(categorySearchFilter)
      setCateShow(false)
    }

    let handleHide = ()=>{
      let filterAmi = categorySearchFilter.slice(0,5)

      setFilterShow(filterAmi)
      setCateShow(true)
    }

    let handlePCart = (item) =>{

      dispatch(addToCart({...item, qun: 1 }))

    }
  
  return (
    <>

    {categorySearchFilter.length > 0 ? 
    
        <div className="">

<div className="flex flex-wrap">
  {


filterShow.map((item)=>(
                         
                            
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

)) }
</div>

{cateShow ? categorySearchFilter.length > 5 &&


<button onClick={handleShow} className='py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer ms-4 duration-300 ease-in-out'>Show All</button>

      :

      <button onClick={handleHide} className='py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer ms-4 duration-300 ease-in-out'>Hide</button>

}




        </div>


    :
    

    <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap"}`}>

   { allData.map((item)=>(


      

<div className='w-full lg:w-[32%] py-5'>

<div className="">

<div className="relative group overflow-hidden cursor-pointer">

<Link to={`/product/${item.id}`}>

<img src={item.thumbnail} className='h-[376px] w-[376px]' alt="sss" />
</Link>
        <div className="">
        <div className="text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out">

<ul className='pr-5'>
<li className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Wish List<CiHeart /></li>
<li className='flex justify-end items-center gap-x-4 font-sans text-[16px] py-3'>Compare<TfiReload /></li>
<li onClick={()=>handlePCart(item)} className='flex justify-end items-center gap-x-4 font-sans text-[16px]'>Add to Cart<CiShoppingCart /></li>
</ul>

</div>
        </div>
</div>


<div className="">
<h2 className='flex justify-between pt-[25px] pb-[14px] text-[#262626] font-sans text-[16px] font-bold'>{item.title}<span className='text-[#26262689] font-sans text-[16px] font-bold'>${item.price}</span></h2>
<p className='text-[#26262669] font-sans text-[16px] font-bold'>Discount - {item.discountPercentage}%</p>
</div>





</div>

</div>



     
                         
                            


))}

</div>

    
    }



    
    </>
  )
}

export default Post