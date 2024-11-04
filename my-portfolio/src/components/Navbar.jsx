import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";


const Navbar = () => {
  const [menu,setMenu]=useState(false);
  const navItems=[
    {id:1,text:"About Me"},{id:2,text:"Skills"},{id:3,text:"Projects"},{id:4,text:"Education"},{id:5,text:"Contact"}
  ]
  return (
    <nav className='max-w-screen-2xl container mx-auto h-16  px-8 mx:px-2 shadow-md fixed'>
      <div className='flex justify-between h-16 items-center '>
      <div className='flex '> 
        <span className='text-black font-semibold text-xl'>&lt;Aman </span>
        <span className='text-orange-600 px-1 font-semibold text-xl'> Kathait/&gt;</span>
      </div>

      <div>
      <ul className='hidden md:flex space-x-8 '>
        {
          navItems.map((item)=>(
            <li key={item.id} className='hover:text-orange-600 cursor-pointer hover:scale-105 duration-200'>{item.text}</li>
          ))
        }
      </ul>
      <div onClick={()=>setMenu(!menu)} className='md:hidden'>
        {menu?<FaWindowClose size={21}/>:<TiThMenu size={21}/>}
      </div>
      </div>
      {/* <div className='hidden md:flex'>
        <button className='m-2space-x-8 border-solid border-2 border-orange-400 p-2 rounded-lg hover:bg-orange-400 hover:text-white duration-300'>Download Cv</button>
      </div> */}
      </div>

      {/* {Mobile device} */}
      {menu && (
        <div>
        <ul className='md:hidden flex flex-col h-60 space-y-4 justify-center items-center bg-opacity-25'>
        {
          navItems.map((item)=>(
          <li key={item.id} className='hover:text-orange-600  hover:scale-105 duration-200 cursor-pointer'>{item.text}</li>
          ))

        }
        </ul>
        </div>
      )}
      
    </nav>
  )
}

export default Navbar;