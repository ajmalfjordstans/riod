import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const servicesData = [
  {
    img: "/images/helpdesk.png",
    title: 'RIOD Helpdesk',
    desc: 'DeepTech Support at Your Fingertips! Experience Best in class Assistance with RIOD Helpdesk!'
  },
  {
    img: "/images/agile-success.png",
    title: 'Agile Success',
    desc: 'We offer our clients with Direct Access to project management tools for a successful and transparent collaboration.'
  },
  {
    img: "/images/channels.png",
    title: 'Channels',
    desc: 'Seamless Communication Channels: Our Transparent Tools for Quick and Efficient Resolutions'
  },
]

export default function Models() {
  return (
    <>
      <div className='bg-[#FFF9E0]'>
        <div className='container mx-auto py-[30px] px-[9%] grid md:grid-cols-2'>
          <div className=' flex flex-col justify-center gap-4 my-[30px]'>
            <p className='font-[600] text-[36px] md:text-[41px] leading-[41px] '>
              Adaptive Business Models
            </p>
            <p className='text-[19px] leading-[24px] md:leading-[28.5px] mt-[30px]'>Our business model at RIOD is highly adaptable to meet the specific needs of your projects. We offer a range of options, including complete Turnkey solutions, expert consultancy services, and retainer-based models. Our programs are thoughtfully designed to streamline project execution, ensuring timely and successful outcomes.</p>
            <Link href="">
              <div className='flex justify-between gap-2 text-black  w-[220px] mt-[30px] cursor-pointer group hover:scale-[1.1] transition-all duration-300'>
                <p className='font-[500] text-[20px] leading-[23px] underline'>Explore our models</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </div>
          <Image src="/images/business-model.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
        </div>
      </div>
      <div className='bg-[white] py-[60px] flex items-center'>
        <div className='container mx-auto py-[30px] px-[5%] lg:px-[10%]'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-[30px]'>
            {servicesData.map((data, id) => {
              return (
                <div className='flex flex-col items-center gap-4' key={id}>
                  <Image src={data.img} height={187} width={290} alt='services' className='object-contain h-[187px] w-full' />
                  <p className='font-[600] text-[24px] leading-[24px] mt-[15px] lg:mt-[30px] text-center'>{data.title}</p>
                  <p className='text-[14px] lg:text-[17px] leading-[22.5px] text-center'>{data.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='bg-[#FFE979]'>
        <div className='container mx-auto py-[60px] px-[5%] lg:px-[10%] grid md:grid-cols-2'>
          <div className='flex flex-col justify-center gap-4 my-[30px]'>
            <p className='font-[600] text-[41px] leading-[37px] '>
              Build Successful Products With RIOD
            </p>
            <p className='text-[19px] leading-[28.5px] mt-[30px]'>Whether you are a business or startup, Looking to enhance or launch new product to market? We can help you.</p>
            <Link href="/contact-us">
              <div className='bg-[black] hover:bg-[#30B583] flex justify-between gap-2 text-white p-[20px] w-[220px] mt-[30px] cursor-pointer group hover:scale-[1.2] transition-all duration-100'>
                <p className='font-[500] text-[16px] leading-[23px] '>Get Touch with Us</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
            <div className='h-[1px] w-full bg-gray-300 my-[20px]'></div>
          </div>
          <Image src="/images/map.png" height={1200} width={900} alt='component' className='h-full w-full object-contain' />
        </div>
      </div>
    </>
  )
}
