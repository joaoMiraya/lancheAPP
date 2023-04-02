import React from "react";

import { FaPizzaSlice } from 'react-icons/fa';

function SizePizzas({ HowFlavorFunction, howFlavor, PizzaSizeFunction, pizzaSize, flavorOneRef, flavorTwoRef }) {

    return (
        <>
            <div className="bg-white  flex justify-between items-center rounded-md w-4/5 mt-20 p-2">
                <div className="flex flex-col gap-2 text-white">
                    <button onClick={PizzaSizeFunction}
                        className="flex gap-2 items-center bg-gradient-to-br from-amber-500 to-red-800 rounded-sm p-1">
                        <p>{pizzaSize ? 'Individual' : 'Familia'}</p>
                        <FaPizzaSlice />
                    </button>
                    <button onClick={HowFlavorFunction}
                        className="bg-gradient-to-br from-amber-500 to-red-800 rounded-sm whitespace-nowrap px-2 py-1">
                        {howFlavor ? 'Dois Sabores' : 'Um sabor'}
                    </button>
                </div>
                <p className="text-center text-sm">
                    Selecione o tamanho e a quantidade de sabores da sua pizza
                </p>
            </div>

        </>
    )
}

export default SizePizzas;