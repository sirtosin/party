import React from 'react'

export const Button = ({title, onClick,color}) => {
  return (
    <button 
    className='capitalize rounded py-2 px-4 w-max hover:animate-bounce ease-in-out duration-150 transition-all hover:text-white outline-none border-none shadow-sm'
    style={{
        background:color
    }}
    type='submit'
    onClick={onClick}
    >{title}</button>
  )
}
