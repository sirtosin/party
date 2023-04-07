import React from 'react'
import { loading } from '../asset'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'> 
        <img src={loading} className='h-7' alt="" />
    </div>
  )
}
