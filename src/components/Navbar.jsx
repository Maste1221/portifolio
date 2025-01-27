import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div>
        <div className='bg-black  text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color '>Mastewal</h1>
            <ul className='hidden md:flex '>
                <li className='p-5'><a href='#about'>About</a></li>
                <li className='p-5'><a href='#work'>work</a></li>
                <li className='p-5'><a href='#contact'>contact</a></li>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 

            </div>
            <div className={nav ?' z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-300 ' :
        'fixed left-[-100%]' }>
            <h1 className='text-3xl priamry-color m-4 '>Mastewal</h1>
            <ul className='p-8 text-2xl'>
                <li className='p-2'><a href='#about'>about</a></li>
                <li className='p-2'><a href='#work'>work</a></li>
                <li className='p-2'><a href='#contact'>contact</a></li>

            </ul>

            </div>

        </div>
    </div>
  )
}

export default Navbar