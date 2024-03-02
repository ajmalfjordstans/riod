import Image from 'next/image'
import React from 'react'

const servicesData = [
  {
    img: "/images/our-services/3d-modelling.png",
    title: '3D Modelling',
    desc: 'We transform your concepts into vivid 3D models, ensuring precise design representation and streamlined development.'
  },
  {
    img: "/images/our-services/certification-support.png",
    title: 'Schematic & PCB Layout',
    desc: 'Our team delivers efficient and precise schematic designs and PCB layouts for optimal electronic performance.'
  },
  {
    img: "/images/our-services/life-support.png",
    title: 'Software Development',
    desc: 'We cover everything from  embedded firmware to  IoT Cloud stack,  ensuring seamless integration'
  },
  {
    img: "/images/our-services/product-manufacturing.png",
    title: 'Product Manufacturing',
    desc: 'With modern facilities and expertise, we bring your product designs to life, emphasizing quality and scalability.'
  },
  {
    img: "/images/our-services/certification-support.png",
    title: 'Certification support',
    desc: 'We provide comprehensive guidance through industry regulations, ensuring your products achieve global compliance.'
  },
  {
    img: "/images/our-services/life-support.png",
    title: 'Lifecycle Support',
    desc: 'We offer enduring support throughout your product’s lifecycle, ensuring its sustained performance and relevance in dynamic markets.'
  },
]

export default function Services() {
  return (
    <div className='container mx-auto py-[30px] px-[10%] flex flex-col items-center'>
      <p className='font-[600] text-[46px] leading-[46px]'>Our Services</p>
      <p className='text-[17px] leading-[22.5px] mt-[15px]'>RNDSquare Services for successful product engineering</p>
      <div className='grid grid-cols-3 gap-12 mt-[30px]'>
        {servicesData.map((data, id) => {
          return (
            <div className='flex flex-col items-center gap-4' key={id}>
              <Image src={data.img} height={187} width={290} alt='services' className='object-cover h-[187px] w-[289px]' />
              <p className='font-[600] text-[24px] leading-[24px]'>{data.title}</p>
              <p className='text-[17px] leading-[22.5px] text-center'>{data.desc}</p>
            </div>
          )
        })}
      </div>

      <div className='bg-[black] hover:bg-[#30B583] flex justify-between gap-2 text-white p-[20px] mt-[30px] cursor-pointer group hover:scale-[1.2] transition-all duration-100'>
        <p className='font-[500] text-[16px] leading-[23px] '>Download our product engineering guide</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  )
}
