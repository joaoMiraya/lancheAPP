import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '../assets/utils/cartContext';

import Loading from '../components/componentsReut/LoadingComp';

const Home = lazy(() => import("../components/pages/home/Home"));
const HomeLogged = lazy(() => import("../components/pages/home/HomeLogged/HomeLogged"));
const Cadastro = lazy(() => import("../components/pages/home/Cadastro"));
const Profile = lazy(() => import("../components/pages/profile/Profile"));
const Menu = lazy(() => import("../components/pages/menu/Menu"));
const MenuLanches = lazy(() => import("../components/pages/menu/Lanches/MenuLanches"));
const MenuPizzas = lazy(() => import("../components/pages/menu/Pizzas/MenuPizzas"));
const PorcoesMenu = lazy(() => import("../components/pages/menu/Porcoes/PorcoesMenu"));
const Cart = lazy(() => import("../components/pages/cart/Cart"));


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <CartProvider>
          <Routes>

            <Route path='/'
              element={<App />}>

              <Route exact path='/' element={<Home />} />

              <Route path='/cadastro'
                element={<Cadastro />}>
              </Route>

              <Route path='/profile'
                element={<PrivateRoute > <Profile /> </PrivateRoute>} />



              <Route path='/menu'
                element={<Menu />}>
              </Route>
              <Route path='/menu/lanches' element={<MenuLanches />} />
              <Route path='/menu/pizzas' element={<MenuPizzas />} />
              <Route path='/menu/porcoes' element={<PorcoesMenu />} />

              <Route path='/finalizar-pedido' element={<Cart />}></Route>
            </Route>



          </Routes>
        </CartProvider >
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider >
)
