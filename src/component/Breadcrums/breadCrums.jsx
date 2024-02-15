import React from 'react'
import '../Breadcrums/breadCrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

function BreadCrums({product}) {

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" srcset="" />
      SHOP <img src={arrow_icon} alt="" srcset="" />
      {product.category} <img src={arrow_icon} alt="" srcset="" />
      {product.name} 
    </div>
  )
}

export default BreadCrums
