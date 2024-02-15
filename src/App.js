import React from 'react'
import Navbar from './component/navbar/navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './pages/shop'
import ShopCategory from './pages/shopCategory'
import Product from './pages/product'
import Cart from './pages/cart'
import Login from './pages/login'
import Footer from './component/Footer/footer'
import men_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  )
}

export default App
