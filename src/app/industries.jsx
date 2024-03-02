'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const industriesData = [
  {
    icon: '/icons/car.svg',
    title: 'Electric Vehicle',
    img: '/images/innovation/electric-vehicle.png'
  },
  {
    icon: '/icons/university.svg',
    title: 'Energy Industry',
    img: '/images/innovation/energy-industry.png'
  },
  {
    icon: '/icons/gear.svg',
    title: 'Automotive',
    img: '/images/innovation/automotive.png'
  },
  {
    icon: '/icons/industry.svg',
    title: 'Industrial',
    img: '/images/innovation/industrial.png'
  },
  {
    icon: '/icons/digital-ocean.svg',
    title: 'Consumer Tech',
    img: '/images/innovation/consumer-tech.png'
  },
  {
    icon: '/icons/gas-pump.svg',
    title: 'Oil and Gas',
    img: '/images/innovation/oil-and-gas.png'
  },
  {
    icon: '/icons/city.svg',
    title: 'Smart City',
    img: '/images/innovation/smart-city.png'
  },
  {
    icon: '/icons/tractor.svg',
    title: 'Agriculture',
    img: '/images/innovation/agriculture.png'
  },
]

export default function Industries() {
  const [selected, setSelected] = useState({
    icon: '/icons/car.svg',
    title: 'Electric Vehicle',
    img: '/images/innovation/electric-vehicle.png'
  })
  return (
    <div className='container mx-auto px-[10%] py-[20px] flex flex-col justify-center'>
      <Image src="/images/logo.png" height={50} width={140} className='h-[40px] w-[100px] mx-auto my-[30px]' alt='logo' />
      <div className='text-center'>
        <p className='font-[600] text-[46px] leading-[46px]'>Powering Innovation Across Industries</p>
        <p className='text-[17px] leading-[25.5px] mt-[15px]'>At RIOD, we believe that technology has the power to transform any industry. That&apos;s why we&apos;re dedicated to developing innovative solutions that help businesses of all sizes to grow and succeed.</p>
      </div>
      <div className='flex justify-center'>
        <div className='w-[224px] flex flex-col gap-1 justify-center'>
          {industriesData.map((ind, id) => {
            return (
              <div className='flex gap-3 p-3 hover:bg-gray-200 cursor-pointer' key={id}
                onClick={() => { setSelected(ind) }}
              >
                <Image src={ind.icon} height={24} width={24} alt='icon' className='' />
                <p className='font-[700]'>{ind.title}</p>
              </div>
            )
          })}
        </div>
        <Image src={selected.img} height={1240} width={1240} alt='image' className='h-[540px] w-[800px] transition-all duration-200' />
      </div>
    </div>
  )
}
