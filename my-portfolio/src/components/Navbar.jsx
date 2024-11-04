import React from 'react'
const Navbar = () => {
  return (
    <nav className='max-w-screen-2xl container mx-auto  px-24 mx:px-2 shadow-md'>
      <div className='flex justify-between h-16 items-center '>
      <div className='flex '> 
        <span className='text-black font-semibold text-xl'>&lt;Aman </span>
        <span className='text-orange-600 px-1 font-semibold text-xl'> Kathait/&gt;</span>
      </div>

      <div>
      <ul className='hidden md:flex space-x-8 '>
        <li className='hover:text-orange-600 hover:underline cursor-pointer'>About Me</li>
        <li className='hover:text-orange-600 hover:underline cursor-pointer'>Skills</li>
        <li className='hover:text-orange-600 hover:underline cursor-pointer'>Projects</li>
        <li className='hover:text-orange-600 hover:underline cursor-pointer'>Education</li>
        <li className='hover:text-orange-600 hover:underline cursor-pointer'>Contact</li>
      </ul>
      </div>
      <div className='hidden md:flex'>
        <button className='m-2space-x-8 border-solid border-2 border-orange-400 p-2 rounded-lg hover:bg-orange-400 hover:text-white duration-300'>Download Cv</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;