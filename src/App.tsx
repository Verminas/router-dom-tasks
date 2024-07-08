import React from 'react';
import styles from "./components/Site.module.css";
import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Error404} from "./components/pages/Error404";


function App() {

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

            <Route path={'/adidas'} element={<PageOne/>}></Route>
            <Route path={'/puma'} element={<PageTwo/>}></Route>
            <Route path={'/abibas'} element={<PageThree/>}></Route>

            <Route path={'/*'} element={<Error404/>}></Route>
          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}


export default App;
