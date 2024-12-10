import leads from '@/LeadsApi'
import { useEffect, useState } from 'react'
import Header from '../../Header'
import DataCell from './DataCell'

interface MSVDataProps {
    value: any
}
interface Data{
    stage: string
    deal_strength: string
    assigned_to: string
}

export default function MSVData({value}: MSVDataProps) {
    const [data, setData] = useState<Data>()

  useEffect(() => {
    setData(value)
  }, [value])
  useEffect (()=>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NjQwMTExLCJpYXQiOjE3MzM0MzA1MTEsImp0aSI6IjIwOTFkZjZlODIyMDQ3Yzc4ZmFhNjRhNmU5MGYxNzc5IiwidXNlcl9pZCI6Mn0.a41RPwo2uvDuQNQYlqfUZ1iJrdApcoxGEXmlFKrucbk"
    const getUsers = async () =>{
        await leads.get("/users").then(res => console.log(res.data))
    }
    getUsers()
  },[])


  return (
    <div className='basis-1/3'>
        <Header name="MSV" withBackButton={false}/>
        <div className='grid grid-cols-1 border rounded-md '>
            <DataCell name="Status" value={data?.stage ?? "NA"}/>
            <DataCell name="Deal Strength" value={data?.deal_strength}/>
            <DataCell name="Assigned To" value={data?.assigned_to}/>
            <DataCell name="Closer" value={"need to work"}/>
        </div>
        
    </div>
  )
}
