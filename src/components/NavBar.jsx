import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-slate-900 fixed px-4'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Saul</h1>
      </div>
    </div>
  )
}

export default NavBar
