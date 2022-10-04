import React from 'react'
import style from './women.module.css';
import {Women} from '../cards.props.js';
import Card from '../../card/Card';
const Woomen = () => {
  return (
    <div className={style.women}>

        {
          Women.map((el)=>{
            return <Card 
             image={el.image}
             title={el.title}
             text={el.text}
             price={el.price}
            />
          })
        }
        </div>
  )
}

export default Woomen