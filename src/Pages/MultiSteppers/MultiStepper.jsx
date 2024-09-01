import React, { useEffect, useRef, useState } from 'react'
import { Componentsdata } from '../../Data/data'
import { useNavigate } from 'react-router-dom'
const MultiStepper = () => {
    const [currentState, setcurrentState] = useState(1)
    const [isCompleted, setisCompleted] = useState(false)
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRights: 0,
      });
    const navigate=useNavigate()
    const devref=useRef([]);

    console.log("first",devref)

      useEffect(() => {
        setMargins({
          marginLeft: devref.current[0].offsetWidth/2,
          marginRight: devref.current[Componentsdata.length - 1].offsetWidth/2,
        });
      }, [devref, Componentsdata.length]);


    const handleclick=()=>{
        setcurrentState((prevStep) => {
            if (prevStep === Componentsdata.length){
                setisCompleted(true);
                console.log("currentcalueafe",currentState)
                return prevStep;
            } else {
              return prevStep + 1;
            }
          });
    }

    const handleclickback=()=>{
      setcurrentState((prevState)=>{

        if (prevState===1) return prevState ;
        else{
          return prevState-1;
        }

      })
    }

    console.log("details is there",margins.marginLeft,margins.marginRights);

    const percentagewidth=(()=>{
        return ((currentState-1)/(Componentsdata.length-1))*100; 
    })

    if (currentState===Componentsdata.length && isCompleted) {
      navigate("/addtocart")
    }


  return (
    <div className='bg-slate-50 h-full '>
        <div className='relative flex justify-between items-center box-border pt-20 px-2'>
            {
              Componentsdata.map((data,index)=>{
                return (
                    <div key={index} className='flex flex-col items-center' >
                    <div ref={(ele)=>devref.current[index]=ele} className={`step-number ${currentState===data.id ?"active":""} ${currentState>data.id || isCompleted?"completed":""} `}  >
                        {
                            currentState>data.id || isCompleted?(<span className='text-white'>&#10003;</span>
                            ):(
                                <span>{data.id}</span>
                            )
                        }
                    </div>
                    <div className=''>{data.name}</div>
                </div>
                )
              })
            }

            <div className="progressbar"
            style={{
                width: `calc(100%-${margins.marginLeft + margins.marginRights}px)`,
                paddingLeft:'60px',
                paddingRight:'58px'
            }}
            > 
            
            <div  className='progress' style={{width:`${percentagewidth()}%`}}></div>
            
            </div>
        </div>

        <div className='bg-slate-50'>
            {
                Componentsdata[currentState-1].Component
            }
        </div>

        {!isCompleted&&(
           <div className='flex flex-row justify-between p-10'>
              <button onClick={handleclickback} className='px-6 content-center py-1 bg-blue-700 text-white rounded-md'>
                  Back
              </button>
              <button onClick={handleclick} className='px-6 content-center py-1 bg-blue-700 text-white rounded-md'>
                  {currentState===Componentsdata.length?"Finished":"Next"}
              </button>
           </div>
        )
        }
    </div>
  )
}
export default MultiStepper

// w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center