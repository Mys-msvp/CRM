import React from 'react'
import OwnerCell from './OwnerCell'
import { useNavigate } from 'react-router'

interface LeadsTableProps {
    leads: any
}

export default function LeadsTable({leads}) {
    const navigate = useNavigate()
  return (
    <div className='flex border rounded-md border-black w-full' >
        <div className='flex flex-col w-full'>
            <div className=' flex flex-row border-b border-black p-2'>
                <div className=' basis-1/5'>Address</div>
                <div className=' basis-1/5'>City</div>
                <div className=' basis-1/5'>State</div>
                <div className=' basis-1/5'>Owner</div>
                <div className=' basis-1/5'>Zestimate</div>
            </div>
            {leads.map((lead) => (
                <div key={lead.id} className='flex flex-row cursor-pointer hover:bg-gray-200' onClick={() => navigate(`/Lead/${lead.id}`)}>
                    <div className=' basis-1/5'>{lead.address}</div>
                    <div  className=' basis-1/5'>{lead.city}</div>
                    <div  className=' basis-1/5'>{lead.state}</div>
                    <div  className=' basis-1/5'>
                        <OwnerCell id={lead.owner}/>
                    </div>
                    <div  className=' basis-1/5'>{lead.zestimate}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
