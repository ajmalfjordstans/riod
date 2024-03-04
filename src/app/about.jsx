'use client'

import Reveal from '@/components/animations/reveal'
import Image from 'next/image'
import React from 'react'


export const Card = ({ data }) => {
  return (
    <div className={`bg-[${data.bg}] h-[540px] px-[15px] py-[30px] text-[16px] leading-[24px] flex flex-col justify-around items-center rounded-md`}>
      <p className='text-[18px] lg:text-[22px] font-[500] leading-[22px]'>{data.category}</p>
      <p className='text-[26px] lg:text-[33px] font-[600] leading-[33px] text-center'>{data.title}</p>
      <Image src={data.img} height={1200} width={750} alt='about' className='py-[10px] w-[240px] h-[230px]' />
      <div className='flex flex-wrap justify-center gap-2'>
        {data.tags.map((tag, id) => {
          return (
            <div key={id} className={`capitalize bg-[${data.tagColor}] text-white p-[10px] rounded-md font-[600]`}>{tag}</div>
          )
        })}
      </div>
    </div>
  )
}

const AboutData = [
  {
    category: 'Prototyping',
    title: 'Research & Development',
    img: '/images/prototyping.png',
    tags: ['research study', 'prototyping', 'modelling', 'development'],
    tagColor: '#DFBC0D',
    bg: '#FFE979'
  },
  {
    category: 'Manufacturing',
    title: 'Product Manufacturing',
    img: '/images/manufacturing.png',
    tags: ['end to end manufacturing', 'moulding', 'testing', 'QC & packing'],
    tagColor: '#6BCF39',
    bg: '#B7F598'
  },
  {
    category: 'Support',
    title: 'Product Lifecycle Support',
    img: '/images/support.png',
    tags: ['obselete support', 'certification', 'technical support', 'customer support'],
    tagColor: '#1698C0',
    bg: '#7ED5F0'
  },
]

export default function About() {
  return (
    <Reveal>
      <div className='container mx-auto px-[5%] lg:px-[10%] py-[40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* {AboutData.map((data, id) => {
        return (
          <Card data={data} key={id} />
        )
      })} */}

        <div className={`bg-[#FFE979] h-[540px] px-[12px] py-[30px] text-[16px] leading-[24px] flex flex-col justify-around items-center rounded-md`}>
          <p className='text-[18px] lg:text-[22px] font-[500] leading-[22px]'>Prototyping</p>
          <p className='text-[26px] lg:text-[33px] font-[600] leading-[33px] text-center'>Research & Development</p>
          <Image src="/images/prototyping.png" height={1200} width={750} alt='py-[10px] about' className='w-[240px] h-[230px]' />
          <div className='flex flex-wrap justify-center gap-2'>
            <div className={`capitalize bg-[#DFBC0D] text-white p-[10px] rounded-md font-[600]`}>research study</div>
            <div className={`capitalize bg-[#DFBC0D] text-white p-[10px] rounded-md font-[600]`}>prototyping</div>
            <div className={`capitalize bg-[#DFBC0D] text-white p-[10px] rounded-md font-[600]`}>modelling</div>
            <div className={`capitalize bg-[#DFBC0D] text-white p-[10px] rounded-md font-[600]`}>development</div>
          </div>
        </div>
        <div className={`bg-[#B7F598] h-[540px] px-[12px] py-[30px] text-[16px] leading-[24px] flex flex-col justify-around items-center rounded-md`}>
          <p className='text-[18px] lg:text-[22px] font-[500] leading-[22px]'>Manufacturing</p>
          <p className='text-[26px] lg:text-[33px] font-[600] leading-[33px] text-center'>Product Manufacturing</p>
          <Image src="/images/manufacturing.png" height={1200} width={750} alt='py-[10px] about' className='w-[240px] h-[230px]' />
          <div className='flex flex-wrap justify-center gap-2'>
            <div className={`capitalize bg-[#6BCF39] text-white p-[10px] rounded-md font-[600]`}>end to end manufacturing</div>
            <div className={`capitalize bg-[#6BCF39] text-white p-[10px] rounded-md font-[600]`}>moulding</div>
            <div className={`capitalize bg-[#6BCF39] text-white p-[10px] rounded-md font-[600]`}>testing</div>
            <div className={`capitalize bg-[#6BCF39] text-white p-[10px] rounded-md font-[600]`}>QC & packing</div>
          </div>
        </div>
        <div className={`bg-[#7ED5F0] h-[540px] px-[12px] py-[30px] text-[16px] leading-[24px] flex flex-col justify-around items-center rounded-md`}>
          <p className='text-[18px] lg:text-[22px] font-[500] leading-[22px]'>Support</p>
          <p className='text-[26px] lg:text-[33px] font-[600] leading-[33px] text-center'>Product Lifecycle Support</p>
          <Image src="/images/support.png" height={1200} width={750} alt='py-[10px] about' className='w-[240px] h-[230px]' />
          <div className='flex flex-wrap justify-center gap-2'>
            <div className={`capitalize bg-[#1698C0] text-white p-[10px] rounded-md font-[600]`}>obselete support</div>
            <div className={`capitalize bg-[#1698C0] text-white p-[10px] rounded-md font-[600]`}>certification</div>
            <div className={`capitalize bg-[#1698C0] text-white p-[10px] rounded-md font-[600]`}>technical support</div>
            <div className={`capitalize bg-[#1698C0] text-white p-[10px] rounded-md font-[600]`}>customer support</div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

