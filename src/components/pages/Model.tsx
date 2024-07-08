// @flow
import * as React from 'react';
import styles from "../Site.module.css";
import {useParams} from "react-router-dom";
import {ShopItemsType} from "../../App";

type Props = {
  shopItems: ShopItemsType
};
export const Model = ({shopItems}: Props) => {
  const {type, id} = useParams();
  let currentModel;
  currentModel = type ? shopItems[type].find(m => m.id === id) : null;

  return (
    <div>
      {!currentModel
        ? <span>There is no such model</span>
        : <div>
          <p>{currentModel.model}</p>
          <img src={currentModel.picture} alt={currentModel.model} className={styles.imgItem}/>
          <p>Collection: {currentModel.collection}</p>
          <p>Price: {currentModel.price}</p>
        </div>
      }
    </div>
  )
};