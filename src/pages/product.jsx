// import React, { useContext } from 'react'
import React from 'react'
// import { ShopContext } from '../context/shopContext'
import { useParams } from 'react-router-dom'
import all_product from '../component/Assets/all_product';
import BreadCrums from '../component/Breadcrums/breadCrums';
import Productdisplay from '../component/ProductDisplay/productdisplay';
import DescriptionBox from '../component/DescriptionBox/descriptionBox';
import RelatedProducts from '../component/RelatedProducts/relatedProducts';


function Product() {
  // const {all_product}= useContext(ShopContext)


// This is used to get the specific product page

  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      {/* <ShopContext.Consumer>
        {
          (contextValue)=>{
            return(
              <div> */}
              <BreadCrums product={product}></BreadCrums>
              <Productdisplay product={product}></Productdisplay>
              <DescriptionBox></DescriptionBox>
              <RelatedProducts></RelatedProducts>
              {/* </div>
            )
          }
        }
      </ShopContext.Consumer> */}
    </div>
  )
}

export default Product