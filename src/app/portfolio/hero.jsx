'use client'
import RevealRight from '@/components/animations/reveal-right'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='container mx-auto px-[5%] lg:px-[10%] py-[60px] grid grid-cols-1 md:grid-cols-2 '>
      <Image src="/images/component-3.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
      <RevealRight>
        <div className='bg-[#FFE979] p-[50px] flex flex-col justify-center gap-4 my-[30px]'>
          <p className='font-[500] text-[22px]'>Simplifying Product Development</p>
          <p className='font-[600] text-[41px] leading-[37px] '>
            Launching a Product has Never Been Easier
          </p>
          <p className='text-[19px] leading-[28.5px] mt-[30px]'>In the Era of &apos;Hardware is Hard&apos;, RIOD Simplifies Hardware and Product Development.</p>
          <Link href="https://calendly.com/riod/lab?month=2021-09">
            <div className='bg-[black] hover:bg-[#30B583] flex justify-between gap-2 text-white p-[20px] w-[220px] mt-[30px] cursor-pointer group hover:scale-[1.2] transition-all duration-100'>
              <p className='font-[500] text-[16px] leading-[23px] '>Schedule a call</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
          <div className='h-[1px] w-full bg-gray-300 my-[20px]'></div>
        </div>
      </RevealRight>
    </div>
  )
}
