import { Button } from '@/components/ui/button'
import React from 'react'
import BackButton from './BackButton'

export default function Header({name,withBackButton=true}) {
  if (!withBackButton) return (
    <div className='align-middle text-center text-2xl '>
        {name}
    </div>
  )
  return (
    <div className='align-middle text-center text-2xl flex flex-row'>
        <div className='basis-1/6'>
            <BackButton/>
        </div>
        
        <div className='basis-5/6'>{name}</div>
        
    </div>
  )
}
