import React, {  useState } from 'react'
import Mens from './menCatalog/Mens'
import Woomen from './womenaCatalog/Woomen'
import style from './catalogsection.module.css';

const CatalogSection = () => {
    const[men,setMen]=useState(false);
  return (
    <div className={style.CatalogSection}>
        <h1><span style={{background:"#17ba8e",padding:'5px'}}>Каталог</span> Товаров</h1>
        <div className={style.nav}>
            <div onClick={()=>setMen(men=>!men)} className={style.w}>Women</div>
            <div onClick={()=>setMen(!men)} className={style.m}>Men</div>
            </div>
     {men?<Mens/>:<Woomen/>}
     
     
    </div>
  )
}

export default CatalogSection