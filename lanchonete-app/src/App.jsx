import React, { useState, useRef, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from './auth/firebase';

import './App.css';

import Footer from './components/paterns/Footer';
/* ICONS IMPORT */
import { MdOutlineMenuBook } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
/* IMG IMPORT */
import lanchebg from './assets/images/lanchebg.png';
import logoImage from './assets/images/logomarcahamburgueria.png';
/* UTILS IMPORT */
import { CartContext } from './assets/utils/cartContext';


function App() {


  /*   FUNÇÃO PARA ABRIR MENU HAMB */
  const [open, setOpen] = useState(false);
  function OpenMenu() {
    if (!open) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }
  /* FIM DA FUNÇÃO PARA ABRIR MENU HAMB */

  /* FUNÇÃO DO MENU FIXO */

  const menuFixedRef = useRef();

  const [startY, setStartY] = useState(null);
  const [endY, setEndY] = useState(null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setEndY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (endY > startY) {
      menuFixedRef.current.classList.remove('fixedMenuHidden')
    } else if (endY < startY) {
      menuFixedRef.current.classList.add('fixedMenuHidden')

    }
  };

  /*FIM FUNÇÃO DO MENU FIXO */

  /*  INICIO CARRINHO DE COMPRAS */
  const { cartItems, setCartItems } = useContext(CartContext);
  let quantity = [];
  if (!cartItems) {
    quantity = 0;
  } else {
    quantity = cartItems.length
  };

  return (
    <>
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} >
        <nav className=" bg-gradient-to-tr from-amber-500 to-red-800  max-h-24  z-40  flex justify-between items-end relative ">
          <img className=' w-full h-full object-none absolute overflow-visible z-0 drop-shadow-xl' src={lanchebg} alt="..." />
          <div className='p-5 flex z-10'>
            <Link to={'/'}> <img className='w-16 h-16 z-50 absolute top-0' src={logoImage} alt="Logo" /></Link>
          </div>

          <div className='flex justify-end mr-4 relative '>
            <div className={`${open ? 'hidden' : ''}`} >
              <AiOutlineMenu className='text-white z-40' onClick={OpenMenu} size={25} />
            </div>

            <div className={`${open ? ' ' : 'hidden'}`} >
              <AiOutlineClose className='text-white ' onClick={OpenMenu} size={25} />
            </div>
          </div>
        </nav>
        <div className={`bg-gradient-to-br absolute z-10 from-amber-500  to-red-800 top-0 left-0 h-screen w-1/2 flex items-center flex-col justify-evenly
      ${open ? '' : 'closeMenu'}`}>
          <div className='h-1/5 flex flex-col justify-end'>
            <ul className='text-white'>
              <li className='mt-4'>Contato</li>
              <li className='mt-4'>Sobre nós</li>
              <li className='mt-4'>Termos e Políticas</li>
              <li className='mt-4'>Área de entrega</li>
            </ul>
          </div>
          <img className='w-16 h-16 ' src={logoImage} alt="Logo" />
          <div className='flex gap-4 text-white'>
            <AiOutlineInstagram size={30} />
            <AiOutlineFacebook size={30} />
          </div>
        </div>
        <Outlet></Outlet>


        <div ref={menuFixedRef} className=' z-20 flex items-center mt-2 justify-around shadow border-t-2 border-gray-400 bg-white w-full text-gray-600 h-10 fixed bottom-0 '>
          <div className=' relative'>
            <Link to={'/finalizar-pedido'}> <AiOutlineShoppingCart size={25} /> </Link>
            <span className='  bg-red-500 rounded-full absolute top-[-10px] right-[-10px] text-white text-xs'>
              <span className=' p-1'>{quantity}</span>
            </span>
          </div>
          <Link to={'/menu'}> <MdOutlineMenuBook size={25} /> </Link>
          <Link to={'/profile'}> <CgProfile size={25} /> </Link>
        </div>

      </div>
        <Footer />
    </>

  )
}

export default App;
