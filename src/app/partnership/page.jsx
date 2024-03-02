import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Partnership from './partnership'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Partnership />
      <FAQ />
      <Footer />
    </div>
  )
}
