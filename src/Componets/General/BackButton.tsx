import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router'

export default function BackButton() {
    const navigate = useNavigate()
    return (
    <Button variant="outline" onClick={() => navigate(-1)}>{"<"}</Button>
  )
}
  
