import React, { createContext, useState } from 'react'
import all_product from '../component/Assets/all_product'

// import Product from '../pages/product';
const ShopContext = createContext(null);

// defaultCat function that use in useState
const getDefaultCart = ()=>{
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
     cart[index] = 0;
  }
  return cart;
}

// useState hook
function ShopContextProvider({children}) {
  const[cartItems,setCartItems]= useState(getDefaultCart());
  
  // add item in the cart
  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log(cartItems)
  }
  // Remove item in the cart 
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }


//  const getTotalCartAmount = ()=>{
//   let totalAmount = 0;
//   for(const item in cartItems)
//   {
//     if(cartItems[item]>0)
//     {
//       let itemInfo = all_product.find((product)=>product.id===Number(item))
//       totalAmount += itemInfo.new_price * cartItems[item];
//     }
//     return totalAmount;
//   }
//  }



//////// This is used to add the all items in cart

const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const itemQuantity = Number(cartItems[item]);

    if (itemQuantity > 0) {
      const itemInfo = all_product.find((product) => product.id === Number(item));

      if (itemInfo) {
        totalAmount += itemInfo.new_price * itemQuantity;
      } else {
        // Handle the case where itemInfo is not found
        console.warn(`Product with ID ${item} not found in all_product`);
      }
    }
  }

  return totalAmount;
};



// total cart items

const getTotalCartItems = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    const itemQuantity = Number(cartItems[item]);

    if (itemQuantity > 0) {
        totalAmount += itemQuantity;
      
    }
  }

  return totalAmount;
};




  
  const contextValue = {all_product,cartItems,addToCart,getTotalCartItems,removeFromCart,getTotalCartAmount}
  
  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {children}
      </ShopContext.Provider>
    </div>
  )
}

export default ShopContextProvider
export {ShopContext}
