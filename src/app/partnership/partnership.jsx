'use client'

import Reveal from '@/components/animations/reveal'
import RevealRight from '@/components/animations/reveal-right'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const servicesData = [
  {
    img: "/images/connect-onboard.png",
    title: 'Connect & Onboard',
    desc: 'Explore our business partner guide and understand the benefits and terms of the program'
  },
  {
    img: "/images/partner-onboarding.png",
    title: 'Partner Onboarding',
    desc: 'If the partner program suits you, become our business partner and join our network.'
  },
  {
    img: "/images/explore-solutions.png",
    title: 'Explore Solutions',
    desc: 'Dive into our product engineering models and Real-world case studies from partner portal.'
  },
  {
    img: "/images/customer-success.png",
    title: 'Customer Success',
    desc: 'Utilize your connections and offer engineering solutions to your network.'
  },
]

export default function Partnership() {
  return (
    <div className='container mx-auto px-[5%] lg:px-[10%] py-[60px] flex flex-col justify-center'>
      <div className='text-center'>
        <p className='font-[600]  text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] lg:leading-[46px]'>Become Our Partner</p>
        <p className='text-[14px] lg:text-[17px] leading-[25.5px] mt-[15px]'>At RIOD, we believe that partnerships are the cornerstone of success. We invite you to become our valued business partner and embark on a journey towards excellence and innovation. Together, we will reshape the future and create opportunities for growth and prosperity.</p>
      </div>
      <div className='w-full my-[30px] flex md:flex-row flex-col justify-between'>
        <Reveal>
          <div className='bg-[#FFE979] w-[358px] rounded-sm flex flex-col gap-5 p-[20px] justify-center items-center '>
            <div className='border-[2px] border-white rounded-full p-[13px]'>
              <Image src='/icons/peace-hand.svg' alt='peace' height={80} width={80} className='w-6 h-6' />
            </div>
            <p className='font-[600]  text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] lg:leading-[46px]'>#Best Margin</p>
            <p className='text-[14px] lg:text-[17px] leading-[25.5px] mt-[15px] text-center'>Our commitment to your success starts with Industry-best margins for our business partners.
              Explore our partnership program.</p>
            <Link href={'/partnership'}>
              <div className='bg-white p-[15px]'>
                <p className='font-[500]'>Download Business partner Guide</p>
              </div>
            </Link>
          </div>
        </Reveal>
        <div className='md:w-[678px] bg-[#FAFBFC] flex flex-col p-[40px]'>
          <p className='font-[600] text-[32px] leading-[38px] lg:leading-[46px]'>Business Associate Program</p>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-around'>
              <p>Are you a seasoned professional in business partnerships and account management, with a good network?</p>
              <p>Do you excel in guiding clients toward optimal partners within their industry? Our opportunity allows business partners to earn industry best revenue margins.</p>
            </div>
            <Image src="/images/business-program.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
          </div>
          <p>We are actively seeking global business partnerships.</p>
        </div>
      </div>
      <RevealRight>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[30px]'>
          {servicesData.map((data, id) => {
            return (
              <div className='flex flex-col items-center gap-4' key={id}>
                <Image src={data.img} height={187} width={290} alt='services' className='object-cover h-auto w-[full]' />
                <p className='font-[600] text-[20px] leading-[24px]'>{data.title}</p>
                <p className='text-[14px] leading-[22.5px] text-center'>{data.desc}</p>
              </div>
            )
          })}
        </div>
      </RevealRight>
      <div className='w-full my-[30px] flex flex-col md:flex-row justify-between'>
        <div className='md:w-[678px] bg-[#FAFBFC] flex flex-col p-[40px]'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='flex flex-col justify-around'>
              <p className='font-[600] text-[32px]'>Join us!</p>
              <p>We believe that partnerships are the cornerstone of success. We invite you to become our valued business partner and embark on a journey towards excellence and innovation. Together, we will reshape the future and create opportunities for growth.</p>
            </div>
            <Image src="/images/partnership.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
          </div>
        </div>
        <div className='bg-[#FFE979] md:w-[358px] rounded-sm flex flex-col gap-5 p-[20px] justify-center items-center '>
          <div className='flex flex-col justify-center items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-[58px] w-[58px]'>
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
            </svg>
            <p className='font-[600] '>Business partner portal.</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-[58px] w-[58px]'>
              <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
            </svg>
            <p className='font-[600] '>Transparent Approach.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
