import Link from 'next/link'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import MenuIcon from '@mui/icons-material/Menu';
import { Popover } from '@mui/material';

const Navbar = () => {
  return (
    <nav className=' flex bg-violet-500 p-7 w-[17%]'>
      <header>
        <Popover>
          dsfasdf

        </Popover>


      </header>
       

        <div className='hidden sm:flex'>
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

        </div>
        
    </nav>
    
  )
}

export default Navbar