import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter, BsFacebook} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='w-full bg-white h-[4rem] fixed '>
      <div className="flex items-center drop-shadow-md justify-between mx-auto w-[96%] sm:w-[92%]  h-full md:w-[90%] lg:w-[86%]">
        <div className='flex items-center justify-center'>
          <h2 className='text-2xl text-green-500 font-bold'>Jyson Muchiri</h2>
        </div>
        <ul className='hidden sm:flex flex-row items-center justify-center sm:space-x-6 '>
          <li><a href="" className='font-bold'>Home</a></li>
          <li><a href="" className='font-bold'>About</a></li>
          <li><a href="" className='font-bold'>Projects</a></li>
          <li><a href="" className='font-bold'>Contact Me</a></li>
        </ul>
        <div className='flex flex-row space-x-2'>
          <BsLinkedin className='h-4 w-4'/>
          <BsGithub className='h-4 w-4' />
          <BsFacebook className='h-4 w-4' />
          <BsTwitter className='h-4 w-4' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar