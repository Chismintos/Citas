
import React from 'react';
import { Mooli } from 'next/font/google';

const mooli = Mooli({ subsets: ['latin'], weight: '400' });

export const HomePage = () => {
  return (
    <main className='bg-white	 w-full text-black'>
      <h1 className='text-center font-semibold text-3xl mt-8'>Citas Medicas</h1>
    </main>
  )
}
export default HomePage;