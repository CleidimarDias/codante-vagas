import { Github, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-black text-white '>
      <div className='max-w-5xl flex justify-between py-10  mx-auto'>
        <div className='max-w-sm'>
          <Image src='/logo.png' alt='' width={250} height={250} />
          <p className='text-sm font-extralight mt-2'>
            O CodanteVagas conecta candidatos a empregos ideais,
            oferecendo funcionalidades intuitivas
            para busca e gerenciamento de vagas.
          </p>
        </div>
        <div className='gap-3 flex'>
          <Instagram className='cursor-pointer hover:text-blue-400 transition-colors' />
          <Github className='cursor-pointer hover:text-blue-400 transition-colors' />
          <Mail className='cursor-pointer hover:text-blue-400 transition-colors' />
        </div>
      </div>


    </footer>
  )
}
