import React from "react";

import { GiBeerBottle } from 'react-icons/gi';
import Bebidas from "./BebidasMenu";

import CarouselMenu from "./CarouselMenu";
import MenusOfMenu from "./MenusOfMenu";

function Menu() {

    return (

        <div className="container p-0 flex flex-col h-screen">

            <CarouselMenu />

            <h1 className="text-4xl text-center mt-4">Você está com fome do que hoje?!</h1>

            <div className="flex flex-col justify-around mt-6 px-6">
                
                <MenusOfMenu />

                <div className="bg-white flex items-center justify-start mt-10 py-1 rounded-md shadow-2xl">
                    <GiBeerBottle className="absolute" size={40} />
                    <div className="w-full text-center flex justify-around">
                        <Bebidas />
                    </div>

                </div>

            </div>
        </div>

    )
};


export default Menu;