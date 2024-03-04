'use client'
import Link from 'next/link'
import React from 'react'
import RevealRight from './animations/reveal-right'
import { motion } from 'framer-motion'

export default function WhatsappButton() {
  return (
    <Link href={'https://web.whatsapp.com/send?phone=7306910508&text=Hello%20team!%20I%20would%20like%20to%20more%20details%20on%20this.'}>

      <motion.div
        variants={{
          hidden: { x: 300 },
          visible: { x: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1 }}
        className='fixed bottom-4 right-4 bg-green-300 text-white flex items-center pr-2 rounded-full'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className='w-12 h-12'
          fill="none"
          viewBox="0 0 92 92"
        >
          <g fill="#fff">
            <path d="M22.89 66.976l3.285-12.213a22.586 22.586 0 01-2.37-15.637 22.615 22.615 0 018.469-13.365 22.683 22.683 0 0129.62 1.915 22.593 22.593 0 012.301 29.544 22.66 22.66 0 01-13.276 8.628 22.69 22.69 0 01-15.691-2.164zm12.932-7.863l.763.452a18.337 18.337 0 0022.178-2.693 18.256 18.256 0 003.062-22.094 18.302 18.302 0 00-8.839-7.805 18.34 18.34 0 00-11.772-.8c-3.905 1.037-7.357 3.335-9.818 6.535s-3.791 7.124-3.785 11.158a18.052 18.052 0 002.677 9.476l.478.788-1.836 6.817z"></path>
            <path
              fillRule="evenodd"
              d="M54.34 47.003a3.778 3.778 0 00-3.233-.736c-.84.349-1.383 1.666-1.926 2.324a.802.802 0 01-1.035.232 14.644 14.644 0 01-7.32-6.261.876.876 0 01.117-1.214 5.059 5.059 0 001.293-2.156 4.693 4.693 0 00-.595-2.582 6.042 6.042 0 00-1.875-2.827 2.59 2.59 0 00-2.78.426 5.706 5.706 0 00-1.979 4.519c.002.479.063.956.181 1.42.3 1.115.762 2.18 1.371 3.163a24.4 24.4 0 001.436 2.182 22.033 22.033 0 006.22 5.758 18.752 18.752 0 003.88 1.846 8.6 8.6 0 004.512.71 5.422 5.422 0 004.087-3.034 2.578 2.578 0 00.194-1.55c-.233-1.07-1.668-1.703-2.548-2.22z"
              clipRule="evenodd"
            ></path>
          </g>
        </svg>
        <p className='font-[600]'>How can I help you?</p>
      </motion.div>
    </Link >
  )
}
