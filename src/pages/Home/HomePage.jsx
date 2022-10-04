import React from 'react'

import Header from '../../components/header/Header'
import AnimateLine from '../../components/animateLine/AnimateLine';
import Section from '../../components/section/Section';
import style from './homepage.module.css';
import CatalogSection from '../../components/catalogSection/CatalogSection';
const HomePage = () => {
  return (
    <div className={style.homepage}>
        <Header/>
        <Section/>
       <AnimateLine/>
       <CatalogSection/>

    </div>
  )
}

export default HomePage