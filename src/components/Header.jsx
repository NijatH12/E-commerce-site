import React, { useState } from "react";
import "../css/header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slice/basketSlice";

function Header() {
  const [theme, useTheme] = useState(false);
  const changeTheme = () => {
    const body = document.querySelector("body");
    if (theme) {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    } else {
      body.style.backgroundColor = "black";
      body.style.color = "white";
    }
    useTheme(!theme);
  };  
 

  const dispatch=useDispatch()
  const {products}=useSelector((store)=>store.basket)

  return (
    <div className="header">
      <div className="logo">
        <img className="logopng" src="./src/images/logo.png" alt="" />
        <h1 className="logoname">E-commerce</h1>
      </div>
      <div className="row" style={{ gap: "10px" }}>
        <input  
        className="header-input"  type="text" placeholder="Search..." />
    <button >a</button>
    
        <div style={{ gap: "5px", display: "flex" }}>
          {theme ? (
            <CiLight className="icons" onClick={changeTheme} />
          ) : (
            <FaMoon className="icons" onClick={changeTheme} />
          )}

             <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length}  color="error">
            <CiShoppingBasket  className="icons" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
