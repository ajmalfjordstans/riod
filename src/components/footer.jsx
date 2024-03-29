'use client'

import Image from 'next/image'
import React from 'react'
import { Input, Button } from "@material-tailwind/react";
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  const subscribe = async () => {
    const response = await fetch('https://riod-backend.onrender.com/newsletter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email: email})
    })
    if (response.ok) {
      console.log('Form submitted successfully.');
      setEmail('')
    } else {
      // Handle error
      console.error('Error submitting form.');
    }
    console.log(response);
  }
  return (
    <div className='bg-[#141414] text-white'>
      <div className='container mx-auto px-[5%] lg:px-[10%] py-[60px] gap-10 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2'>
        <Image src="/images/riod-white.png" height={50} width={140} className='h-[40px] w-[100px] ' alt='logo' />
        <div className='flex flex-col gap-2'>
          <p className='font-[700]'>Help Center</p>
          <p className='font-[700]'>Get a proposal</p>
          <p className='font-[700]'>Production guide</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='font-[700]'>About Us</p>
          <p className='font-[700]'>Term & Condition</p>
          <p className='font-[700]'>Privacy Policy</p>
          <p className='font-[700]'>Blog&apos;s</p>
        </div>
        <div className='flex flex-col gap-2'>
          <p>Sign up to our newsletter and get all of the latest news and updates.</p>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={onChange}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={email ? "gray" : "blue-gray"}
              disabled={!email}
              onClick={subscribe}
              className="!absolute right-1 top-1 rounded"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <div className='container mx-auto px-[5%] lg:px-[10%] py-[20px] flex flex-wrap justify-between gap-2'>
          <p className='font-[600] text-[12px] md:text-[16px]'>© Copyright 2012 - 2023 | RIOD | All rights reserved</p>
          <div className='flex gap-4'>
            <Link href="https://www.facebook.com/riodlab.electronics/">
              <Image src="/icons/facebook.png" height={30} width={30} alt='facebook' className='hover:cursor-pointer' />
            </Link>
            <Link href="https://in.linkedin.com/company/riodlab">
              <Image src="/icons/linkedin.png" height={30} width={30} alt='facebook' className='hover:cursor-pointer' />
            </Link>
            <Link href="https://twitter.com/RiodLab">
              <Image src="/icons/twitter.png" height={30} width={30} alt='facebook' className='hover:cursor-pointer' />
            </Link>
            <Link href="https://www.instagram.com/riod_lab/">
              <Image src="/icons/instagram.png" height={30} width={30} alt='facebook' className='hover:cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
