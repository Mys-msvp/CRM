import { useEffect, useState } from 'react'
import DataCell from './DataCell'
import Header from '../../Header'


export default function HomeData(value: any) {
  const [data, setData] = useState()
  console.log(value.value)
  useEffect(() => {
    setData(value.value)
  }, [value])
 
  
  return (
    <div className='basis-2/3'>
      <Header name="Property" withBackButton={false}/>
      <div className='grid grid-cols-2 border rounded-md'>
        <DataCell name="Address" value={data?.property?.address}/>
        <DataCell name="Beds" value={data?.property?.beds}/>
        <DataCell name="Bathrooms" value={data?.property?.baths}/>
        <DataCell name="Zestimate" value={data?.property?.zestimate}/>
        <DataCell name="Equity" value={data?.property?.equity}/>
      </div>
    </div>
  )
}
