import {useState} from 'react'
import {HiX, HiOutlineMenuAlt3, HiMenuAlt2, HiMenu, HiMenuAlt3} from 'react-icons/hi'
import {BsLinkedin, BsGithub, BsTwitter, BsFacebook} from 'react-icons/bs'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full h-[4rem] fixed drop-shadow-md z-50'>
      <div className="flex items-center justify-between mx-auto w-[96%] sm:w-[92%]  h-full md:w-[90%] lg:w-[86%]">
        <div className='flex items-center justify-center'>
          <h2 className='text-2xl text-[#646cff] font-bold'>Jyson Muchiri</h2>
        </div>
        <ul className='hidden sm:flex flex-row items-center justify-center sm:space-x-6 '>
          <li><a href="" className='font-bold'>Home</a></li>
          <li><a href="" className='font-bold'>About</a></li>
          <li><a href="" className='font-bold'>Projects</a></li>
          <li><a href="" className='font-bold'>Contact Me</a></li>
        </ul> 
        <div className='hidden sm:flex flex-row space-x-2 sm:space-x-4 '>
          <BsLinkedin className='h-4 w-4'/>
          <BsGithub className='h-4 w-4' />
          <BsFacebook className='h-4 w-4' />
          <BsTwitter className='h-4 w-4' />
        </div>

        {/* Collapsable manu bar */}

        <div className='sm:hidden flex items-center justify-center h-full'>
          <HiMenu className='h-[50%] w-[40px]'/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar