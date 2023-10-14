'use client'

import Link from 'next/link'
import React from 'react'
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react';
import { PopoverButtonProps } from '@headlessui/react';

import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { BiCalendarEdit } from "react-icons/bi";
import {LuBadgeInfo} from 'react-icons/lu'

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <nav>
      <header>
    
      {/* Responsive Navbar  */}  
      <Popover className=' hidden sm:flex bg-violet-300 h-14 text-lg font-bold justify-evenly h-{20}  '>

          <div className='md'>
            <img  src="https://cdn-icons-png.flaticon.com/512/3030/3030856.png" 
                  alt="perrito bonito" 
                  width="50" height="50"
                  />
          </div>

          {/* Primer div (enlaces) */}
          <div className='hidden  space-x-10 items-center font-bold sm:flex md:space-x-20 lg:space-x-28 '>
            <Link href={'/'}>Inicio</Link>
            <Link href={'/citas'}>Agendar cita</Link>
            <Link href={'/acercade'}>Acerca de</Link>
          </div>

          {/* Segundo div (Login | Signin) */}
          <div className='hidden md:flex '>
            <button className='border-dashed'>Sign in | Sign up</button>
          </div>
          
      </Popover>
      

      {/*Responsive Menu*/}

      <Popover className='sm:hidden h-14 font-bold bg-violet-300   '>
        <Popover.Button className='text-3xl items-center p-3 '>
          <AiOutlineMenu />
        </Popover.Button>

        <Popover.Overlay className="fixed inset-0 " />

        <Popover.Panel className="z-10 absolute top-16 w-40 left-4 bg-violet-500 p-4 rounded-md shadow-2xl  ">
          <div className='flex flex-col gap-2 text-white'>
            <div className='flex items-center'>
              <AiFillHome className='text-2xl mr-2' />
              <Link href='/'>Inicio</Link>
            </div>
            <div className='flex items-center'>
              <BiCalendarEdit className='text-2xl mr-2' />
              <Link href='/citas'>Agendar cita</Link>
            </div>
            <div className='flex items-center'>
              <LuBadgeInfo className='text-2xl mr-2' />
              <Link href='/acercade'>Acerca de</Link>
            </div>
          </div>
        </Popover.Panel>
      </Popover>


     
   </header>
    </nav>
  )
}

export default Navbar


{/* <div className='hidden sm:flex'>
          <ul className='text-white space-y-4 mt-4'>
            <li className='space-x-3 flex items-center'>
              <HomeIcon />
              <Link href={'/'}>Inicio</Link></li>
              
            <li className='space-x-3 flex items-center'>
              <EditCalendarIcon/>
              <Link href={'/citas'}>Agendar cita</Link>
            </li>
            <li className='space-x-3 flex items-center'>
              <InfoIcon />
              <Link href={'/acercade'}>Acerca de</Link>
            </li>
          </ul>

        </div> */}