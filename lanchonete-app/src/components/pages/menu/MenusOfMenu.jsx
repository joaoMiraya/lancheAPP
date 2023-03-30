import React from "react";
import { Link } from "react-router-dom";
import { GiHamburger, GiFullPizza } from 'react-icons/gi';
import { CiFries } from 'react-icons/ci';

function MenusOfMenu() {
    return (


        <div className="flex justify-around">
            <Link to="lanches">
                <div className="bg-white flex flex-col min-w-[95px] items-center rounded-md p-2 text-center drop-shadow-2xl">
                    <h1 className="text-xl">Lanches</h1>
                    <GiHamburger size={50} />
                </div>
            </Link>

            <Link to={"pizzas"}>
                <div className="bg-white flex flex-col min-w-[95px] items-center rounded-md p-2 text-center drop-shadow-2xl">
                    <h1 className="text-xl">Pizzas</h1>
                    <GiFullPizza size={50} />
                </div>
            </Link>

            <div className="bg-white flex flex-col min-w-[95px] items-center rounded-md p-2 text-center drop-shadow-2xl">
                <h1 className="text-xl">Porções</h1>
                <CiFries size={50} />
            </div>
        </div>

    )
}

export default MenusOfMenu;