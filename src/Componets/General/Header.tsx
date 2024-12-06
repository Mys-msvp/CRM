import { Button } from '@/components/ui/button'
import React from 'react'
import BackButton from './BackButton'

export default function Header({name}) {

  return (
    <div className='align-middle text-center text-2xl font-bold flex flex-row'>
        <div>
            <BackButton/>
        </div>
        
        <div>{name}</div>
        
    </div>
  )
}
