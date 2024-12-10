import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import React, { useEffect, useState } from 'react'

interface DataDropDownProps {
    name: string
    values: any
    pKey: string
}

export default function DataDropDown({name,values,pKey}: DataDropDownProps) {
    const [data, setData] = useState([])  
    const [propKey, setPropKey] = useState("")
    useEffect(() => {
        console.log(values) 
        console.log(pKey)
        setData(values)
        setPropKey(pKey)
    },[pKey ,values]
    )
    if (!data) return null
  return (
    <div className='flex flex-row basis-1/2 border-b'>
        <div className='basis-1/2 font-semibold pl-2'>
            {name}
        </div>
        
        <div>
            <Select >
            <SelectTrigger className="p-0 m-0 h-5 px-2">
                <SelectValue className='p-0 m-0' placeholder={propKey ? data[0][propKey] : "Select"} />
            </SelectTrigger>
            <SelectContent >
                {data?.map((item) => (
                    <SelectItem className='py-0' key={item[propKey]} value={item[propKey]}>
                    {item[propKey]}
                    </SelectItem>
                ))}
            </SelectContent>
            </Select>
        </div>
    </div>
  )
}
