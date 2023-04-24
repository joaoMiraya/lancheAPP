import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import chamabghome from '../../../assets/images/chamabghome.png';

import HomeCont from "./HomeCont";
import HomeLogged from "./HomeLogged/HomeLogged";



function Home() {
    const [userLogged, setUserLogged] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem('user') || localStorage.getItem('user')
        if (!user) {
            setUserLogged(false)
        } else {
            setUserLogged(true)
        };

    }, [userLogged])

    console.log(userLogged)
    return (
        <>
            {userLogged ? <HomeLogged /> : <HomeCont />}
        </>
    )

}

export default Home;



