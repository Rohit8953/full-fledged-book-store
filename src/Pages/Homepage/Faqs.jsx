import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react'
import { faqsdata } from '../../Data/data'

const Faqs = () => {
    const [clickedId,setclickedId]=useState();
    const [openclose,setopenclose]=useState(false)

    const oclicked=(id)=>{
          setopenclose(!openclose)
          setclickedId(id);
    }
  return (
    <section className="w-full p-4 md:p-1">
         <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center"> FAQ's </h2>
        <ul className="max-w-4xl mx-auto my-12  shadow-gray-300 rounded-xl shadow-md">
            {
                faqsdata.map((data,index)=>{
                    return (
                        <li key={index}>
                            <div className="">
                                <div onClick={()=>oclicked(data.id)} className="flex items-center justify-between px-4 py-4 border-b font-medium  hover:cursor-pointer">
                                    <span>{data.question}</span>
                                    <IoIosArrowDown className={data.id===clickedId && openclose?"rotate-180":"rotate-0"}/>
                                </div>

                                <div className={data.id===clickedId && openclose?" px-4 h-fit block transition-all py-5 border-b duration-200 ease-linear":"hidden  transition-all duration-200 ease-linear"}>
                                    <p>{data.answer}</p>
                                </div>

                            </div>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}

export default Faqs





