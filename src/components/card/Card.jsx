import React from 'react'
import style from './cards.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { AddCard } from '@mui/icons-material';
import { v4 } from 'uuid';
import { addCard } from '../../redux/cards/cardsSlice';
const Card = ({title,image,text,price}) => {
  const disp = useDispatch()
  const dataCard={
    title,
    image,
    text,
    price,
    id:v4()
  }
  return (
    <div className={style.card}>
        <FavoriteBorderIcon onClick={()=>disp(addCard(dataCard))} className={style.fav}/>
        <img src={image} alt='alt' />
        <h3>{title}</h3>
        <p>{text}</p>
        <span>{price}</span>
        
    </div>
  )
}

export default Card