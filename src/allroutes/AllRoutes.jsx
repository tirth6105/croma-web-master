import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Sign from '../pages/Sign'
import Addproduct from '../pages/Addproduct'
import SinglePage from '../pages/SinglePage'
import Privateroute from './Privateroute'

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={

          <Privateroute>

            <Product />
          </Privateroute>
        } ></Route>
        <Route path='/add_product' element={
          <Addproduct />
        } />
        <Route path='/product/:id' element={
          <SinglePage />
        } />
        <Route path='/cart' element={
          <Cart />
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />

      </Routes>
    </>
  )
}

export default AllRoutes