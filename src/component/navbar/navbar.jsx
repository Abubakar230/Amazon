import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'
// import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
function Navbar() {


    const[menu,setMenu]=useState('shop')

    //context api
    const {getTotalCartItems} = useContext(ShopContext)

// for responsivenss

const menuRef = useRef();

const dropDown_toggle = (e)=>{
  menuRef.current.classList.toggle('nav-menu-visible')
  e.target.classList.toggle('open')
}
    

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt=""></img>
        <p>SHOPPER</p>
      </div>

<img className="nav-dropdown" onClick={dropDown_toggle} src={breadcrum_arrow} alt="" />
{/* <img className="nav-dropdown" onClick={dropDown_toggle} src={MenuOpenSharpIcon} alt="" /> */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mens')}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('women')}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==='women'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
