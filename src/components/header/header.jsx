import React from 'react'
import { NAV_LINKS } from './data'
import { Link } from 'react-router-dom'
import { LuSearch, LuUserRound } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";


const Header = () => {
  return (
    <nav className='container absolute left-1/2 -translate-x-1/2 top-4 z-20'>
      <div className='flbx'>
        <Link to='/' className='font-logo text-3xl font-bold text-primary'>Daily Drip</Link>
        <div className='flx gap-10'>
          {
            NAV_LINKS?.map((navItem, index) => (
              <Link key={index} to={navItem.link}>{navItem.title}</Link>
            ))
          }
        </div>
        <div className='flx gap-2.5'>
          <button className='bg-white h-10 w-10 center rounded-full border'>
            <LuSearch className='text-primary' />
          </button>
          <button className='bg-white h-10 w-10 center rounded-full border'>
            <RiShoppingCart2Line className='text-primary' />
          </button>
          <button className='bg-white h-10 w-10 center rounded-full border'>
            <LuUserRound className='text-primary' />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header