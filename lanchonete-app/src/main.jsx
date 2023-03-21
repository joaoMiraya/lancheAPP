import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './assets/utils/cartContext';

import Loading from './components/componentsReut/LoadingComp';
/* import Home from './components/pages/home/Home';
import Cadastro from './components/pages/home/Cadastro';
import Profile from './components/pages/profile/Profile';
import EditProfile from './components/pages/profile/EditProfile'
import Menu from './components/pages/menu/Menu';
import MenuLanches from './components/pages/menu/MenuLanches';
import Cart from './components/pages/cart/Cart'; */

const Home = lazy(() => import("./components/pages/home/Home"));
const Cadastro = lazy(() => import("./components/pages/home/Cadastro"));
const Profile = lazy(() => import("./components/pages/profile/Profile"));
const EditProfile = lazy(() => import("./components/pages/profile/EditProfile"));
const Menu = lazy(() => import("./components/pages/menu/Menu"));
const MenuLanches = lazy(() => import("./components/pages/menu/MenuLanches"));
const Cart = lazy(() => import("./components/pages/cart/Cart"));
/* const Loading = lazy(() => import("./components/componentsReut/LoadingComp")); */



ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route path='/'
            element={<App />}>

            <Route exact path='/'
              element={<Home />}>
            </Route>

            <Route path='/cadastro'
              element={<Cadastro />}>

            </Route>

            <Route path='/profile'
              element={<Profile />} end>
              <Route path='/profile/edit' element={<EditProfile />} />
            </Route>


            <Route path='/menu'
              element={<Menu />}>
              <Route path='/menu/lanches' element={<MenuLanches />} />
            </Route>
            <Route path='/finalizar-pedido' element={<Cart />}></Route>
          </Route>



        </Routes>
      </Suspense>
    </BrowserRouter>
  </CartProvider >
)
