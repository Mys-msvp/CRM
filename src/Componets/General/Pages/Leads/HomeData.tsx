import { useEffect, useState } from 'react'
import DataCell from './DataCell'


export default function HomeData(value: any) {
  const [data, setData] = useState()
  console.log(value.value)
  useEffect(() => {
    setData(value.value)
  }, [value])
 
  
  return (
    <div className='grid grid-cols-2 border basis-2/3 rounded-md min-h-40'>
      <DataCell name="Address" value={data?.property?.address}/>
      <DataCell name="Beds" value={data?.property?.beds}/>
      <DataCell name="Bathrooms" value={data?.property?.baths}/>
      <DataCell name="Zestimate" value={data?.property?.zestimate}/>
      <DataCell name="Equity" value={data?.property?.equity}/>
    </div>
  )
}
