'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactForm from './contact-form'

const servicesData = [
  {
    img: "icons/whatsapp.svg",
    title: 'Live Chat',
    desc: 'Engage with us in real-time through our WhatsApp live chat feature.',
    button: 'Open Live chat',
    link: 'https://wa.me/917306910508?text=Hello'
  },
  {
    img: "icons/helping-hands.svg",
    title: 'Need Support ?',
    desc: 'Whether you require assistance with existing products or need new solutions, our Support Center is here to help.',
    button: 'Explore help Center',
    link: 'http://support.riod.in/'
  },
  {
    img: "icons/user-circle.svg",
    title: 'My RIOD',
    desc: 'Explore “My RIOD” for our curated blog posts on market trends, industry news, and more.',
    button: 'My RIOD',
    link: '/blog'
  },
]

export default function Services() {
  return (
    <div className='container mx-auto px-[5%] lg:px-[10%] py-[60px] flex flex-col items-center'>
      <div className='grid md:grid-cols-3 gap-12 mt-[30px]'>
        {servicesData.map((data, id) => {
          return (
            <div className='flex flex-col items-center gap-4 relative pb-[70px]' key={id}>
              <Image src={data.img} height={150} width={150} alt='services' className='object-cover h-[70px] w-[70px]' />
              <p className='font-[600] text-[24px] leading-[24px]'>{data.title}</p>
              <p className='text-[14px] leading-[22.5px] text-center'>{data.desc}</p>
              <Link href={data.link} className='absolute bottom-0'>
                <p className='font-[600] text-[18px] lg:text-[24px] leading-[24px] underline'>{data.button}</p>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='mt-[80px]'>
        <div className='text-[16px] leading-[24px] bg-[#FEF9C3] rounded-md p-[10px] max-w-[658px] mx-auto my-[20px]'>
          <p className=''>For any technology-related assistance, please reach out via our Support Desk, For General inquiries and presales questions, use the form below.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
