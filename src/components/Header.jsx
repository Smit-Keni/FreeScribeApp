import React from 'react'

export default function Header() {
  return (
    <header className='flex item-centre justify-between gap-4 p-4'>
          <a href="/"> <h1 className='font-semibold'>Free<span className='text-blue-400 bold'>
            Scribe</span></h1></a>
          <a href="/" className='flex items-centre gap-2 
          specialBtn px-4 py-2 rounded-lg text-blue-400 text-sm'>
            <p>New</p>
            <i className="fa-solid fa-plus pt-1"></i>
          </a>
    </header>
  )
}
