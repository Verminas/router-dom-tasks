import * as React from "react";
import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import App, {ShopItemsType} from "../../App";
import {Error404} from "../pages/Error404";
import {Adidas} from "../pages/Adidas";
import {v1} from "uuid";
import adidasPicture1 from "../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp";
import adidasPicture2 from "../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp";
import adidasPicture3
  from "../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import pumaPicture1 from "../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg";
import pumaPicture2 from "../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg";
import pumaPicture3 from "../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg";
import abibasPicture1 from "../../assets/abibas/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg";
import abibasPicture2 from "../../assets/abibas/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg";
import abibasPicture3
  from "../../assets/abibas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp";
import {Puma} from "../pages/Puma";
import {Abibas} from "../pages/Abibas";
import {Prices} from "../pages/Prices";
import {Model} from "../pages/Model";
import {ProtectedPage} from "../pages/ProtectedPage";
import {ProtectedRoute} from "../pages/ProtectedRoute";
import {Login} from "../pages/Login";

export const PATH = {
  ADIDAS: '/adidas',
  PUMA: '/puma',
  ABIBAS: '/abibas',
  PRICES: '/prices',
  MODEL: '/:model/:id',
  PROTECTED_PAGE: '/protected',
  ERROR: '/error',
  LOGIN: '/login'
}

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

const publicRoutes: RouteObject[] = [
  {
    path: PATH.ADIDAS,
    element: <Adidas items={shopItems.adidas}/>,
  },
  {
    path: PATH.PUMA,
    element: <Puma items={shopItems.puma}/>,
  },
  {
    path: PATH.ABIBAS,
    element: <Abibas items={shopItems.abibas}/>,
  },
  {
    path: PATH.PRICES,
    element: <Prices/>,
  },
  {
    path: PATH.MODEL,
    element: <Model shopItems={shopItems}/>,
  },
  {
    path: PATH.ERROR,
    element: <Error404/>,
  },
  {
    path: PATH.LOGIN,
    element: <Login/>,
  },
]
const privateRoutes: RouteObject[] = [
  {
    path: PATH.PROTECTED_PAGE,
    element: <ProtectedPage/>
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Navigate to={PATH.ERROR}/>,
    children: [
      {
        element: <ProtectedRoute/>,
        children: [...privateRoutes]
      },
      ...publicRoutes
    ]
  },
]);