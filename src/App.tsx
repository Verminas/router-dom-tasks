import React, {useEffect} from 'react';
import styles from "./components/Site.module.css";
import {Routes, Route, NavLink, Navigate, Outlet, Link, useNavigate} from "react-router-dom";
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
  const navigate = useNavigate()
  const navigateHandler = () => {
    navigate(-1)
  }

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
          <div className={styles.HorizontalNavigation}>
            <Link to={PATH.ADIDAS} className={styles.LinkLikeButton}>Main page</Link>
            <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
          </div>
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
