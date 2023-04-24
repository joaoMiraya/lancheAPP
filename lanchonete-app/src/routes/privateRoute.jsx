import React from "react";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}) {

    const user = sessionStorage.getItem('user') || localStorage.getItem('user')
   
    return user ? children : <Navigate to={"/"} />
}