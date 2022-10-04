import React from 'react'
import { Link } from 'react-router-dom';
import style from './header.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './nav/Nav';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const[active,setActive] = useState(false)
  const sel = useSelector(state=>state.card.arr)

  const open =()=>{
    setActive(!active)
  }
  return (
    <div className={style.header}>
      <MenuIcon   className={style.menuIcon} onClick={()=>setActive(!active)} />
      <div className={style.logo}>fantach</div>
       <div className={style.nav}>
         <Link to='/CatalogPage'>Каталог</Link>
         <Link to='/DeliveryPage'>Доставка и оплата</Link>
         <Link to='/BrandPage'>О бренде</Link>
         <Link to='/LookBookPage'>LookBook</Link>
         <Link  to='/ContactPage'>Контакты</Link>
         <Link>89003442334</Link>
         <Link to='/FavoritePage'><FavoriteBorderIcon/><span  className={style.span1}>{sel.length}</span></Link>
         <Link  to='/BasketPage'><ShoppingBasketIcon/><span className={style.span2}>{2}</span></Link>
         <MenuIcon  onClick={()=>setActive(!active)} className={style.menu}/>
        </div>
        
            {
              active?<Nav act={open}/>:null
            }
       
    </div>
  )
}

export default Header