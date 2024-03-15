import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.png";
import basket_icon from "../../assets/basket_icon.png";
import { useState } from 'react';
export const Navbar = () => {

    const [menu,setMenu]=useState("home")

  return (
    <div className='navbar'>
        <img src={logo} className='logo' />
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>sign in</button>
        </div>
    </div>
  )
}
