import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

import { AiOutlinePlusCircle } from 'react-icons/ai';

import lancheIMG from '../../../../assets/images/hamburguer.png';



function LancheDash() {

    const [lanches, setLanches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3550/lanches')
            .then((lancheReturn) => {
                setLanches(lancheReturn.data)
            })
    }, [])
    console.log(lanches)

    return (
        <div className="ml-6 flex flex-wrap mt-14">
            <Link to={"/admin/dashboard/lanche/add"}>
                <div className="bg-white px-12 h-[275px] cursor-pointer rounded-md shadow-2xl text-center flex flex-col items-center justify-around mr-2">
                    <AiOutlinePlusCircle size={80} />
                    <p className="font-semibold">ADICIONAR <br /> NOVO LANCHE</p>
                </div>
            </Link>
            {lanches.map((lanche) => {
                return (
                    <div key={lanche.id} className="flex justify-center">
                        <div className="bg-white text-center w-[200px] mr-2 mb-4 p-6 flex flex-col items-center justify-between rounded-md shadow-xl">
                            <img src={lanche.imagem} width={60} height={60} alt={lanche.nome} />
                            <div>
                                <p className="font-semibold">{lanche.nome}</p>
                                <p>{lanche.ingredientes}</p>
                            </div>
                            <p className="mt-4">R$ {lanche.preco}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default LancheDash;