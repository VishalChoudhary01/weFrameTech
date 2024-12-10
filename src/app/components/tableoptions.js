"use-client"
import React from 'react'
import Image from "next/image"

const TableOptions = () => {
  return (
    <div className='absolute left-3 top-3 lg:p-2  z-10'>
      <div className='relative lg:w-[2.604rem] lg:h-[2.604rem]'>
        <Image 
          src="/images/tableColor/table1.png" 
          alt="table1" 
         layout='fill'
         objectFit='contain' 
        />
      </div>
      <div className='relative lg:w-[2.604rem] lg:h-[2.604rem]'>
        <Image 
          src="/images/tableColor/table2.png" 
          alt="table1" 
         layout='fill'
         objectFit='contain' 
        />
      </div>
      <div className='relative lg:w-[2.604rem] lg:h-[2.604rem]'>
        <Image 
          src="/images/tableColor/table3.png" 
          alt="table1" 
         layout='fill'
         objectFit='contain' 
        />
      </div>
      <div className='relative lg:w-[2.604rem] lg:h-[2.604rem]'>
        <Image 
          src="/images/tableColor/table4.png" 
          alt="table1" 
         layout='fill'
         objectFit='contain' 
        />
      </div>
      
    </div>
  )
}

export default TableOptions
