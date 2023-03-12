import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './App.css'

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineMenuBook } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';


import lanchebg from './assets/images/lanchebg.png';
import logoImage from './assets/images/logo.png';

function App() {
  /* bg-center bg-[url('/src/assets/images/lanchebg.png')] */
  return (

    <div className="container mx-auto">
      <nav className=" bg-gradient-to-tr from-amber-500 to-red-800  max-h-24  flex-col w-full relative ">
        <img className=' w-full h-full object-none absolute overflow-visible z-0' src={lanchebg} alt="..." />
        <div className='p-5 flex z-10'>
          <Link to={'/'}> <img className='w-16 h-16 z-50 absolute top-0' src={logoImage} alt="Logo" /></Link>
        </div>

        <div className='flex justify-end '>
          <AiOutlineMenu size={25} />
        </div>
      </nav>
      <Outlet></Outlet>

     
        <div className='flex items-center mt-2 justify-around shadow border-t-2 border-gray-400 bg-white w-full text-gray-600 h-10 bottom-0 fixed'>
          <Link to={'/'}> <AiOutlineShoppingCart size={25} /> </Link>
          <Link to={'/menu'}> <MdOutlineMenuBook size={25} /> </Link>
          <Link to={'/profile'}> <CgProfile size={25} /> </Link>
        </div>
    

    </div>


  )
}

export default App
