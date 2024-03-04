'use client'
import Reveal from '@/components/animations/reveal';
import RevealRight from '@/components/animations/reveal-right';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Typewriter from 'typewriter-effect';

export default function Hero() {

  return (
    <div className='container mx-auto px-[5%] lg:px-[6%] pt-[80px] pb-[100px] grid md:grid-cols-2'>
      <div className=''>
        <div className='font-[600] text-[41px] leading-[48px] mt-[60px]'>
          Explore RIOD <br />
          <Typewriter
            options={{
              strings: ['Product Manufacturing', 'Research and Development', 'Product Lifecycle Support', 'Product Engineering', 'Cloud Development'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className='text-[19px] leading-[28.5px] mt-[30px]'>Turn your ideas into reality: We are a team of experienced engineers who can help you bring your product ideas to life.</p>
        <Reveal>
          <Link href="https://calendly.com/riod/lab?month=2021-09">
            <div className='bg-[#42C460] hover:bg-black flex justify-between text-white p-[20px] w-[290px] mt-[30px] cursor-pointer'>
              <p className='font-[500] text-[23px] leading-[23px]'>Schedule a meeting</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>

          <div className='h-[1px] w-full bg-gray-300 my-[20px]'></div>

          <div className='flex flex-col md:flex-row gap-5 justify-evenly'>
            <div className='flex flex-col items-center'>
              <p className='font-[600] text-[28px] leading-[28px]'>25,000+</p>
              <p className='text-[15px] leading-[37.5px]'>Products in the market</p>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-[600] text-[28px] leading-[28px]'>40+</p>
              <p className='text-[15px] leading-[37.5px]'>Customers</p>
            </div>
          </div>
        </Reveal>
      </div>
      <RevealRight>
        <Image src="/images/components.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
      </RevealRight>

    </div>
  )
}
