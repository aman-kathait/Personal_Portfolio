import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-24 mx:px-24 my-20 '>
      <div className='flex flex-col md:flex-row '>
        <div className='md:w-1/2 mt-12 md:mt-20 space-y-2'> 
          <h1 className='text-4xl font-bold '>Aman Kathait</h1>
          <div className='flex text-2xl space-x-1 md:text-4xl font-bold'>
            <h1>I'm a&nbsp;</h1>
            {/* <span className='text-orange-600 font-bold'>Full Stack Developer</span> */}
            <ReactTyped
              className='text-orange-600 font-bold'
              strings={["Full Stack Developer"]}
              typeSpeed={40}
              backSpeed={40}
              loop={true}
            />
          </div>
          <br />
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet corrupti. Nobis quo architecto sed neque eaque vitae, .</p><br />
          <div className='space-y-2'>
            <h1 className='font-bold text-lg'>Available on</h1>
            <ul className='flex space-x-5'>
              <li><FaLinkedin className='text-2xl cursor-pointer hover:text-blue-800 hover:scale-110 duration-200'/></li>
              <li><FaSquareGithub className='text-2xl cursor-pointer hover:text-blue-800 hover:scale-110 duration-200'/></li>
              <li><RiTwitterXFill className='text-2xl cursor-pointer  hover:text-blue-800 hover:scale-110 duration-200'/></li>
            </ul>
          </div>
        </div>
        <div className='md:w-1/2 ml-52 mt-16'>
          <img src="../../about.jpg" alt="" srcset="" className='w-[400px] h-[400px] rounded-full'/>
         
        </div>
      </div>
      
      
    </div>
    </>
    
  )
}

export default HeroSection;