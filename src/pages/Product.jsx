import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex';
import { apiData } from '../components/ContextApi';
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";



const Product = () => {
    let data = useContext(apiData)
    let [currentPage, setCurrentPage] = useState(1)
    let [perPage, setPerPage] = useState(6)
    let [catshow,setCatShow] = useState(false)
    let [category, setcategory] = useState([])
    let [categorySearchFilter, setCategorySearchFilter] = useState([])
    let [multiList, setMultiList] = useState('')


  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage

  let allData = data.slice(firstPage, lastPage)
  let pageNumber = []
  
  for(let i=0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++){
    pageNumber.push(i)

  }

 let paginate = (pageNumber) =>{

    setCurrentPage(pageNumber + 1);

 }
 let next = () =>{
    if (currentPage < pageNumber.length) {
        setCurrentPage((state) => state + 1) 
    }
  
 }
 let prev = () =>{
    if(currentPage > 1){
        setCurrentPage((state) => state -1)
    }
}

useEffect(()=>{

    setcategory([...new Set(data.map((item)=>item.category))])

},[data])


let handleSubcate = (citem) =>{
  let categoryFilter = data.filter((item)=> item.category == citem)

  setCategorySearchFilter(categoryFilter)
  
}


let handleList = () =>{
  setMultiList("activeList");
}



    
  return (
    <>
    <section>
        <Container>
            <div className='lg:flex'>
                <div className="lg:flex">
                    


                <div className="lg:w-[20%] w-full ">
            <div className="mt-16 pl-5">
              <h3 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[18px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Category <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
              {catshow &&
                <ul className='lg:h-[400px] h-[100px] w-[200px] overflow-y-scroll'>
                  {category.map((item)=>(
                    <li onClick={()=>handleSubcate(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>{item}</li>
                  ))}

                    
                    
                  
                </ul>
              }
            </div>
            <div className="mt-16 pl-5">
              <h3 className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Price</h3>
              
                {/* <ul>
                    <li onClick={()=>handlePrice({low:0, high:10})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>Price $0- $10</li>
                    <li onClick={()=>handlePrice({low:10, high:20})} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>Price $10- $20</li>
             
                </ul>
               */}
            </div>
          </div>




                </div>



                <div className="lg:w-[80%] w-full">

                <div className="lg:flex justify-between pt-[10px] mt-[50px]">
                <div className="flex gap-x-5 lg:justify-normal justify-center lg:w-[30%] w-100%">
                  <div onClick={()=>setMultiList("")} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center
                   items-center text-[#737373] ${multiList == "activeList" ? "bg-white text-white" : "bg-black text-white"} border-2  border-[#737373]
                  text-[20px] `}><PiSquaresFourFill /></div>
                  <div onClick={handleList} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] 
                    flex justify-center items-center text-[#737373] border-2  border-[#737373] text-[20px]`}><GrSort /></div>
                </div>
                <div className="flex lg:justify-end justify-between lg:gap-x-10 lg:w-[70%] w-[100%] pt-[20px] lg:pt-0">
                  <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Sort by : </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[10px] py-[5px] text-[16px] font-sans 
                    text-[#767676] font-normal'>
                      <option value="">Featured</option>
                      <option value="">Price</option>
                      <option value="">Category</option>
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] 
                    text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="">36</option>
                      <option value="">30</option>
                      <option value="">24</option>
                    </select>
                  </div>
                </div>
              </div>

                    

                        <Post allData={allData} categorySearchFilter={categorySearchFilter} multiList={multiList}/>
             

  
                        
                    
                    <div className="text-end">
                        <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev}/>
                    </div>




                </div>

               
    
               
          

            </div>
        </Container>
    </section>
    
    </>
  )
}

export default Product