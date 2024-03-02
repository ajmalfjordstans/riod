'use client'

import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='h-[10vh] container mx-auto grid grid-cols-4 items-center px-[10%]'>
      <Image src="/images/logo.png" height={50} width={140} className='h-[40px] w-[100px] ' alt='logo' />
      <div className='col-span-2 flex justify-around'>
        <p className='px-[10px] py-[5px] hover:bg-slate-200 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Home</p>
        <p className='px-[10px] py-[5px] hover:bg-slate-200 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Portfolio</p>
        <p className='px-[10px] py-[5px] hover:bg-slate-200 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Partnership</p>
        <p className='px-[10px] py-[5px] hover:bg-slate-200 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Contact Us</p>
      </div>
      <div className='px-[20px] py-[12px] text-green-500 border-green-500 border-[1px] hover:bg-green-500 hover:text-white mx-auto transition-colors duration-300 cursor-pointer'>
        Blog&apos;s
      </div>
    </div>
  )
}
