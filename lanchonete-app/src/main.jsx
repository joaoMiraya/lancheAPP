import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './assets/utils/cartContext';

import Loading from './components/componentsReut/LoadingComp';


const Home = lazy(() => import("./components/pages/home/Home"));
const Cadastro = lazy(() => import("./components/pages/home/Cadastro"));
const Profile = lazy(() => import("./components/pages/profile/Profile"));
const EditProfile = lazy(() => import("./components/pages/profile/EditProfile"));
const Menu = lazy(() => import("./components/pages/menu/Menu"));
const MenuLanches = lazy(() => import("./components/pages/menu/Lanches/MenuLanches"));
const MenuPizzas = lazy(() => import("./components/pages/menu/Pizzas/MenuPizzas"));
const Cart = lazy(() => import("./components/pages/cart/Cart"));




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
            </Route>
            <Route path='/menu/lanches' element={<MenuLanches />} />
            <Route path='/menu/pizzas' element={<MenuPizzas />} />

            <Route path='/finalizar-pedido' element={<Cart />}></Route>
          </Route>



        </Routes>
      </Suspense>
    </BrowserRouter>
  </CartProvider >
)
