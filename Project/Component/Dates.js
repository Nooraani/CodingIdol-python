import React, { useEffect, useState } from 'react'

const Dates = () => {
    const [dateTime,setDateTime]=useState("")
   
    setTimeout(()=>{
        const Date_Data=new Date();
        const Formate_Date=Date_Data.toLocaleDateString()
        setDateTime(Formate_Date)
    },1000)
    const randomInoice=Math.floor(Math.random(100+100)*10000)
  return (
    <>
     <article className='my-5 flex items-end justify-end '>
                    <ul>
                        <li><span className='font-bold'>Invoice No :</span>{randomInoice}</li>
                        <li><span  className='font-bold'>Invoice Date:</span>{dateTime}</li>
                        <li><span   className='font-bold'>Due Date :</span>{dateTime}</li>

                    </ul>
                 </article> 
    </>
  )
}

export default Dates
