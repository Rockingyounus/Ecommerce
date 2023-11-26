import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
//import myContext from '../../context/data/myContext'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/productCard'
import Testimonial from '../../components/testimonial/Testimonial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
//import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'


function Home() {
   const dispatch = useDispatch();
   const cartItem = useSelector((state)=> state.cart)


  return (
    <Layout>
       
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'> see more</button>
        </Link>

      </div>
      <Track/>
      <Testimonial/>
       
    </Layout>
  )
}

export default Home