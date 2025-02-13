import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

export default function Navbar() {
  return (
    <nav className='flex justify-between max-w-5xl py-6 mx-auto w-full'>
        <Image src='/logo.svg' alt='' height={300} width={300} />
        <ul className='flex gap-4 items-center'> 
            <Link href='/' className={cn(buttonVariants({variant: 'link'}))}>Home</Link>
            <Link href='/sobre' className={cn(buttonVariants({variant: 'link'}))}>Sobre</Link>
            <Link href='/vagas' className={cn(buttonVariants({variant: 'link'}))}>Vagas</Link>
            <Link href='/vagas/cadastrar-vagas' className={cn(buttonVariants({variant: 'link'}))}>Cadastrar Vagas</Link>
        </ul>
    </nav>
  )
}
