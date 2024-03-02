'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='bg-[#B7F598]'>
      <div className="container mx-auto px-[5%] lg:px-[10%] grid grid-cols-1 md:grid-cols-2 py-[60px]">
        <div className=''>
          <p className='font-[600] text-[41px] leading-[37px] mt-[60px]'>
            Over 25000+ products in the market are powered by our Tech.
          </p>
          <p className='text-[19px] leading-[28.5px] mt-[30px]'>Driven by our cutting-edge R&D technology, we’ve successfully integrated our technological prowess into more than 25000+ products, showcasing our significant impact and presence in the market.</p>
          <Link href="https://calendly.com/riod/lab?month=2021-09">
            <div className='bg-[black] hover:bg-[#30B583] flex justify-between gap-2 text-white p-[20px] w-[290px] mt-[30px] cursor-pointer group hover:scale-[1.2] transition-all duration-100'>
              <p className='font-[500] text-[16px] leading-[23px] '>Schedule a meeting</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>
        </div>
        <Image src="/images/component-2.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />

      </div>
    </div>
  )
}
