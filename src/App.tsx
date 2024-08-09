import React from 'react';
import styles from "./components/Site.module.css";
import {Routes, Route, NavLink, Navigate, Outlet} from "react-router-dom";
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
import {Prices} from "./components/pages/Prices";
import {PATH} from "./components/routes/router";

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
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>
          <nav>
            <ul style={{listStyleType: "none"}}>
              <li><NavLink to={PATH.ADIDAS}
                           className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Adidas</NavLink>
              </li>
              <li><NavLink to={PATH.PUMA}
                           className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Puma</NavLink>
              </li>
              <li><NavLink to={PATH.ABIBAS}
                           className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Abibas</NavLink>
              </li>
              <li><NavLink to={PATH.PRICES}
                           className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Prices</NavLink>
              </li>
              <li><NavLink to={PATH.PROTECTED_PAGE}
                           className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>Protected</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
