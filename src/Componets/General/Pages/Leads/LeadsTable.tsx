import React from 'react'
import OwnerCell from './OwnerCell'
import { useNavigate } from 'react-router'

interface LeadsTableProps {
    leads: any
}

export default function LeadsTable({leads}) {
    const navigate = useNavigate()
  return (
    <div className='flex border  rounded-md border-black w-full' >
        <div className='flex flex-col w-full'>
            <div className=' flex flex-row border-b border-black p-2'>
                <div className=' basis-1/6'>Id</div>
            <div className=' basis-1/5'>Assigned To</div>
            <div className=' basis-1/5'>Deal Strength</div>
                <div className=' basis-2/6'>Address</div>
                
                <div className=' basis-1/5'>Owner</div>
                <div className=' basis-1/5'>Zestimate</div>
            </div>
            {leads.map((lead) => (
                <div key={lead.id} className='flex flex-row cursor-pointer hover:bg-gray-200 border-b' onClick={() => navigate(`/Lead/${lead.id}`)}>
                    <div className=' basis-1/6 pl-2'>{lead.id}</div>
                    <div className=' basis-1/5 pl-2'>{lead.assigned_to ?? "NA"}</div>
                    <div className=' basis-1/5 pl-2'>{lead.deal_strength?? "NA"}</div>
                    <div className=' basis-2/6 pl-2'>{lead.property.address ?? "NA"}</div>
                    <div  className=' basis-1/5 pl-2'>
                        <OwnerCell id={lead.owner}/>
                    </div>
                    <div  className=' basis-1/5'>{lead.property.zestimate}</div>
                </div>
            ))}
        </div>
    </div>
  )
}
