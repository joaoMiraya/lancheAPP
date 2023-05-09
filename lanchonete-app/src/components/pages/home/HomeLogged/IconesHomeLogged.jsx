import React from "react";

import { CiBeerMugFull } from 'react-icons/ci';
import { BsStopwatch } from 'react-icons/bs';
import { MdMenuBook } from 'react-icons/md';

function IconesHomeLogged() {
    return (
        <div className="flex flex-col ml-6 gap-2 ">
            <div className="flex items-center gap-2 ">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[1px] border-gray-800">
                    <CiBeerMugFull size={30} className="hover:rotate-360 ease-in duration-500" />
                </div>
                <p className="text-xl">Cerveja e Chopp Gelado</p>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[1px] border-gray-800">
                    <BsStopwatch className="hover:rotate-360 ease-in duration-500" size={30} />
                </div>
                <p className="text-xl">Atendimento na hora</p>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex justify-center items-center h-10 w-10 rounded-full border-[1px] border-gray-800">
                    <MdMenuBook size={30} className="hover:rotate-360 ease-in duration-500" />
                </div>
                <p className="text-xl">Variedade de opções no Cardápio</p>
            </div>
        </div>
    )
}

export default IconesHomeLogged;