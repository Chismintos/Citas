import Formulario from '@/components/Formulario';
import React from 'react'

const CitasPage = () => {
  return (
    <main className='bg-white	 w-full text-black'>
      <h1 className='text-center font-semibold text-3xl mt-10'>Agendar Cita</h1>
      <section className='m-10'>
      <Formulario />
      </section>
    </main>
    );
}

export default CitasPage;