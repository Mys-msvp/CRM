import React, { useEffect, useState } from 'react'
import DataCell from './DataCell'
import DataDropDown from './DataDropDown'
import Header from '../../Header'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'


interface Lead{
  owner: Owner
}

interface Owner{
    id: number  
    first_name: string
    last_name:string
    dob: string
    dod: string
    phones:[string]
}

export default function OwnerData(value: any) {
    const [data, setData] = useState<Lead>()
  console.log(value.value)
  useEffect(() => {
    setData(value.value)
  }, [value])

  const onEdit = async ()=>{

  }
  return (
    <div className='basis-1/3'>
      <Header name="Owner" withBackButton={false}/>
    <div className='grid grid-cols-1 border rounded-md '>
      <DataCell name="Owner" value={`${data?.owner?.first_name}, ${data?.owner?.last_name}`}/>
      <DataCell name="DOB" value={data?.owner?.dob}/>
      <DataCell name="DOD" value={data?.owner?.dod}/>
      <DataDropDown name="Phone" values={data?.owner?.phones} pKey="phone_number"/>
    </div>
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Owner</DialogTitle>
          <DialogDescription>
            Make Changes to Owner Click Save to except
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
      
    </Dialog>
    
    </div>
  )
}
