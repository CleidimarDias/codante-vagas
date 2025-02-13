// import { Button, buttonVariants } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import astronautaImg from "@/public/astronauta.png"

export default function NotFound() {
  return (
    <main className='text-center py-10 max-w-5xl mx-auto'>
        <h1 className='text-5xl font-bold font-display text-gray-700'>Nada Encontrado Aqui...</h1>

        <Image className='mx-auto mt-10' src={astronautaImg} alt=''  />

        <p className='text-3xl font-light text-gray-500'>Não foi possível encontrar a página solicitada.</p>

        <Link href='/' className={cn(buttonVariants({variant: "default"}), "py-8 px-6 mt-12 text-lg")}>Voltar a Home</Link>

    </main>
  )
}
