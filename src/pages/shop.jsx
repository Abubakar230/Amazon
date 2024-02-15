import React from 'react'
import Hero from '../component/Hero/hero'
import Popular from '../component/popular/popular'
import Offers from '../component/offers/offers'
import NewCollections from '../component/newCollections/newCollections'
import NewsLetter from '../component/newsLetter/newsLetter'
function Shop() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollections></NewCollections>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop
