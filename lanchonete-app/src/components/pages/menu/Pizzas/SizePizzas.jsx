import React from "react";

import { FaPizzaSlice } from 'react-icons/fa';

function SizePizzas({ HowFlavorFunction, howFlavor, PizzaSizeFunction, pizzaSize }) {

    return (
        <>
            <div className="bg-white text-white flex justify-center rounded-md w-4/5 mt-20 p-2 gap-2">
                <button onClick={PizzaSizeFunction} className="flex gap-2 items-center bg-gradient-to-br from-amber-500 to-red-800 rounded-sm p-1">
                    <p>{pizzaSize ? 'Individual' : 'Familia'}</p>
                    <FaPizzaSlice />
                </button>

                <button onClick={HowFlavorFunction} className="bg-gradient-to-br from-amber-500 to-red-800 rounded-sm whitespace-nowrap px-2 py-1">{howFlavor ? 'Dois Sabores' : 'Um sabor'}</button>
            </div>

        </>
    )
}

export default SizePizzas;