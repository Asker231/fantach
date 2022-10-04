import React from 'react'
import Card from '../../card/Card';
import style from './mens.module.css';
import {Men} from '../cards.props.js';


const Mens = () => {

  return (
    <div className={style.mens}>
        
      {
         Men.map((el)=>{
            return <>
                <Card 
                image={el.image}
                title={el.title}
                text={el.text}
                price={el.price}
               />
               
               </>})
      }
          
    </div>
  )
}

export default Mens