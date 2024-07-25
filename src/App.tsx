import React from 'react';
import styles from "./components/Site.module.css";
import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";
import {v1} from "uuid";

import adidasPicture1 from './assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasPicture2 from './assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasPicture3 from './assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import pumaPicture1 from './assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'
import pumaPicture2 from './assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg'
import pumaPicture3 from './assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import abibasPicture1 from './assets/abibas/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg'
import abibasPicture2 from './assets/abibas/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg'
import abibasPicture3 from './assets/abibas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'

export type Item = {
  id: string
  model: string;
  collection: string;
  price: string;
  picture: string;
}

export type ShopItemsType = {
  [type: string]: Item[];
}

function App() {

  const shopItems: ShopItemsType = {
    adidas: [
      {
        id: v1(),
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasPicture1,

      },
      {
        id: v1(),
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasPicture2
      },
      {
        id: v1(),
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasPicture3
      }
    ],
    puma: [
      {
        id: v1(),
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: pumaPicture1,

      },
      {
        id: v1(),
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: pumaPicture2
      },
      {
        id: v1(),
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: pumaPicture3
      }
    ],
    abibas: [
      {
        id: v1(),
        model: 'ABIBAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: abibasPicture1,

      },
      {
        id: v1(),
        model: 'ABIBAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: abibasPicture2
      },
      {
        id: v1(),
        model: 'ABIBAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: abibasPicture3
      }
    ]
  }

  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <nav>
            <ul style={{listStyleType: "none"}}>
              <li><NavLink to={'/adidas'} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Adidas</NavLink></li>
              <li><NavLink to={'/puma'} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Puma</NavLink></li>
              <li><NavLink to={'/abibas'} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Abibas</NavLink></li>
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={'/adidas'}/>}></Route>

            <Route path={'/adidas'} element={<Adidas items={shopItems.adidas}/>}></Route>
            <Route path={'/puma'} element={<Puma items={shopItems.puma}/>}></Route>
            <Route path={'/abibas'} element={<Abibas items={shopItems.abibas}/>}></Route>

            <Route path={'/:type/model/:id'} element={<Model shopItems={shopItems}/>}></Route>

            <Route path={'/*'} element={<Error404/>}></Route>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
