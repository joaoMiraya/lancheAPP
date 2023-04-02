import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineShoppingCart } from 'react-icons/ai';

import porcaoImg from '../../../../assets/images/batataCarousel.jpg';

function PorcoesMenu() {

    const [porcoes, setPorcoes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3550/porcoes')
            .then(porcoesReturn => {
                setPorcoes(porcoesReturn.data)
            })
    }, []);
    console.log(porcoes)

    return (
        <>
            <h1 className="text-4xl text-center mt-20">Uma variedade de porções para você!</h1>
            <div className="container flex flex-col  h-screen overflow-x-scroll ">
                <div className=" flex items-center p-2 ">
                    {porcoes.map((porcao) => {
                        return (
                            <div key={porcao.id} className=" ml-6 flex flex-col items-center max-w-[200px]
                        min-w-[200px] perspective bg-white rounded-md drop-shadow-md group">
                                <img className=" rounded-t-md" src={porcaoImg} alt={porcao.nome} />
                                <div className="text-center p-2 min-h-[116px]">
                                    <h1 className=" text-xl font-semibold">{porcao.nome}</h1>
                                    <p>{porcao.ingredientes}</p>
                                </div>
                                <div className="flex w-full justify-around items-center p-2 ">
                                    <div className="flex flex-col items-center">
                                        <p>Meia</p>
                                        <p className="font-semibold">{porcao.preco_meia}</p>
                                        <AiOutlineShoppingCart size={25} />
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <p>Inteira</p>
                                        <p className="font-semibold">{porcao.preco}</p>
                                        <AiOutlineShoppingCart size={25} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default PorcoesMenu;