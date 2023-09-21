import React from 'react'

function Header() {
  return (
    <div className='text-center my-4 text-neutral-50'>
        <h1 className='text-6xl font-bold my-4'>COVID-19</h1>
        <p className='text-xl my-2'>Global and Country Wise Cases of Corona Virus</p>
        <span className='text-lg italic'>(For a particular select a country from below)</span>
    </div>
  )
}

export default Header