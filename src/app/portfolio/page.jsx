import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React from 'react'
import Hero from './hero'
import Products from './products'
import Models from './models'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products/>
      <Models/>
      <Footer />
    </div>
  )
}
