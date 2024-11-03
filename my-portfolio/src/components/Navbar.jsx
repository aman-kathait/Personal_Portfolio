import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap justify-between md:items-center font-sans px-10 pt-6 md:px-20'>
      <span className='text-xl font-bold tracking-wide'>Aman-Kathait</span>
      <ul className='mx-24 py-2 mt-4 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center gap-16 md:bg-transparent md:static md:mx-0 md:flex gap-6 '>
        <li className='hover:text-blue-700 hover:underline'>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar;