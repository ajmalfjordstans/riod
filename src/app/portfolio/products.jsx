import React from 'react'

const ProductList = [
  'Asset tracker',
  'GPS Tracker',
  'EV Chargers',
  'Industrial IoT',
  'Climate controllers',
  'BMS Controller',
  'Smart Phone Products',
  'Gateways',
  'Connected devices',
  'Temperature logger',
  'Smart City Products',
  'Sensor systems'
]

export default function Products() {
  return (
    <div className='container mx-auto py-[30px] px-[10%] flex flex-col items-center'>
      <p className='font-[600] text-[46px] leading-[46px]'>Build Products with RIOD</p>
      <div className='flex flex-wrap justify-center gap-7 mt-[30px]'>
        {ProductList.map((product, id) => {
          return (
            <div
              key={id} className='hover:scale-[1.2] border-[1px] border-gray-500 p-[15px] cursor-pointer transition-all duration-300 rounded-sm font-[700]'
            >{product}</div>
          )
        })}
      </div>
    </div>
  )
}
