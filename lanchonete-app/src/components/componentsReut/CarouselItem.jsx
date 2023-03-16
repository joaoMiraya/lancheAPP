import React, { useRef } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import lancheImg from "../../assets/images/hamburguer.png";

function CarouselItem({ title, items }) {
    const priceLancheRef = useRef();
    const qntUndLancheRef = useRef();
    const categoryRef = useRef();

console.log(items)



    return (

        <div ref={categoryRef} className="container overflow-x-scroll flex mt-2 w-full  ">

            {items.map((lanche, index) => {
                return (
                    <div key={lanche.id} className=" p-2 ml-6 flex  flex-col justify-center items-center h-56 max-w-[150px]
     min-w-[150px] perspective bg-white rounded-md drop-shadow-md group"
                    >

                        <div className="text-center preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
                            <div className=" absolute backface-hidden w-full h-full ">
                                <h1 className="text-gray-600">{lanche.nome}</h1>
                                <img className="w-full h-full max-h-[150px]" src={lancheImg} width={150} height={150} alt="Lanche" />
                            </div>
                            <div className="  my-rotate-y-180 backface-hidden w-full h-full bg-white">
                                <div className="text-center flex flex-col items-center h-full justify-center">
                                    <p className="text-xs ">{lanche.ingredientes}</p>
                                </div>

                                <input ref={priceLancheRef}
                                    readOnly
                                    type="text"
                                    className="w-full h-4 bg-white text-center"
                                    value={'R$' + lanche.preco + ',00'}
                                />

                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6 ">
                            {/*   AQUI VAI A CHAMAR FUNÇÃO PARA DECREMENTAR */}
                            <AiOutlineMinusCircle size={22} className="text-red-600" />
                            <input className="w-12 border-b-4 text-center outline-none"
                                type="text"
                                value={lanche.count}
                                readOnly
                                ref={qntUndLancheRef}
                            />
                            {/*   AQUI VAI A CHAMAR FUNÇÃO PARA INCREMENTAR */}
                            <AiOutlinePlusCircle size={22} className="text-green-600" />
                        </div>

                    </div>

                )
            })}

        </div>

    )
}

export default CarouselItem;