import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Navigate from '../customer/components/Navigation/Navigate'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import Cart from '../customer/components/Cart/Cart'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
         <div>
        <Navigate/>
        </div> 
      <Routes>
        <Route path='/login' element={<HomePage/>}/> 
        <Route path='/register' element={<HomePage/>}/>

        <Route path='/' element={<HomePage/>}/> 
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}/> 
        <Route path='/product/:productId' element={<ProductDetails/>}/> 
        <Route path='/checkout' element={<Checkout/>}/> 
        <Route path='/account/order' element={<Order/>}/> 
        <Route path='/account/order/:orderId' element={<OrderDetails/>}/> 
      </Routes>
      <div>
      <Footer/>
      </div>   
    </div>
  )
}

export default CustomerRouters
