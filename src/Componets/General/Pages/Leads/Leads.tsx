
import React, { useEffect, useState } from 'react'
import LeadsTable from './LeadsTable'
import Header from '../../Header'
import leadsApi from '@/LeadsApi'

export default function Leads() {
    const [leads, setLeads] = useState<any>([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM0NjQwMTExLCJpYXQiOjE3MzM0MzA1MTEsImp0aSI6IjIwOTFkZjZlODIyMDQ3Yzc4ZmFhNjRhNmU5MGYxNzc5IiwidXNlcl9pZCI6Mn0.a41RPwo2uvDuQNQYlqfUZ1iJrdApcoxGEXmlFKrucbk"
    useEffect(()=>{
      const get = async () => {
        await leadsApi.get('/leads/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
          console.log(res.data.data.results)
          setLeads(res.data.data.results)
        })
        .catch(err => console.log(err))

      }
      get()
    },[])

  return (
    <div className='flex flex-col mx-10 w-full gap-2 mt-5'>
      <Header name="Leads"/>
      <LeadsTable leads={leads}/>
    </div>
    
  )
}
