// @flow
import * as React from 'react';
import {useState} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {PATH} from "../routes/router";

type Props = {

};
export const ProtectedRoute = ({}: Props) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>}
    </>
  );
};