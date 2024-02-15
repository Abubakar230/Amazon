import React from 'react'
import dropdown_icon from '../component/Assets/dropdown_icon.png'
import './CSS/shopCategory.css'
import { ShopContext } from '../context/shopContext'
import all_product from '../component/Assets/all_product'
import Item from '../component/item/item'
function ShopCategory({banner,category}) {
  // const {all_product} = useContext(ShopContext)
  return (
    <>
  <ShopContext.Consumer>
    {
      ({contextValue})=>{
        return(
          
          <div className='shop-category'>
          
          <img className='shopcategory-banner' src={banner} alt="" srcset="" />
          <div className="shopcategory-indexSort">
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="shopcategory-sort">
              Sort by <img src={dropdown_icon} alt="" srcset="" />
            </div>
          </div>
          <div className="shopcategory-products">
            {/* {contextValue} */}
            {all_product.map((item,i)=>{
              if(category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              }
              else{
                return null;
              }
            })}
          </div>
          <div className="shopcategory-loadmore">
            Explore More
          </div>
          </div>
        )
      }
    }
  </ShopContext.Consumer>    
    </>
  )
}

export default ShopCategory
