import React from 'react'
import style from './nav.module.css';
import { Link } from 'react-router-dom';
const Nav = ({act}) => {
  return (
    <div className={style.navs}>
         <span onClick={()=>act()} >X</span>
        <div className={style.nav}>
         <Link to='/CatalogPage'>Каталог</Link>
         <Link to='/DeliveryPage'>Доставка и оплата</Link>
         <Link to='/BrandPage'>О бренде</Link>
         <Link to='/LookBookPage'>LookBook</Link>
         <Link to='/ContactPage'>Контакты</Link>
         </div>
          <div className={style.phone}>
            <Link>89003442334</Link>
         </div>
    </div>
  )
}

export default Nav