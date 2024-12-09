import leadsApi from '@/LeadsApi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../../Header'
import HomeData from './HomeData'
import OwnerData from './OwnerData'
import MSVData from './MSVData'
import Map from './Map'

export default function OneLead() {
    const params = useParams()
    const [data, setData] = useState()
    
    useEffect(() => {
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NjQwMTExLCJpYXQiOjE3MzM0MzA1MTEsImp0aSI6IjIwOTFkZjZlODIyMDQ3Yzc4ZmFhNjRhNmU5MGYxNzc5IiwidXNlcl9pZCI6Mn0.a41RPwo2uvDuQNQYlqfUZ1iJrdApcoxGEXmlFKrucbk"

        const getData = async () => {
            await leadsApi.get(`leads/${params.id}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }).then(response => {
                console.log(response.data)
                setData(response.data)
            })
            
            
           
        }
        getData()
    }, [])

  return (
    <div className='flex flex-col mx-10 w-full gap-2 mt-5'>
        <Header name="Lead"/>
        <div className='flex flex-row gap-2  justify-between'>
          <OwnerData value={data}/>
          <HomeData value={data}/>
          </div>
        <div className='flex flex-row gap-2 justify-between'>
          <MSVData value={data}/>
          <Map/>
        </div>
        
    </div>
  )
}
