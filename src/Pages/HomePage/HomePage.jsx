import React from 'react'
import Navbar from "./Navbar"
import ProductList from '../../Components/ProductList/ProductList'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
    <div className='home'>
        <Navbar />
        <ProductList />
        <Footer />
    </div>
  )
}

export default HomePage