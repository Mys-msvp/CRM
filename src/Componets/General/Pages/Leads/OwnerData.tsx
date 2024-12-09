import React, { useEffect, useState } from 'react'
import DataCell from './DataCell'

export default function OwnerData(value: any) {
    const [data, setData] = useState()
  console.log(value.value)
  useEffect(() => {
    setData(value.value)
  }, [value])
  return (
    <div className='grid grid-cols-2 border basis-1/3 rounded-md min-h-40'>
      
      <DataCell name="Owner" value={`${data?.owner?.first_name}, ${data?.owner?.last_name}`}/>
      <DataCell name="DOB" value={data?.owner?.dob}/>
      <DataCell name="Phone" value={data?.owner?.phone}/>
    </div>
  )
}
