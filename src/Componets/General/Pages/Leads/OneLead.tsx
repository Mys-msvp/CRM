import React from 'react'
import Header from '../../Header'
import { useParams } from 'react-router'

export default function OneLead() {
    const params = useParams()
  return (
    <div className='flex flex-col mx-10 w-full gap-2 mt-5'>
        <Header name="Lead"/>
    </div>
  )
}
