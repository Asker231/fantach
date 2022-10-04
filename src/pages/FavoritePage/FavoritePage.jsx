import React from 'react'
import { useSelector } from 'react-redux';
import style from './favorite.module.css';
import { Link } from 'react-router-dom';
const FavoritePage = () => {
  const sel = useSelector(state=>state.card.arr);
  return (
      <div className={style.fav}>
        <h1>Избранное</h1>
        <Link className={style.back} to='/'>back</Link>
        <div className={style.favorite}>
           {
         sel.map((el)=>{
          return<>
            <div className={style.card}>
                   <img src={el.image}/>
                   <h3>{el.title}</h3>
                   <span>{el.price}</span>
            </div>
          </>
         })
      }
        </div>
     
      </div>
  )
}

export default FavoritePage