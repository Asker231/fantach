import React from 'react'
import { Link } from 'react-router-dom';
import style from'./button.module.css';

const ButtonAnimate = () => {
  return (
    <div className={style.btn}>
        <span startOffset="0%">перейти в каталог</span>
        <Link to='/CatalogPage'></Link>
        <span>перейти в каталог</span>

    </div>
  )
}

export default ButtonAnimate