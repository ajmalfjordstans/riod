'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default function Navbar() {
  return (
    <div className='h-[10vh] container mx-auto grid grid-cols-3 md:grid-cols-4 gap-3 items-center lg:px-[10%] text-[14px] lg:text-[16px]'>
      <Image src="/images/logo.png" height={50} width={140} className='h-[40px] w-[100px] ' alt='logo' />
      <div className='hidden md:block col-span-2 '>
        <div className='flex justify-around'>
          <Link href={`/`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Home</p>
          </Link>
          <Link href={`/portfolio`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Portfolio</p>
          </Link>
          <Link href={`/partnership`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Partnership</p>
          </Link>
          <Link href={`/contact-us`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Contact Us</p>
          </Link>
        </div>
      </div>
      <Menu placement="bottom-start md:hidden col-span-2">
        <MenuHandler>
          <Button className='bg-white flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </MenuHandler>
        <MenuList>
          <Link href={`/`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Home</p>
          </Link>
          <Link href={`/portfolio`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Portfolio</p>
          </Link>
          <Link href={`/partnership`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Partnership</p>
          </Link>
          <Link href={`/contact-us`}>
            <p className='px-[10px] py-[5px] hover:bg-blue-gray-100 font-[600] hover:cursor-pointer transition-colors duration-300 cursor-pointer'>Contact Us</p>
          </Link>
        </MenuList>
      </Menu>
      <Link href={`/partnership`}>
        <div className='w-[90px] px-[20px] py-[12px] text-green-500 border-green-500 border-[1px] hover:bg-green-500 hover:text-white mx-auto transition-colors duration-300 cursor-pointer'>
          Blog&apos;s
        </div>
      </Link>
    </div>
  )
}
