import React from 'react'
import style from './section.module.css';
import image from'./fantach_baner.jpg';

const Section = () => {
  return (
    <div className={style.section}>
        <p>ОДЕЖДА ДЛЯ ТЕХ,<br/>КТО ЛЮБИТ <span>КОМФОРТ</span></p>
        <div className={style.sectionImage}>
            <img src={image}  alt="ii" />
        </div>
       
    </div>
  )
}

export default Section