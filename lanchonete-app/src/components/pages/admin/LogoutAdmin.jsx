import React from "react";
import { Link } from "react-router-dom";

import { GrUserAdmin } from 'react-icons/gr';


function LogoutAdmin() {

    function admLogout() {
        localStorage.clear();
        window.location.reload()
    };

    return (
        <>
            <div className="bg-white p-6 flex flex-col rounded-md drop-shadow-3xl">
                <div className="flex justify-center mb-10">
                    <GrUserAdmin size={35} />
                    <h1 className="text-2xl font-semibold text-center text-black">DASHBOARD</h1>
                </div>
                <Link className="mb-4 text-red-400" to={"/admin/dashboard"}>Ir para o Dashboard</Link>
                <button onClick={admLogout} className="border-[1px] border-gray-300 px-6 py-1 ">Desconectar</button>
            </div>
        </>
    )
}

export default LogoutAdmin;