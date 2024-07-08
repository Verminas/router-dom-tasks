import React from 'react';
import styles from "./components/Site.module.css";
import {Routes, Route, NavLink, Navigate, useRouteError} from "react-router-dom";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/Error404";
import {Model} from "./components/pages/Model";
import {v1} from "uuid";
import adidasModel1 from "./assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasModel2 from "./assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasModel3
  from "./assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";

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

// function ErrorBoundary() {
//   let error = useRouteError();
//   console.error(error);
//   // Uncaught ReferenceError: path is not defined
//   return <div>Dang!</div>;
// }

function App() {

  const shopItems: ShopItemsType = {
    adidas: [
      {
        id: v1(),
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

      },
      {
        id: v1(),
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
      },
      {
        id: v1(),
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
      }
    ],
    puma: [
      {
        id: v1(),
        model: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel2,

      },
      {
        id: v1(),
        model: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel3
      },
      {
        id: v1(),
        model: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel1
      }
    ],
    abibas: [
      {
        id: v1(),
        model: 'ABIBAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel3,

      },
      {
        id: v1(),
        model: 'ABIBAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel1
      },
      {
        id: v1(),
        model: 'ABIBAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel2
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

            {/*<Route path={'/:type/model/:id'} element={<Model shopItems={shopItems}/>} errorElement={<ErrorBoundary />}></Route>*/}

            <Route path={'/*'} element={<Error404/>}></Route>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
