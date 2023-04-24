import React, { useRef, useContext, useEffect } from "react";
import lancheImg from "../../assets/images/hamburguer.png";

import { CartContext } from "../../assets/utils/cartContext";


function CarouselItem({ title, items }) {
    const priceLancheRef = useRef();
    const categoryRef = useRef();

    const { cartItems, setCartItems } = useContext(CartContext);
    const addToCart = (lanche) => {
        setCartItems(prevCartItems => [...prevCartItems, lanche]);
    }


    const removeToCart = () => {

    }

    return (

        <div ref={categoryRef} className="container overflow-x-scroll flex mt-2 w-full  ">

            {items.map((lanche, index) => {
                return (
                    <div key={lanche.id} className="  ml-6 flex  flex-col justify-center items-center h-56 max-w-[150px]
     min-w-[150px] perspective bg-white rounded-md drop-shadow-md group"
                    >

                        <div className="text-center preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-500">
                            <div className=" absolute backface-hidden w-full h-full ">
                                <h1 className="text-white rounded-t-md bg-gradient-to-br from-amber-500 to-red-800 py-1">{lanche.nome}</h1>
                                <img className="w-full h-full max-h-[150px]" src={lancheImg} width={150} height={150} alt="Lanche" />
                            </div>
                            <div className="  my-rotate-y-180 backface-hidden rounded-md w-full h-full bg-white">
                                <div className="text-center flex flex-col items-center h-full justify-center">
                                    <p className="text-xs ">{lanche.ingredientes}</p>
                                </div>

                                <input ref={priceLancheRef}
                                    className="w-full h-4 bg-white text-center outline-none text-xl"
                                    readOnly
                                    type="text"
                                    value={'R$' + lanche.preco + ',00'}
                                />

                            </div>
                        </div>

                        <div className="flex items-center justify-center font-[400] text-white bg-gradient-to-br from-amber-500 to-red-800 h-8 rounded-b-md w-full mt-6 ">
                            <button onClick={() => addToCart(lanche)}>ADICIONAR</button>

                        </div>

                    </div>

                )
            })}

        </div>

    )
}

export default CarouselItem;