import './globals.css'
import { Mooli } from 'next/font/google';
import Navbar from '@/components/Navbar'

const mooli = Mooli({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Citas',
  description: 'Aplicacion de citas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={mooli.className}>
        <div className='flex h-[100vh]'>
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  )
}
