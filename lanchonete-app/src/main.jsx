import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/home/Home';
import Profile from './components/pages/profile/Profile';
import EditProfile from './components/pages/profile/EditProfile'
import Menu from './components/pages/menu/Menu';
import MenuLanches from './components/pages/menu/MenuLanches'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/'
        element={<App />}>

        <Route exact path='/'
          element={<Home />}>
        </Route>

        <Route path='/profile'
          element={<Profile />}>
          <Route path='/profile/edit' element={<EditProfile />}></Route>
        </Route>


        <Route path='/menu'
          element={<Menu />}>
            <Route path='/menu/lanches' element={<MenuLanches />} />
          </Route>

      </Route>

    </Routes>
  </BrowserRouter>,
)
