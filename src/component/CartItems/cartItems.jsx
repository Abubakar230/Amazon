import React, { useContext } from 'react'
import '../CartItems/cartItems.css'
import { ShopContext } from '../../context/shopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
// import from the shopContext
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="cartItems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cartItems-format cartItems-format-main">
                    <img src={e.image} alt="" className='cartIcon-product-icon'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartItems-remove-icons' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
                      
            }
            return null;
        })}
        <div className="cartIcons-down">
            <div className="cartIcons-total">
                <div className='left'>
                <h1>Cart Total</h1>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartItems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartItem-promobox">
                        <input type="text" placeholder='promo code' name="" id="" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItems
