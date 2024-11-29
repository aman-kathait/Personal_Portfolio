import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <>
    <div className='max-w-screen-2xl mt-20 container mx-auto md:px-16 mx:px-20 md:my-20'>
      <div className='flex max-w-screen flex-col md:flex-row  mx-4 md:mx-0 '>
        <div className='md:w-2/3 mt-12 md:mt-20 md:space-y-2 order-2 md:order-1'> 
        <h1 className='text-2xl md:text-5xl font-bold '>Hi, I am</h1>
          <h1 className='text-2xl md:text-5xl font-bold '>Aman Kathait</h1>
          <div className='flex text-lg space-x-1 md:text-4xl font-bold'>
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
          <p className='text-sm text-justify md:text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, amet corrupti. Nobis quo architecto sed neque eaque vitae, .</p><br />
          <div className='space-y-2'>
            <h1 className='font-semibold md:text-2xl'>Available on</h1>
            <ul className='flex space-x-5'>
              <li><FaLinkedin className='text-xl md:text-3xl cursor-pointer hover:text-blue-800 hover:scale-110 duration-200'/></li>
              <li><FaSquareGithub className='text-xl md:text-3xl cursor-pointer hover:text-blue-800 hover:scale-110 duration-200'/></li>
              <li><RiTwitterXFill className='text-xl md:text-3xl cursor-pointer  hover:text-blue-800 hover:scale-110 duration-200'/></li>
            </ul>
          </div>
          <div className='space-y-2 '>
            <button className='text-sm flex mt-5 p-1 space-x-8 border-solid border-2 border-orange-400 md:p-2 rounded-lg hover:bg-orange-400 hover:text-white duration-300 font-semibold'>Download Cv</button>
          </div>
        </div>
        <div className='md:w-1/2  md:ml-36 md:mt-16 order-1 '>
          <img src="../../about.jpg" alt="" srcset="" className=' md:w-[400px] md:h-[400px] rounded-full animate-profile-animate'/>
         
        </div>
      </div>
      
      
    </div>
    </>
    
  )
}

export default HeroSection;