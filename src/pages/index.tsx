import React from 'react';
import Article from '../components/Article'
/* import Banner from '../components/Home/Banner' */
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss';
import imagem1 from '../../public/images/article/imagem1.jpg';
import imagem2 from '../../public/images/article/imagem2.png';
import imagem3 from '../../public/images/article/ImageAmazonia01.png';
import MapaBrasil from '../../public/images/Brasil2.png';


import Nav from '../components/Home/Nav';
import EmAlta from '../components/Roteiros/EmAlta'
import Image from 'next/image';
import Example from '../components/Home/Banner2';
import Banner2 from '../components/Home/Banner2';

export default function Home() {
  return (
    <Layout title="Jornada Brasil - Home">
      <Banner2 />
      <Article imagem={imagem1.src} title={"QUAL O DESTINO DOS SEUS SONHOS?"}/>
      <Nav /> 
      <div className={styles.mapaBrasil}>
      <Image src={MapaBrasil} alt="mapa Brasil"/>
        
      </div>
      <Article imagem={imagem2.src} title={"conheça +"}/>
      <Article imagem={imagem3.src} title={"Roteiros em Alta"}/>
      <div className={styles.emAlta}></div>
      <EmAlta />

    </Layout>
  )
}
