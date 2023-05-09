import React from "react";
import { Link } from "react-router-dom";

import { GrUserAdmin } from 'react-icons/gr';

function NavAdmin() {
    return (
        <nav className="bg-white shadow-xl w-screen py-2">
            <Link to={"/admin"}>
                <div className="flex justify-center">
                    <GrUserAdmin size={35} />
                    <h1 className="text-3xl font-semibold text-center text-black">DASHBOARD</h1>
                </div>
            </Link>
            <ul className="flex justify-end gap-4 p-2 flex-wrap mr-6">
                <li className=" navAdmLi">Lanches</li>
                <li className=" navAdmLi">Pizzas</li>
                <li className=" navAdmLi">Porções</li>
                <li className=" navAdmLi">Bebidas</li>
                <li className=" navAdmLi">Acréscimos</li>
            </ul>
        </nav>
    )
}

export default NavAdmin;