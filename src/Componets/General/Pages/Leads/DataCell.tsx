import React, { useEffect } from 'react'

export default function DataCell({name,value}) {
 
  return (
    <div className=' flex flex-row basis-1/2 px-2 border-b'>
        <div className='basis-1/2 font-semibold'>
            {`${name}:`}
        </div>
        <div className='basis-1/2'>
            {value}
        </div>
        
    </div>
  )
}
