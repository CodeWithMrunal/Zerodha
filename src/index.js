import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Product from './landing_page/products/productsPage';
import Pricing from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import About from './landing_page/about/AboutPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Pricing' element={<Pricing/>}/>
      <Route path='/Support' element={<Support/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);

